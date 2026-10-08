import * as caffeDemo from "./_menus/caffe-demo.js";

// Static demo menus (no database). Key = value of `restaurant` in the request body.
const STATIC_MENUS = { "caffe-demo": caffeDemo };
const DB_SLUG = "kiwan-fakhri";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, language, sessionId, restaurant: requested } = req.body || {};

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }
    if (message.length > 1000) {
      return res.status(400).json({ error: "Message too long" });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;

    if (!openaiKey || !supabaseUrl || !supabaseAnonKey) {
      console.error("Missing environment variables");
      return res.status(500).json({ error: "Server configuration error" });
    }

    let restaurantName, restaurantId = null, compactMenu, menuNotes = "";
    const staticMenu = typeof requested === "string" ? STATIC_MENUS[requested] : null;

    if (staticMenu) {
      restaurantName = `${staticMenu.restaurant.name} – ${staticMenu.restaurant.subtitle}`;
      compactMenu = staticMenu.items.map(item => ({
        name: item.name,
        category: item.cat,
        price: item.price,
        price_is_starting_price: !!item.from,
        description: (item.d || []).join(", "),
        size: item.size || null,
        vegetarian: !!item.veg,
        vegan: !!item.vegan,
        spicy_level: item.spicy || 0,
        contains_alcohol: !!item.alc,
        house_favourite: !!item.best,
        available: true
      }));
      menuNotes = Object.values(staticMenu.restaurant.notes || {}).join(" ");
    } else {
      const headers = { apikey: supabaseAnonKey };
      const restaurantResponse = await fetch(
        `${supabaseUrl}/rest/v1/restaurants?slug=eq.${DB_SLUG}&select=id,name`,
        { headers }
      );
      if (!restaurantResponse.ok) {
        console.error("Restaurant fetch failed:", await restaurantResponse.text());
        return res.status(500).json({ error: "Menu database error" });
      }
      const restaurant = (await restaurantResponse.json())?.[0];
      if (!restaurant) return res.status(500).json({ error: "Restaurant not found" });
      restaurantId = restaurant.id;
      restaurantName = restaurant.name;

      const menuResponse = await fetch(
        `${supabaseUrl}/rest/v1/menu_items?restaurant_id=eq.${restaurant.id}&select=*`,
        { headers }
      );
      if (!menuResponse.ok) {
        console.error("Menu fetch failed:", await menuResponse.text());
        return res.status(500).json({ error: "Menu database error" });
      }
      const menuItems = await menuResponse.json();
      compactMenu = menuItems.map(item => ({
        name: item.name,
        category: item.category,
        price: Number(item.price),
        available: item.available,
        calories: item.calories,
        protein: item.protein,
        fat: item.fat,
        carbs: item.carbs,
        vegetarian: item.vegetarian,
        vegan: item.vegan,
        cuisine: item.cuisine,
        flavors: item.flavors,
        spicy_level: item.spicy_level,
        protein_source: item.protein_source,
        ingredients: item.ingredients,
        prep_time: item.prep_time,
        bestseller: item.bestseller || false,
        serving_size: item.serving_size || null
      }));
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiKey}`
      },
      body: JSON.stringify({
        model: "gpt-5.6-luna",
        instructions: `
You are KIWA, the friendly digital waiter of "${restaurantName}".

LANGUAGE:
- Answer in the same language as the customer.
- The UI language code is: ${language || "unknown"}.
- Keep Italian dish names as they are; translate descriptions if needed.

CORE RULES:
- Use ONLY the live menu data provided below.
- Never invent dishes, prices, ingredients, sizes, availability, or other menu facts.
- NEVER recommend an item where available = false.
- If price_is_starting_price is true, say "ab" / "from" before the price.
- Keep answers natural, useful, and short (max. about 6 lines).
- Plain text only. Do not use Markdown symbols such as ** or ##.

PERSONALITY:
- Warm, professional, slightly playful when appropriate. A touch of Italian charm is welcome.
- Do not overpraise the customer.

ALLERGIES, INTOLERANCES AND HEALTH (strict):
- Do NOT give any information about allergens, intolerances, gluten, lactose, nuts or other trace substances, and do not say whether a dish is safe or free of anything.
- For any such question, answer politely that you cannot give information about allergens or intolerances and that the staff will gladly help personally. Then you may offer to help with something else.
- Do not give medical or nutritional advice.

ALCOHOL:
- Items with contains_alcohol = true contain alcohol. When asked for non-alcoholic options, only suggest items where contains_alcohol = false.

MENU LOGIC:
- Respect budgets exactly.
- Vegan request: only vegan items. Vegetarian request: only vegetarian items.
- Not spicy: spicy_level = 0. Spicy: prefer spicy_level 2-3.
- Suggest a fitting drink or dessert when it feels natural.
- If no item satisfies the request, say so clearly.
- Do not answer unrelated general questions; explain that you are the digital waiter.
${menuNotes ? "\nHOUSE NOTES: " + menuNotes : ""}

LIVE MENU DATA:
${JSON.stringify(compactMenu)}
        `,
        input: message,
        max_output_tokens: 400
      })
    });

    const data = await response.json();
    if (!response.ok) {
      console.error("OpenAI error:", data);
      return res.status(500).json({ error: "AI service error" });
    }

    const answer = data.output
      ?.flatMap(item => item.content || [])
      ?.find(content => content.type === "output_text")
      ?.text;

    // Analytics (database restaurant only) must never block the customer response.
    if (restaurantId) {
      try {
        await fetch(`${supabaseUrl}/rest/v1/analytics_events`, {
          method: "POST",
          headers: {
            apikey: supabaseAnonKey,
            "Content-Type": "application/json",
            "Prefer": "return=minimal"
          },
          body: JSON.stringify({
            restaurant_id: restaurantId,
            event_type: "kiwa_chat",
            language: language || null,
            session_id:
              typeof sessionId === "string" &&
              /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(sessionId)
                ? sessionId
                : null
          })
        });
      } catch (analyticsError) {
        console.error("Analytics insert skipped:", analyticsError);
      }
    }

    return res.status(200).json({
      answer: answer || "Entschuldigung, ich konnte keine Antwort erstellen."
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}

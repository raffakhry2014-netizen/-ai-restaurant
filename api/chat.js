export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, language, sessionId } = req.body || {};

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;

    if (!supabaseUrl || !supabaseAnonKey || !openaiKey) {
      console.error("Missing environment variables");
      return res.status(500).json({ error: "Server configuration error" });
    }

    const headers = {
      apikey: supabaseAnonKey
    };

    const restaurantResponse = await fetch(
      `${supabaseUrl}/rest/v1/restaurants?slug=eq.kiwan-fakhri&select=id,name`,
      { headers }
    );

    if (!restaurantResponse.ok) {
      console.error("Restaurant fetch failed:", await restaurantResponse.text());
      return res.status(500).json({ error: "Menu database error" });
    }

    const restaurants = await restaurantResponse.json();
    const restaurant = restaurants?.[0];

    if (!restaurant) {
      return res.status(500).json({ error: "Restaurant not found" });
    }

    const menuResponse = await fetch(
      `${supabaseUrl}/rest/v1/menu_items?restaurant_id=eq.${restaurant.id}&select=*`,
      { headers }
    );

    if (!menuResponse.ok) {
      console.error("Menu fetch failed:", await menuResponse.text());
      return res.status(500).json({ error: "Menu database error" });
    }

    const menuItems = await menuResponse.json();

    const compactMenu = menuItems.map(item => ({
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
      gluten_free: item.gluten_free,
      cuisine: item.cuisine,
      flavors: item.flavors,
      spicy_level: item.spicy_level,
      protein_source: item.protein_source,
      ingredients: item.ingredients,
      allergens: item.allergens,
      prep_time: item.prep_time,
      bestseller: item.bestseller || false,
      serving_size: item.serving_size || null
    }));

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiKey}`
      },

      body: JSON.stringify({
        model: "gpt-5.6-luna",

        instructions: `
You are KIWA, the friendly digital waiter for Kiwan Fakhri Restaurant in Konstanz, Germany.

LANGUAGE:
- Answer in the same language as the customer.
- The UI language code is: ${language || "unknown"}.

CORE RULES:
- Use ONLY the live menu data provided below.
- Never invent dishes, prices, ingredients, calories, protein, allergens, preparation times, availability, or other menu facts.
- NEVER recommend an item where available = false.
- If the customer asks about an unavailable item, clearly say it is currently unavailable and suggest a suitable available alternative.
- Keep answers natural, useful, and reasonably brief.
- Plain text only. Do not use Markdown symbols such as ** or ##.

PERSONALITY:
- Friendly, warm, professional, and slightly playful when appropriate.
- For healthy or lighter choices, be encouraging without moralizing.
- For spicy food, you may sound adventurous.
- For desserts, you may sound fun.
- Do not overpraise the customer.

ALLERGY & SAFETY:
- For allergy, intolerance, medical, or serious dietary questions, do not joke.
- Never claim that a dish is completely safe for an allergy.
- State listed allergens clearly.
- Always advise confirming with restaurant staff because cross-contamination may occur.
- Nutrition values are approximate demo estimates.

MENU LOGIC:
- Respect budgets exactly.
- Vegan request: only vegan items.
- Vegetarian request: only vegetarian items.
- Gluten-free request: only items where gluten_free = true, with cross-contamination caution.
- Not spicy: spicy_level = 0.
- Mild: prefer spicy_level = 1.
- Medium: prefer spicy_level = 2.
- Hot: prefer spicy_level = 3.
- Low calorie: compare calorie values.
- High protein: compare protein values.
- If no AVAILABLE menu item satisfies the request, say so clearly.
- Do not answer unrelated general questions; explain that you are the restaurant's digital waiter.

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

    // Analytics must never block the customer response.
    try {
      await fetch(`${supabaseUrl}/rest/v1/analytics_events`, {
        method: "POST",
        headers: {
          apikey: supabaseAnonKey,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify({
          restaurant_id: restaurant.id,
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

    return res.status(200).json({
      answer:
        answer ||
        "Entschuldigung, ich konnte keine Antwort erstellen."
    });

  } catch (error) {
    console.error("Chat API error:", error);

    return res.status(500).json({
      error: "Something went wrong"
    });
  }
}

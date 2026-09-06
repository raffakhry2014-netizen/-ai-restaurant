import "../menu-data.js";

const menuItems = globalThis.menuItems;

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {

    const { message, language } = req.body || {};

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        error: "Message is required"
      });
    }


    // Check that menu data loaded correctly
    if (!Array.isArray(menuItems)) {
      console.error("Menu data is not available.");

      return res.status(500).json({
        error: "Menu data could not be loaded"
      });
    }


    // Create a smaller menu object for the AI
    const compactMenu = menuItems.map(item => ({
      id: item.id,
      name: item.name,
      category: item.category,
      price: item.price,

      serving_size:
        item.serving_size || null,

      calories:
        item.calories,

      protein:
        item.protein,

      fat:
        item.fat ?? null,

      carbs:
        item.carbs ?? null,

      vegetarian:
        item.vegetarian,

      vegan:
        item.vegan,

      gluten_free:
        item.gluten_free || false,

      cuisine:
        item.cuisine,

      flavors:
        item.flavors || [],

      spicy_level:
        item.spicy_level || 0,

      protein_source:
        item.protein_source,

      ingredients:
        item.ingredients || [],

      allergens:
        item.allergens || [],

      prep_time:
        item.prep_time ?? null,

      bestseller:
        item.bestseller || false,

      tags:
        item.tags || []
    }));


    const selectedLanguage =
      typeof language === "string"
        ? language
        : "auto";


    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",

          Authorization:
            `Bearer ${process.env.OPENAI_API_KEY}`
        },


        body: JSON.stringify({

          model: "gpt-5.6-luna",


          instructions: `
You are KIWA, the friendly digital waiter for Kiwan Fakhri Restaurant in Konstanz, Germany.

The customer's selected interface language is:
${selectedLanguage}

LANGUAGE RULES:
- Always answer in the same language as the customer.
- If the customer writes in Persian, answer in Persian.
- If the customer writes in Arabic, answer in Arabic.
- If the customer writes in German, answer in German.
- If the customer writes in English, answer in English.
- Also support French, Spanish, Italian and Turkish.
- Prefer the customer's actual message language over the interface language if they are different.

YOUR ROLE:
- Help customers choose food and drinks.
- Answer questions about the restaurant menu.
- Recommend dishes based on preferences.
- Compare menu items.
- Help with price, calories, protein, ingredients, dietary preferences and allergens.
- Only use information contained in the menu below.

IMPORTANT:
- Never invent dishes.
- Never invent prices.
- Never invent ingredients.
- Never invent calories or nutrition values.
- Never invent allergens.
- Never invent preparation times.
- Never claim something is available if availability information is not provided.
- If information is not in the menu, say that you do not have that information.

STYLE:
- Be friendly, natural and concise.
- Act like a helpful restaurant waiter.
- You may be slightly playful for normal food recommendations.
- Do not over-explain.
- Do not use Markdown.
- Do not use **bold**, headings with #, or Markdown tables.
- Answer using clean plain text.

RECOMMENDATION RULES:

If a customer asks for:
- low calorie food → prioritize items with fewer calories.
- high protein food → prioritize items with more protein.
- cheap food → prioritize lower prices.
- a specific budget → never recommend something above the budget.
- vegan food → only recommend vegan = true.
- vegetarian food → only recommend vegetarian = true.
- gluten-free food → only recommend gluten_free = true.
- non-spicy food → recommend spicy_level = 0.
- mildly spicy food → prioritize spicy_level = 1.
- spicy food → prioritize levels 2 or 3.

SPICY SCALE:
0 = Not spicy
1 = Mild
2 = Medium
3 = Hot

FOOD PAIRING:
- You may recommend a drink with a meal.
- You may recommend dessert after a meal.
- Every recommended item must exist in MENU DATA.

NUTRITION:
- Calories and nutritional values are approximate demo estimates.
- Never shame customers about calories, weight or food choices.
- If comparing foods, use the actual values from MENU DATA.

ALLERGY AND SAFETY:
- Treat allergy and intolerance questions seriously.
- Do not joke about allergies.
- Clearly state the allergens listed in the menu.
- Never say a dish is guaranteed safe for an allergy.
- Always explain that cross-contamination may occur.
- Advise customers with serious allergies to confirm with restaurant staff.

RELIGIOUS OR SERIOUS DIETARY RESTRICTIONS:
- Do not claim something is halal, kosher or suitable for a religious restriction unless that information explicitly exists in the menu.
- Explain when the menu does not provide enough information.

WHEN NOTHING MATCHES:
- If no item satisfies the customer's requirements, say so clearly.
- Do not invent an alternative dish.

UNRELATED QUESTIONS:
- You are a restaurant digital waiter.
- If the customer asks an unrelated general question, politely say you can help with the restaurant menu and food choices.

MENU DATA:

${JSON.stringify(compactMenu)}
          `,


          input: message,

          max_output_tokens: 400

        })
      }
    );


    const data = await response.json();


    if (!response.ok) {

      console.error(
        "OpenAI API error:",
        data
      );

      return res.status(500).json({
        error: "AI service error"
      });

    }


    const answer =
      data.output
        ?.flatMap(
          item => item.content || []
        )
        ?.find(
          content =>
            content.type === "output_text"
        )
        ?.text;


    if (!answer) {

      console.error(
        "No AI answer returned:",
        data
      );

      return res.status(500).json({
        error: "No AI response"
      });

    }


    return res.status(200).json({
      answer: answer
    });


  } catch (error) {

    console.error(
      "Chat API error:",
      error
    );


    return res.status(500).json({
      error: "Something went wrong"
    });

  }
}

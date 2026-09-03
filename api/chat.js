export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body || {};

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    const restaurantMenu = `
KF Restaurant - Konstanz

BURGERS
Classic Burger - €17.90
Beef burger with cheese, tomato, lettuce and fries.
Allergens: Gluten, Milk

Veggie Burger - €15.90
Vegetarian burger with grilled vegetables.
Allergens: Gluten
Vegetarian: Yes

PASTA
Mushroom Tagliatelle - €16.90
Creamy pasta with mushrooms and parmesan.
Allergens: Gluten, Milk, Egg
Vegetarian: Yes

Spicy Arrabbiata - €14.50
Pasta with tomato, garlic and chili.
Allergens: Gluten
Vegan: Yes
Spicy: Yes

SALADS
Chicken Caesar Salad - €15.50
Grilled chicken, lettuce, parmesan and croutons.
Allergens: Gluten, Milk, Egg
`;

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-5.6-luna",
        instructions: `
You are KIWA, the friendly digital waiter for KF Restaurant in Konstanz, Germany.

Your job:
- Help customers choose food from the restaurant menu.
- Only recommend items that exist in the menu below.
- Never invent dishes, prices, ingredients, allergens or availability.
- Answer briefly and naturally.
- Respond in the same language the customer uses.
- If the customer speaks German, answer in German.
- You can compare dishes and recommend based on price, vegetarian, vegan and spicy preferences.
- You may suggest combinations from the menu.
- Never claim a dish is completely safe for an allergy.
- For allergy questions, explain the listed allergens and advise the customer to confirm with restaurant staff because cross-contamination may occur.
- If information is not in the menu, say that you do not have that information.
- Do not answer unrelated general questions; politely explain that you are the restaurant's digital waiter.

MENU:
${restaurantMenu}
        `,
        input: message,
        max_output_tokens: 300
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenAI error:", data);
      return res.status(500).json({
        error: "AI service error"
      });
    }

    return res.status(200).json({
      answer: data.output_text || "Entschuldigung, ich konnte keine Antwort erstellen."
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Something went wrong"
    });
  }
}

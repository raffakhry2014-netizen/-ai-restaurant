const menuItems = [
  // =========================
  // STARTERS
  // =========================

  {
    id: 1,
    name: "Garlic Bread",
    description: "Crispy garlic bread with parsley and parmesan.",
    category: "Starter",
    price: 6.5,
    serving_size: "3 pieces",
    calories: 420,
    protein: 10,
    fat: 18,
    carbs: 52,
    vegetarian: true,
    vegan: false,
    gluten_free: false,
    cuisine: "Italian",
    flavors: ["savory", "crispy", "aromatic"],
    spicy_level: 0,
    protein_source: "vegetarian",
    ingredients: ["Baguette", "Garlic butter", "Parsley", "Parmesan"],
    allergens: ["Gluten", "Milk"],
    prep_time: 8,
    tags: ["quick", "comfort_food"]
  },

  {
    id: 2,
    name: "Bruschetta Classica",
    description: "Fresh tomato bruschetta with basil, garlic and olive oil.",
    category: "Starter",
    price: 7.9,
    serving_size: "4 pieces",
    calories: 310,
    protein: 8,
    fat: 14,
    carbs: 36,
    vegetarian: true,
    vegan: true,
    gluten_free: false,
    cuisine: "Italian",
    flavors: ["fresh", "light", "savory"],
    spicy_level: 0,
    protein_source: "vegan",
    ingredients: ["Toasted bread", "Tomato", "Basil", "Garlic", "Olive oil"],
    allergens: ["Gluten"],
    prep_time: 5,
    tags: ["quick", "healthy", "fresh"]
  },

  {
    id: 3,
    name: "Mozzarella Sticks",
    description: "Crispy mozzarella sticks served with tomato dip.",
    category: "Starter",
    price: 8.9,
    serving_size: "6 pieces",
    calories: 560,
    protein: 22,
    fat: 28,
    carbs: 48,
    vegetarian: true,
    vegan: false,
    gluten_free: false,
    cuisine: "American",
    flavors: ["crispy", "creamy", "savory"],
    spicy_level: 0,
    protein_source: "vegetarian",
    ingredients: ["Mozzarella", "Breadcrumbs", "Tomato dip"],
    allergens: ["Gluten", "Milk", "Egg"],
    prep_time: 12,
    tags: ["indulgent", "comfort_food"]
  },

  {
    id: 4,
    name: "Chicken Wings",
    description: "Juicy chicken wings with smoky BBQ sauce.",
    category: "Starter",
    price: 9.9,
    serving_size: "8 pieces",
    calories: 680,
    protein: 38,
    fat: 42,
    carbs: 16,
    vegetarian: false,
    vegan: false,
    gluten_free: true,
    cuisine: "American",
    flavors: ["savory", "spicy", "rich"],
    spicy_level: 1,
    protein_source: "chicken",
    ingredients: ["Chicken wings", "Spices", "BBQ sauce"],
    allergens: [],
    prep_time: 15,
    tags: ["quick", "party_food", "comfort_food"]
  },

  {
    id: 5,
    name: "Crispy Calamari",
    description: "Crispy calamari with lemon and creamy aioli.",
    category: "Starter",
    price: 10.9,
    serving_size: "200g",
    calories: 520,
    protein: 30,
    fat: 24,
    carbs: 38,
    vegetarian: false,
    vegan: false,
    gluten_free: false,
    cuisine: "Mediterranean",
    flavors: ["crispy", "savory", "light"],
    spicy_level: 0,
    protein_source: "seafood",
    ingredients: ["Calamari", "Breadcrumb coating", "Lemon", "Aioli"],
    allergens: ["Gluten", "Egg", "Molluscs"],
    prep_time: 10,
    tags: ["premium"]
  },

  // =========================
  // SALADS
  // =========================

  {
    id: 6,
    name: "Chicken Caesar Salad",
    description: "Classic Caesar salad topped with grilled chicken.",
    category: "Salad",
    price: 15.5,
    serving_size: "1 bowl",
    calories: 610,
    protein: 42,
    fat: 32,
    carbs: 28,
    vegetarian: false,
    vegan: false,
    gluten_free: false,
    cuisine: "Mediterranean",
    flavors: ["savory", "fresh", "light"],
    spicy_level: 0,
    protein_source: "chicken",
    ingredients: [
      "Grilled chicken",
      "Romaine lettuce",
      "Parmesan",
      "Croutons",
      "Caesar dressing"
    ],
    allergens: ["Gluten", "Milk", "Egg"],
    prep_time: 12,
    tags: ["healthy", "protein_rich"]
  },

  {
    id: 7,
    name: "Greek Salad",
    description: "Fresh Mediterranean salad with feta and olives.",
    category: "Salad",
    price: 13.9,
    serving_size: "1 bowl",
    calories: 430,
    protein: 13,
    fat: 24,
    carbs: 38,
    vegetarian: true,
    vegan: false,
    gluten_free: true,
    cuisine: "Mediterranean",
    flavors: ["fresh", "savory", "light"],
    spicy_level: 0,
    protein_source: "vegetarian",
    ingredients: ["Tomato", "Cucumber", "Olives", "Feta", "Red onion"],
    allergens: ["Milk"],
    prep_time: 8,
    tags: ["healthy", "fresh", "quick"]
  },

  {
    id: 8,
    name: "Avocado Quinoa Salad",
    description: "Fresh quinoa salad with avocado, spinach and chickpeas.",
    category: "Salad",
    price: 15.9,
    serving_size: "1 bowl",
    calories: 520,
    protein: 17,
    fat: 22,
    carbs: 58,
    vegetarian: true,
    vegan: true,
    gluten_free: true,
    cuisine: "Fusion",
    flavors: ["fresh", "light", "creamy"],
    spicy_level: 0,
    protein_source: "vegan",
    ingredients: ["Quinoa", "Avocado", "Spinach", "Tomato", "Chickpeas"],
    allergens: [],
    prep_time: 10,
    tags: ["healthy", "vegan", "protein_rich", "superfood"]
  },

  {
    id: 9,
    name: "Tuna Salad",
    description: "Protein-rich tuna salad with egg and olives.",
    category: "Salad",
    price: 16.5,
    serving_size: "1 bowl",
    calories: 490,
    protein: 38,
    fat: 18,
    carbs: 22,
    vegetarian: false,
    vegan: false,
    gluten_free: true,
    cuisine: "Mediterranean",
    flavors: ["savory", "fresh", "light"],
    spicy_level: 0,
    protein_source: "fish",
    ingredients: ["Tuna", "Lettuce", "Egg", "Tomato", "Olives"],
    allergens: ["Fish", "Egg"],
    prep_time: 8,
    tags: ["healthy", "high_protein", "quick"]
  },

  // =========================
  // BURGERS
  // =========================

  {
    id: 10,
    name: "Classic Burger",
    description: "Classic beef burger with cheddar, fresh vegetables and fries.",
    category: "Burger",
    price: 17.9,
    serving_size: "1 burger + fries",
    calories: 820,
    protein: 44,
    fat: 38,
    carbs: 72,
    vegetarian: false,
    vegan: false,
    gluten_free: false,
    cuisine: "American",
    flavors: ["savory", "rich", "crispy"],
    spicy_level: 0,
    protein_source: "beef",
    ingredients: [
      "Beef patty",
      "Cheddar",
      "Tomato",
      "Lettuce",
      "Onion",
      "Burger sauce",
      "Brioche bun",
      "French fries"
    ],
    allergens: ["Gluten", "Milk", "Egg"],
    prep_time: 15,
    tags: ["comfort_food", "indulgent"]
  },

  {
    id: 11,
    name: "Double Beef Burger",
    description: "Double beef burger for serious burger lovers.",
    category: "Burger",
    price: 20.9,
    serving_size: "1 burger",
    calories: 1080,
    protein: 65,
    fat: 52,
    carbs: 68,
    vegetarian: false,
    vegan: false,
    gluten_free: false,
    cuisine: "American",
    flavors: ["savory", "rich", "indulgent"],
    spicy_level: 0,
    protein_source: "beef",
    ingredients: [
      "Two beef patties",
      "Cheddar",
      "Caramelized onion",
      "Burger sauce",
      "Brioche bun"
    ],
    allergens: ["Gluten", "Milk", "Egg"],
    prep_time: 18,
    tags: ["indulgent", "protein_rich", "premium"],
    bestseller: true
  },

  {
    id: 12,
    name: "Spicy Jalapeño Burger",
    description: "A spicy beef burger with jalapeños and salsa.",
    category: "Burger",
    price: 18.9,
    serving_size: "1 burger + fries",
    calories: 870,
    protein: 45,
    fat: 40,
    carbs: 74,
    vegetarian: false,
    vegan: false,
    gluten_free: false,
    cuisine: "American",
    flavors: ["savory", "spicy", "crispy"],
    spicy_level: 2,
    protein_source: "beef",
    ingredients: [
      "Beef patty",
      "Cheddar",
      "Jalapeño",
      "Salsa",
      "Lettuce",
      "Brioche bun"
    ],
    allergens: ["Gluten", "Milk", "Egg"],
    prep_time: 15,
    tags: ["comfort_food", "spicy"]
  },

  {
    id: 13,
    name: "Crispy Chicken Burger",
    description: "Crispy chicken burger with fresh salad and special sauce.",
    category: "Burger",
    price: 17.5,
    serving_size: "1 burger + fries",
    calories: 790,
    protein: 41,
    fat: 35,
    carbs: 70,
    vegetarian: false,
    vegan: false,
    gluten_free: false,
    cuisine: "American",
    flavors: ["crispy", "savory", "light"],
    spicy_level: 0,
    protein_source: "chicken",
    ingredients: [
      "Crispy chicken",
      "Lettuce",
      "Tomato",
      "Special sauce",
      "Brioche bun"
    ],
    allergens: ["Gluten", "Egg"],
    prep_time: 14,
    tags: ["comfort_food", "quick"]
  },

  {
    id: 14,
    name: "Veggie Burger",
    description: "Vegetarian burger with grilled vegetable patty.",
    category: "Burger",
    price: 15.9,
    serving_size: "1 burger + fries",
    calories: 650,
    protein: 20,
    fat: 22,
    carbs: 82,
    vegetarian: true,
    vegan: false,
    gluten_free: false,
    cuisine: "American",
    flavors: ["savory", "light", "fresh"],
    spicy_level: 0,
    protein_source: "vegetarian",
    ingredients: [
      "Vegetable patty",
      "Tomato",
      "Lettuce",
      "Onion",
      "Burger sauce",
      "Bun"
    ],
    allergens: ["Gluten"],
    prep_time: 12,
    tags: ["vegetarian", "healthy"]
  },

  {
    id: 15,
    name: "Vegan Avocado Burger",
    description: "Plant-based burger with creamy avocado and vegan sauce.",
    category: "Burger",
    price: 16.9,
    serving_size: "1 burger + fries",
    calories: 620,
    protein: 19,
    fat: 24,
    carbs: 78,
    vegetarian: true,
    vegan: true,
    gluten_free: false,
    cuisine: "American",
    flavors: ["savory", "creamy", "fresh"],
    spicy_level: 0,
    protein_source: "vegan",
    ingredients: [
      "Vegan patty",
      "Avocado",
      "Lettuce",
      "Tomato",
      "Vegan sauce",
      "Bun"
    ],
    allergens: ["Gluten"],
    prep_time: 12,
    tags: ["vegan", "healthy"]
  },

  // =========================
  // MAIN COURSES
  // =========================

  {
    id: 16,
    name: "Grilled Chicken Plate",
    description: "Lean grilled chicken breast with rice and vegetables.",
    category: "Main",
    price: 18.9,
    serving_size: "200g chicken",
    calories: 640,
    protein: 52,
    fat: 18,
    carbs: 52,
    vegetarian: false,
    vegan: false,
    gluten_free: true,
    cuisine: "Mediterranean",
    flavors: ["savory", "light", "fresh"],
    spicy_level: 0,
    protein_source: "chicken",
    ingredients: [
      "Grilled chicken breast",
      "Rice",
      "Seasonal vegetables"
    ],
    allergens: [],
    prep_time: 20,
    tags: ["healthy", "high_protein", "quick"]
  },

  {
    id: 17,
    name: "Beef Steak 250g",
    description: "250g grilled beef steak with roasted potatoes and vegetables.",
    category: "Main",
    price: 26.9,
    serving_size: "250g steak",
    calories: 780,
    protein: 62,
    fat: 42,
    carbs: 38,
    vegetarian: false,
    vegan: false,
    gluten_free: true,
    cuisine: "Mediterranean",
    flavors: ["savory", "rich", "umami"],
    spicy_level: 0,
    protein_source: "beef",
    ingredients: ["Beef steak", "Roasted potatoes", "Seasonal vegetables"],
    allergens: [],
    prep_time: 25,
    tags: ["premium", "indulgent", "high_protein"],
    customizations: [
      {
        name: "Steak Doneness",
        type: "choice",
        options: [
          "Rare",
          "Medium Rare",
          "Medium",
          "Medium Well",
          "Well Done"
        ],
        required: true
      }
    ]
  },

  {
    id: 18,
    name: "BBQ Ribs",
    description: "Slow-cooked BBQ ribs with fries and coleslaw.",
    category: "Main",
    price: 23.9,
    serving_size: "1 rack",
    calories: 1050,
    protein: 58,
    fat: 58,
    carbs: 68,
    vegetarian: false,
    vegan: false,
    gluten_free: false,
    cuisine: "American",
    flavors: ["savory", "rich", "smoky"],
    spicy_level: 1,
    protein_source: "pork",
    ingredients: ["Pork ribs", "BBQ sauce", "French fries", "Coleslaw"],
    allergens: [],
    prep_time: 35,
    tags: ["indulgent", "slow_cooked", "comfort_food"]
  },

  {
    id: 19,
    name: "Chicken Curry",
    description: "Creamy coconut chicken curry with rice.",
    category: "Main",
    price: 18.5,
    serving_size: "1 bowl",
    calories: 720,
    protein: 43,
    fat: 32,
    carbs: 62,
    vegetarian: false,
    vegan: false,
    gluten_free: true,
    cuisine: "Asian",
    flavors: ["savory", "creamy", "aromatic", "spicy"],
    spicy_level: 2,
    protein_source: "chicken",
    ingredients: ["Chicken", "Coconut curry sauce", "Vegetables", "Rice"],
    allergens: [],
    prep_time: 22,
    tags: ["aromatic", "comfort_food", "exotic"]
  },

  {
    id: 20,
    name: "Beef Teriyaki Bowl",
    description: "Tender beef with vegetables, rice and teriyaki sauce.",
    category: "Main",
    price: 19.9,
    serving_size: "1 bowl",
    calories: 760,
    protein: 46,
    fat: 24,
    carbs: 78,
    vegetarian: false,
    vegan: false,
    gluten_free: false,
    cuisine: "Asian",
    flavors: ["savory", "umami", "light"],
    spicy_level: 0,
    protein_source: "beef",
    ingredients: ["Beef", "Rice", "Broccoli", "Carrot", "Teriyaki sauce"],
    allergens: ["Soy"],
    prep_time: 18,
    tags: ["quick", "protein_rich"]
  },

  // =========================
  // PASTA
  // =========================

  {
    id: 21,
    name: "Mushroom Tagliatelle",
    description: "Creamy tagliatelle with mushrooms and parmesan.",
    category: "Pasta",
    price: 16.9,
    serving_size: "1 plate",
    calories: 710,
    protein: 23,
    fat: 32,
    carbs: 74,
    vegetarian: true,
    vegan: false,
    gluten_free: false,
    cuisine: "Italian",
    flavors: ["creamy", "savory", "rich"],
    spicy_level: 0,
    protein_source: "vegetarian",
    ingredients: ["Tagliatelle", "Mushrooms", "Cream", "Parmesan"],
    allergens: ["Gluten", "Milk", "Egg"],
    prep_time: 16,
    tags: ["comfort_food", "indulgent"]
  },

  {
    id: 22,
    name: "Spicy Arrabbiata",
    description: "Classic spicy tomato pasta with garlic and chili.",
    category: "Pasta",
    price: 14.5,
    serving_size: "1 plate",
    calories: 560,
    protein: 16,
    fat: 14,
    carbs: 82,
    vegetarian: true,
    vegan: true,
    gluten_free: false,
    cuisine: "Italian",
    flavors: ["savory", "spicy", "light"],
    spicy_level: 3,
    protein_source: "vegan",
    ingredients: ["Pasta", "Tomato", "Garlic", "Chili", "Olive oil"],
    allergens: ["Gluten"],
    prep_time: 14,
    tags: ["vegan", "spicy", "quick"]
  },

  {
    id: 23,
    name: "Chicken Alfredo",
    description: "Creamy Alfredo pasta with grilled chicken.",
    category: "Pasta",
    price: 17.9,
    serving_size: "1 plate",
    calories: 850,
    protein: 46,
    fat: 42,
    carbs: 76,
    vegetarian: false,
    vegan: false,
    gluten_free: false,
    cuisine: "Italian",
    flavors: ["creamy", "savory", "rich"],
    spicy_level: 0,
    protein_source: "chicken",
    ingredients: ["Pasta", "Chicken", "Cream", "Parmesan"],
    allergens: ["Gluten", "Milk"],
    prep_time: 16,
    tags: ["comfort_food", "indulgent", "protein_rich"]
  },

  {
    id: 24,
    name: "Bolognese",
    description: "Traditional pasta with rich beef and tomato sauce.",
    category: "Pasta",
    price: 16.9,
    serving_size: "1 plate",
    calories: 790,
    protein: 39,
    fat: 28,
    carbs: 84,
    vegetarian: false,
    vegan: false,
    gluten_free: false,
    cuisine: "Italian",
    flavors: ["savory", "rich", "umami"],
    spicy_level: 0,
    protein_source: "beef",
    ingredients: ["Pasta", "Beef", "Tomato sauce", "Carrot", "Celery"],
    allergens: ["Gluten"],
    prep_time: 18,
    tags: ["comfort_food", "classic"]
  },

  {
    id: 25,
    name: "Pesto Pasta",
    description: "Pasta with fresh basil pesto, parmesan and pine nuts.",
    category: "Pasta",
    price: 15.9,
    serving_size: "1 plate",
    calories: 680,
    protein: 21,
    fat: 32,
    carbs: 72,
    vegetarian: true,
    vegan: false,
    gluten_free: false,
    cuisine: "Italian",
    flavors: ["fresh", "aromatic", "savory"],
    spicy_level: 0,
    protein_source: "vegetarian",
    ingredients: ["Pasta", "Basil pesto", "Parmesan", "Pine nuts"],
    allergens: ["Gluten", "Milk", "Nuts"],
    prep_time: 12,
    tags: ["fresh", "light", "quick"]
  },

  // =========================
  // VEGAN / VEGETARIAN
  // =========================

  {
    id: 26,
    name: "Grilled Vegetable Bowl",
    description: "Colorful grilled vegetables with chickpeas and quinoa.",
    category: "Vegan",
    price: 14.9,
    serving_size: "1 bowl",
    calories: 480,
    protein: 16,
    fat: 12,
    carbs: 72,
    vegetarian: true,
    vegan: true,
    gluten_free: true,
    cuisine: "Fusion",
    flavors: ["fresh", "light", "savory"],
    spicy_level: 0,
    protein_source: "vegan",
    ingredients: [
      "Zucchini",
      "Eggplant",
      "Bell pepper",
      "Chickpeas",
      "Quinoa"
    ],
    allergens: [],
    prep_time: 18,
    tags: ["healthy", "vegan", "fresh"]
  },

  {
    id: 27,
    name: "Falafel Bowl",
    description: "Falafel bowl with hummus, fresh vegetables and quinoa.",
    category: "Vegan",
    price: 15.5,
    serving_size: "1 bowl",
    calories: 590,
    protein: 21,
    fat: 22,
    carbs: 68,
    vegetarian: true,
    vegan: true,
    gluten_free: false,
    cuisine: "Mediterranean",
    flavors: ["savory", "crispy", "aromatic"],
    spicy_level: 0,
    protein_source: "vegan",
    ingredients: ["Falafel", "Hummus", "Lettuce", "Tomato", "Quinoa"],
    allergens: ["Sesame"],
    prep_time: 14,
    tags: ["vegan", "exotic", "protein_rich"]
  },

  {
    id: 28,
    name: "Vegan Curry",
    description: "Plant-based coconut curry with chickpeas and vegetables.",
    category: "Vegan",
    price: 15.9,
    serving_size: "1 bowl",
    calories: 610,
    protein: 18,
    fat: 18,
    carbs: 82,
    vegetarian: true,
    vegan: true,
    gluten_free: true,
    cuisine: "Asian",
    flavors: ["savory", "creamy", "aromatic", "spicy"],
    spicy_level: 1,
    protein_source: "vegan",
    ingredients: ["Chickpeas", "Coconut milk", "Vegetables", "Rice"],
    allergens: [],
    prep_time: 20,
    tags: ["vegan", "aromatic", "comfort_food"]
  },

  {
    id: 29,
    name: "Protein Power Bowl",
    description: "High-protein vegan bowl with quinoa, beans and avocado.",
    category: "Vegan",
    price: 16.9,
    serving_size: "1 bowl",
    calories: 570,
    protein: 25,
    fat: 18,
    carbs: 72,
    vegetarian: true,
    vegan: true,
    gluten_free: true,
    cuisine: "Fusion",
    flavors: ["savory", "light", "fresh"],
    spicy_level: 0,
    protein_source: "vegan",
    ingredients: [
      "Quinoa",
      "Chickpeas",
      "Kidney beans",
      "Avocado",
      "Vegetables"
    ],
    allergens: [],
    prep_time: 12,
    tags: ["vegan", "healthy", "protein_rich", "quick"],
    bestseller: true
  },

  // =========================
  // DESSERTS
  // =========================

  {
    id: 30,
    name: "Tiramisu",
    description: "Classic Italian coffee-flavoured tiramisu.",
    category: "Dessert",
    price: 7.9,
    serving_size: "1 slice",
    calories: 460,
    protein: 8,
    fat: 22,
    carbs: 54,
    vegetarian: true,
    vegan: false,
    gluten_free: false,
    cuisine: "Italian",
    flavors: ["sweet", "rich", "aromatic"],
    spicy_level: 0,
    protein_source: "vegetarian",
    ingredients: ["Mascarpone", "Coffee", "Ladyfingers", "Cocoa"],
    allergens: ["Gluten", "Milk", "Egg"],
    prep_time: 5,
    tags: ["indulgent", "classic"]
  },

  {
    id: 31,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center and vanilla ice cream.",
    category: "Dessert",
    price: 8.5,
    serving_size: "1 cake",
    calories: 620,
    protein: 9,
    fat: 32,
    carbs: 72,
    vegetarian: true,
    vegan: false,
    gluten_free: false,
    cuisine: "American",
    flavors: ["sweet", "rich", "indulgent"],
    spicy_level: 0,
    protein_source: "vegetarian",
    ingredients: [
      "Chocolate cake",
      "Chocolate center",
      "Vanilla ice cream"
    ],
    allergens: ["Gluten", "Milk", "Egg"],
    prep_time: 12,
    tags: ["indulgent", "warm_dessert"]
  },

  {
    id: 32,
    name: "Cheesecake",
    description: "Creamy cheesecake with a crunchy biscuit base.",
    category: "Dessert",
    price: 7.9,
    serving_size: "1 slice",
    calories: 510,
    protein: 10,
    fat: 28,
    carbs: 52,
    vegetarian: true,
    vegan: false,
    gluten_free: false,
    cuisine: "American",
    flavors: ["sweet", "creamy", "rich"],
    spicy_level: 0,
    protein_source: "vegetarian",
    ingredients: ["Cream cheese", "Biscuit base", "Sugar"],
    allergens: ["Gluten", "Milk", "Egg"],
    prep_time: 5,
    tags: ["indulgent", "classic"]
  },

  {
    id: 33,
    name: "Fruit Bowl",
    description: "Refreshing bowl of seasonal fresh fruit.",
    category: "Dessert",
    price: 6.9,
    serving_size: "1 bowl",
    calories: 190,
    protein: 3,
    fat: 1,
    carbs: 48,
    vegetarian: true,
    vegan: true,
    gluten_free: true,
    cuisine: "Mediterranean",
    flavors: ["sweet", "fresh", "light"],
    spicy_level: 0,
    protein_source: "vegan",
    ingredients: ["Seasonal fresh fruit"],
    allergens: [],
    prep_time: 5,
    tags: ["healthy", "vegan", "light"]
  },

  // =========================
  // COLD DRINKS
  // =========================

  {
    id: 34,
    name: "Coca-Cola",
    description: "Classic chilled Coca-Cola.",
    category: "Cold Drink",
    price: 3.9,
    serving_size: "0.33 L",
    calories: 139,
    protein: 0,
    fat: 0,
    carbs: 35,
    vegetarian: true,
    vegan: true,
    gluten_free: true,
    cuisine: "American",
    flavors: ["sweet"],
    spicy_level: 0,
    protein_source: "vegan",
    ingredients: ["Cola"],
    allergens: [],
    prep_time: 1,
    tags: ["quick", "classic"]
  },

  {
    id: 35,
    name: "Coca-Cola Zero",
    description: "Sugar-free Coca-Cola served chilled.",
    category: "Cold Drink",
    price: 3.9,
    serving_size: "0.33 L",
    calories: 1,
    protein: 0,
    fat: 0,
    carbs: 0,
    vegetarian: true,
    vegan: true,
    gluten_free: true,
    cuisine: "American",
    flavors: ["sweet"],
    spicy_level: 0,
    protein_source: "vegan",
    ingredients: ["Sugar-free cola"],
    allergens: [],
    prep_time: 1,
    tags: ["quick", "low_calorie", "sugar_free"]
  },

  {
    id: 36,
    name: "Homemade Lemonade",
    description: "Fresh homemade lemonade with lemon and mint.",
    category: "Cold Drink",
    price: 4.9,
    serving_size: "0.4 L",
    calories: 160,
    protein: 0,
    fat: 0,
    carbs: 42,
    vegetarian: true,
    vegan: true,
    gluten_free: true,
    cuisine: "Mediterranean",
    flavors: ["sweet", "fresh"],
    spicy_level: 0,
    protein_source: "vegan",
    ingredients: ["Lemon", "Mint", "Sparkling water", "Sugar"],
    allergens: [],
    prep_time: 3,
    tags: ["fresh", "quick"]
  },

  {
    id: 37,
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice.",
    category: "Cold Drink",
    price: 4.9,
    serving_size: "0.3 L",
    calories: 135,
    protein: 2,
    fat: 0,
    carbs: 32,
    vegetarian: true,
    vegan: true,
    gluten_free: true,
    cuisine: "Mediterranean",
    flavors: ["sweet", "fresh"],
    spicy_level: 0,
    protein_source: "vegan",
    ingredients: ["Fresh orange juice"],
    allergens: [],
    prep_time: 5,
    tags: ["fresh", "quick"]
  },

  // =========================
  // HOT DRINKS
  // =========================

  {
    id: 38,
    name: "Espresso",
    description: "Strong Italian-style espresso.",
    category: "Hot Drink",
    price: 2.8,
    serving_size: "1 cup (30ml)",
    calories: 5,
    protein: 0,
    fat: 0,
    carbs: 0,
    vegetarian: true,
    vegan: true,
    gluten_free: true,
    cuisine: "Italian",
    flavors: ["aromatic", "rich"],
    spicy_level: 0,
    protein_source: "vegan",
    ingredients: ["Espresso coffee"],
    allergens: [],
    prep_time: 2,
    tags: ["quick", "classic", "low_calorie"]
  },

  {
    id: 39,
    name: "Cappuccino",
    description: "Espresso with steamed milk and creamy foam.",
    category: "Hot Drink",
    price: 3.9,
    serving_size: "1 cup (250ml)",
    calories: 110,
    protein: 6,
    fat: 4,
    carbs: 9,
    vegetarian: true,
    vegan: false,
    gluten_free: true,
    cuisine: "Italian",
    flavors: ["aromatic", "creamy"],
    spicy_level: 0,
    protein_source: "vegetarian",
    ingredients: ["Espresso", "Milk foam"],
    allergens: ["Milk"],
    prep_time: 3,
    tags: ["quick", "classic"]
  },

  {
    id: 40,
    name: "Latte Macchiato",
    description: "Layered espresso with plenty of warm milk.",
    category: "Hot Drink",
    price: 4.5,
    serving_size: "1 cup (300ml)",
    calories: 160,
    protein: 8,
    fat: 6,
    carbs: 16,
    vegetarian: true,
    vegan: false,
    gluten_free: true,
    cuisine: "Italian",
    flavors: ["aromatic", "creamy"],
    spicy_level: 0,
    protein_source: "vegetarian",
    ingredients: ["Espresso", "Steamed milk"],
    allergens: ["Milk"],
    prep_time: 4,
    tags: ["quick", "classic"]
  }
];

function filterByDiet(items, options = {}) {
  return items.filter(item => {
    if (options.vegan && !item.vegan) return false;
    if (options.vegetarian && !item.vegetarian) return false;
    if (options.gluten_free && !item.gluten_free) return false;
    return true;
  });
}

function filterBySpiceLevel(items, maxLevel) {
  return items.filter(item => item.spicy_level <= maxLevel);
}

function filterByCuisine(items, cuisine) {
  return items.filter(item => item.cuisine === cuisine);
}

function searchByTags(items, searchTags) {
  return items.filter(item => {
    const itemTags = [
      ...(item.tags || []),
      ...(item.flavors || []),
      item.category,
      item.cuisine,
      item.protein_source
    ];

    return searchTags.some(searchTag =>
      itemTags.some(tag =>
        String(tag).toLowerCase().includes(searchTag.toLowerCase())
      )
    );
  });
}

function filterByPrice(items, minPrice, maxPrice) {
  return items.filter(
    item => item.price >= minPrice && item.price <= maxPrice
  );
}

function filterByCalories(items, maxCalories) {
  return items.filter(item => item.calories <= maxCalories);
}

function filterByProtein(items, minProtein) {
  return items.filter(item => item.protein >= minProtein);
}

function getBestsellers(items) {
  return items.filter(item => item.bestseller);
}

function getMenuItemById(id) {
  return menuItems.find(item => item.id === id);
}

function getMenuItemByName(name) {
  return menuItems.find(
    item => item.name.toLowerCase() === name.toLowerCase()
  );
}

if (typeof window !== "undefined") {
  window.menuItems = menuItems;
  window.menuHelpers = {
    filterByDiet,
    filterBySpiceLevel,
    filterByCuisine,
    searchByTags,
    filterByPrice,
    filterByCalories,
    filterByProtein,
    getBestsellers,
    getMenuItemById,
    getMenuItemByName
  };
}

export { menuItems };

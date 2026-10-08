// Demo menu for a fictional Italian café ("Bella Vista – Caffè & Ristorante").
// Used by /api/menu (guest menu) and /api/chat (KIWA). No allergen or nutrition data on purpose.
// Fields: id, cat, name, price, from (price is a starting price), d (description parts, German),
// size, veg, vegan, spicy (0-3), alc (contains alcohol), best (house favourite), img (image key).

export const restaurant = {
  slug: "caffe-demo",
  name: "Bella Vista",
  subtitle: "Caffè & Ristorante",
  notes: {
    pasta: "Jede Pasta auch mit Burrata erhältlich (+4,00 €).",
    pizza: "Jede Pizza auch mit Büffelmozzarella oder Burrata erhältlich (+4,00 €).",
    hot: "Alle Kaffeespezialitäten auch mit Pistaziencreme (+1,00 €), Sahne (+0,60 €) oder Milchalternative (+0,80 €)."
  }
};

export const categories = [
  "special", "breakfast", "antipasti", "salads", "pasta", "focaccia", "pizza",
  "hot", "cold", "aperitivo", "cocktails", "mocktails", "wine_beer", "digestivo"
];

export const items = [
  // Gericht der Woche
  { id: 1, cat: "special", name: "Spaghetti al verde di rucola", price: 9.9, d: ["Rucola-Ricotta-Creme", "Zitronenzeste", "confierte Kirschtomaten"], veg: true, best: true, img: "pasta-verde" },

  // Frühstück
  { id: 10, cat: "breakfast", name: "Italienisches Frühstück", price: 8.5, from: true, d: ["Croissant nach Wahl (Schokolade, Vanille, Marmelade oder Pistazie)", "Cappuccino", "Orangensaft (0,2 l)"], veg: true, best: true, img: "breakfast" },
  { id: 11, cat: "breakfast", name: "Kaiser Frühstück", price: 13.5, d: ["Brot", "Käse", "Aufschnitt", "Butter", "Marmelade", "gekochtes Ei", "Orangensaft (0,2 l)", "Kaffee oder Tee"] },
  { id: 12, cat: "breakfast", name: "Iranisches Frühstück", price: 16.9, d: ["2 Eier in Tomatensoße oder Spiegeleier mit karamellisierten Datteln", "Tomaten und Gurken", "Walnüsse mit Feta", "Butter", "Marmelade", "Brot", "Kaffee oder Tee"], veg: true },
  { id: 13, cat: "breakfast", name: "Prosecco Frühstück (für 2 Personen)", price: 30.0, d: ["4 Spiegeleier", "Brot", "Parmaschinken", "frisches Obst", "2 Gläser Prosecco", "2 Orangensäfte (0,2 l)"], alc: true },
  { id: 14, cat: "breakfast", name: "Fitness Frühstück", price: 9.5, d: ["Naturjoghurt", "Müsli", "Chiasamen", "frisches Obst"], veg: true },
  { id: 15, cat: "breakfast", name: "Spiegel- oder Rührei", price: 6.0, d: ["3 Eier", "Brot"], veg: true },
  { id: 16, cat: "breakfast", name: "Spiegel- oder Rührei mit Speck", price: 7.5, d: ["3 Eier", "Speck", "Brot"] },
  { id: 17, cat: "breakfast", name: "Eggs Benedict", price: 10.0, d: ["Brot", "2 Eier", "Sauce Hollandaise", "Speck"] },

  // Antipasti
  { id: 20, cat: "antipasti", name: "Bruschetta al Pomodoro", price: 5.9, d: ["knuspriges Brot", "frische Tomaten", "Knoblauch", "Basilikum", "Olivenöl"], size: "3 Stück", veg: true, vegan: true, img: "bruschetta" },
  { id: 21, cat: "antipasti", name: "Bruschette Miste Speciale", price: 8.5, d: ["geröstetes Brot", "Tomaten", "Basilikum", "Olivencreme", "Auberginencreme", "Artischockencreme", "Stängelkohlcreme"], size: "7 Stück", veg: true },
  { id: 22, cat: "antipasti", name: "Antipasto Misto (1 Person)", price: 13.9, d: ["Käseauswahl", "Aufschnitt", "Bruschetta"], best: true, img: "antipasto" },
  { id: 23, cat: "antipasti", name: "Antipasto Vegetariano (1 Person)", price: 13.9, d: ["Bruschetta", "gegrilltes Gemüse (Paprika, Zucchini, Auberginen)", "Olivenöl"], veg: true },
  { id: 24, cat: "antipasti", name: "Caprese", price: 8.9, d: ["frische Tomaten", "Büffelmozzarella (125 g)"], veg: true, img: "caprese" },
  { id: 25, cat: "antipasti", name: "Antipasto Misto (2 Personen)", price: 24.9, d: ["Käseauswahl", "Gemüse", "Aufschnitt", "Bruschetta"], img: "antipasto" },
  { id: 26, cat: "antipasti", name: "Antipasto Vegetariano (2 Personen)", price: 24.9, d: ["Käseauswahl", "Gemüse", "Bruschetta"], veg: true },

  // Salate & Beilagen
  { id: 30, cat: "salads", name: "Olive Ascolane", price: 5.0, d: ["gefüllte, frittierte Oliven"], size: "6 Stück" },
  { id: 31, cat: "salads", name: "Kleiner Beilagensalat", price: 5.0, d: ["Salat", "Tomaten", "Gurken", "Karotten oder Mais"], veg: true, vegan: true },
  { id: 32, cat: "salads", name: "Pommes frites", price: 5.0, d: ["Ketchup", "Mayonnaise"], veg: true },
  { id: 33, cat: "salads", name: "Salat Fitness", price: 13.9, d: ["gemischter Salat", "gebratene Putenbrust", "Dressing nach Wahl"] },
  { id: 34, cat: "salads", name: "Salat Champignons", price: 12.9, d: ["gemischter Salat", "gebratene Champignons", "Dressing nach Wahl"], veg: true },
  { id: 35, cat: "salads", name: "Salat Calamari", price: 15.9, d: ["gemischter Salat", "frittierte Calamari", "Dressing nach Wahl"] },
  { id: 36, cat: "salads", name: "Bauernsalat", price: 8.0, d: ["Tomaten", "Feta", "rote Zwiebeln", "Balsamico", "Basilikum"], veg: true },

  // Pasta
  { id: 40, cat: "pasta", name: "Lasagne", price: 12.9, from: true, d: ["Fior di Latte", "Parmesan", "Rinder-Bolognese"], best: true, img: "lasagne" },
  { id: 41, cat: "pasta", name: "Spaghetti Aglio e Olio", price: 9.9, from: true, d: ["Knoblauch", "Olivenöl", "Chili"], veg: true, vegan: true, spicy: 1 },
  { id: 42, cat: "pasta", name: "Spaghetti Napoli", price: 10.9, from: true, d: ["Tomatensoße", "frisches Basilikum"], veg: true, vegan: true },
  { id: 43, cat: "pasta", name: "Spaghetti alla Carbonara", price: 13.9, from: true, d: ["Guanciale", "Ei", "Parmesan"], best: true, img: "carbonara" },
  { id: 44, cat: "pasta", name: "Spaghetti Bolognese", price: 12.9, from: true, d: ["Rinder-Bolognese", "Parmesan"] },
  { id: 45, cat: "pasta", name: "Spaghetti al Pesto Verde", price: 12.9, from: true, d: ["hausgemachtes Basilikumpesto", "Olivenöl", "Kirschtomaten", "Knoblauch"], veg: true },
  { id: 46, cat: "pasta", name: "Linguine alla Mediterranea", price: 15.9, from: true, d: ["Garnelen", "Weißweinsoße", "frische Petersilie"] },
  { id: 47, cat: "pasta", name: "Linguine ai Frutti di Mare", price: 15.9, from: true, d: ["Meeresfrüchte", "Tomatensoße", "frische Petersilie"] },
  { id: 48, cat: "pasta", name: "Rigatoni alla Calabrese", price: 13.9, from: true, d: ["würzige Tomatensoße", "Nduja aus Kalabrien"], spicy: 3 },

  // Focaccia
  { id: 50, cat: "focaccia", name: "Focaccia Bologna", price: 9.9, d: ["Mortadella", "Burrata", "Olivenöl"], img: "focaccia" },
  { id: 51, cat: "focaccia", name: "Focaccia Firenze", price: 11.9, d: ["Büffelmozzarella", "Bresaola", "Balsamico", "Parmesanflocken"] },
  { id: 52, cat: "focaccia", name: "Focaccia Napoli", price: 9.9, d: ["Tomaten", "Büffelmozzarella", "Pesto"], veg: true },
  { id: 53, cat: "focaccia", name: "Focaccia Cosenza", price: 10.9, d: ["Nduja", "Aubergine", "Spianata", "Scamorza"], spicy: 2 },
  { id: 54, cat: "focaccia", name: "Focaccia Parma", price: 10.9, d: ["Büffelmozzarella", "Parmaschinken", "Rucola", "Tomaten", "Olivenöl"], best: true, img: "focaccia" },
  { id: 55, cat: "focaccia", name: "Focaccia Venezia", price: 10.9, d: ["Friarielli-Creme", "gegrilltes Gemüse", "Artischocken", "getrocknete Tomaten"], veg: true },
  { id: 56, cat: "focaccia", name: "Focaccia Maranello", price: 11.9, d: ["rotes Pesto", "gegrilltes Gemüse", "Oliven", "Feta"], veg: true },

  // Pizza
  { id: 60, cat: "pizza", name: "Pizza Bufalina", price: 15.9, from: true, d: ["Fior di Latte", "Parmaschinken", "Rucola", "Tomaten", "Büffelmozzarella", "Grana-Padano-Flocken"], best: true },
  { id: 61, cat: "pizza", name: "Pizza Gourmet", price: 15.9, from: true, d: ["Fior di Latte", "geräucherter Scamorza", "Tomaten", "Bresaola", "Burrata", "Grana-Padano-Flocken"] },
  { id: 62, cat: "pizza", name: "Pizza Mortadellata", price: 14.9, from: true, d: ["Fior di Latte", "Mortadella", "Büffelmozzarella", "Pistazie", "Zitronenabrieb", "Olivenöl"] },
  { id: 63, cat: "pizza", name: "Pizza Patate e Salsiccia", price: 14.9, from: true, d: ["Fior di Latte", "Kartoffeln", "Salsiccia", "Rosmarin"] },
  { id: 64, cat: "pizza", name: "Pizza Capricciosa", price: 13.9, from: true, d: ["Tomatensoße", "Fior di Latte", "Kochschinken", "Artischocken", "Champignons", "schwarze Oliven"] },
  { id: 65, cat: "pizza", name: "Pizza Vegetariana", price: 13.9, from: true, d: ["Tomatensoße", "Fior di Latte", "Gemüse der Saison", "Oregano"], veg: true },
  { id: 66, cat: "pizza", name: "Pizza Tropea", price: 13.9, from: true, d: ["Tomatensoße", "Fior di Latte", "Thunfisch", "rote Zwiebeln", "Olivenöl"] },
  { id: 67, cat: "pizza", name: "Pizza Napoli", price: 13.9, from: true, d: ["Tomatensoße", "Fior di Latte", "Sardellen", "Oliven", "Oregano"] },
  { id: 68, cat: "pizza", name: "Pizza Vegana", price: 12.9, from: true, d: ["Tomatensoße", "Gemüse der Saison", "Oregano"], veg: true, vegan: true },
  { id: 69, cat: "pizza", name: "Pizza Prosciutto", price: 11.9, from: true, d: ["Tomatensoße", "Fior di Latte", "Kochschinken"] },
  { id: 70, cat: "pizza", name: "Pizza Salame", price: 11.9, from: true, d: ["Tomatensoße", "Fior di Latte", "italienische Salami (auf Wunsch scharf)"] },
  { id: 71, cat: "pizza", name: "Pizza Diavola Calabrese", price: 11.9, from: true, d: ["Fior di Latte", "Tomatensoße", "Nduja"], spicy: 3 },
  { id: 72, cat: "pizza", name: "Pizza Margherita", price: 9.9, from: true, d: ["Tomatensoße", "Mozzarella", "Basilikum"], veg: true, best: true, img: "pizza" },
  { id: 73, cat: "pizza", name: "Pizza Marinara", price: 8.9, from: true, d: ["Tomatensoße", "Knoblauch", "Oregano", "Olivenöl"], veg: true, vegan: true },
  { id: 74, cat: "pizza", name: "Pizza Nutella (süß)", price: 11.9, from: true, d: ["Nutella", "Haselnüsse", "Puderzucker"], veg: true },

  // Warme Getränke
  { id: 80, cat: "hot", name: "Espresso", price: 2.4, from: true, d: [], veg: true, img: "espresso" },
  { id: 81, cat: "hot", name: "Espresso Macchiato", price: 2.6, from: true, d: [], veg: true },
  { id: 82, cat: "hot", name: "Espresso Doppio", price: 4.2, from: true, d: [], veg: true },
  { id: 83, cat: "hot", name: "Caffè Lungo", price: 2.9, from: true, d: [], veg: true },
  { id: 84, cat: "hot", name: "Cappuccino", price: 3.4, from: true, d: [], veg: true, best: true, img: "cappuccino" },
  { id: 85, cat: "hot", name: "Latte Macchiato", price: 3.9, from: true, d: [], veg: true },
  { id: 86, cat: "hot", name: "Marocchino", price: 3.0, from: true, d: ["Espresso", "Schokosirup", "Milchschaum"], veg: true },
  { id: 87, cat: "hot", name: "Mocaccino", price: 4.2, from: true, d: ["Espresso", "Milch", "Schokosirup", "Sahne"], veg: true },
  { id: 88, cat: "hot", name: "Ciobar", price: 3.7, from: true, d: ["italienische Trinkschokolade"], veg: true },
  { id: 89, cat: "hot", name: "Caffè Maria Theresia", price: 5.0, from: true, d: ["Espresso", "Orangenlikör (4 cl)", "Milch", "Sahne"], veg: true, alc: true },
  { id: 90, cat: "hot", name: "Caffè Corretto", price: 3.9, from: true, d: ["Espresso", "1 cl Grappa, Amaretto, Anice oder Sambuca"], veg: true, alc: true },
  { id: 91, cat: "hot", name: "Heiße Schokolade", price: 3.4, from: true, d: [], veg: true },
  { id: 92, cat: "hot", name: "Heiße Schokolade mit Sahne", price: 4.0, from: true, d: [], veg: true },
  { id: 93, cat: "hot", name: "Tee", price: 3.2, from: true, d: ["verschiedene Sorten"], veg: true, vegan: true },
  { id: 94, cat: "hot", name: "Warm Killer", price: 5.0, from: true, d: ["heißes Wasser", "Ingwer", "Honig", "Zitrone", "Minze"], veg: true },

  // Kalte Getränke
  { id: 100, cat: "cold", name: "San Pellegrino", price: 3.2, from: true, d: ["Mineralwasser mit Kohlensäure"], veg: true, vegan: true },
  { id: 101, cat: "cold", name: "Acqua Panna", price: 3.2, from: true, d: ["stilles Wasser"], veg: true, vegan: true },
  { id: 102, cat: "cold", name: "Cola", price: 3.9, size: "0,33 l", d: [], veg: true, vegan: true },
  { id: 103, cat: "cold", name: "Cola Zero", price: 3.9, size: "0,33 l", d: [], veg: true, vegan: true },
  { id: 104, cat: "cold", name: "Fanta / Sprite / Mezzo Mix", price: 3.9, size: "0,33 l", d: [], veg: true, vegan: true },
  { id: 105, cat: "cold", name: "Chinotto", price: 3.2, size: "0,2 l", d: [], veg: true, vegan: true },
  { id: 106, cat: "cold", name: "Crodino", price: 3.2, size: "0,2 l", d: ["alkoholfreier Aperitif"], veg: true, vegan: true },
  { id: 107, cat: "cold", name: "San Bitter", price: 3.2, size: "0,2 l", d: ["alkoholfreier Aperitif"], veg: true, vegan: true },
  { id: 108, cat: "cold", name: "Estathé", price: 3.8, size: "0,2 l", d: [], veg: true, vegan: true },
  { id: 109, cat: "cold", name: "Iced Tea", price: 3.9, size: "0,33 l", d: [], veg: true, vegan: true },
  { id: 110, cat: "cold", name: "Fruchtsäfte", price: 3.8, from: true, size: "0,2 l / 0,4 l", d: [], veg: true, vegan: true },
  { id: 111, cat: "cold", name: "Fruchtsaftschorle", price: 4.2, size: "0,4 l", d: [], veg: true, vegan: true },
  { id: 112, cat: "cold", name: "Red Bull", price: 3.8, d: [], veg: true },

  // Aperitivo
  { id: 120, cat: "aperitivo", name: "Prosecco", price: 4.5, from: true, d: [], veg: true, alc: true },
  { id: 121, cat: "aperitivo", name: "Prosecco Rosé", price: 4.5, from: true, d: [], veg: true, alc: true },
  { id: 122, cat: "aperitivo", name: "Aperol Spritz", price: 8.9, d: [], veg: true, alc: true, best: true, img: "spritz" },
  { id: 123, cat: "aperitivo", name: "Hugo", price: 8.9, d: [], veg: true, alc: true },
  { id: 124, cat: "aperitivo", name: "Lillet", price: 8.9, d: [], veg: true, alc: true },
  { id: 125, cat: "aperitivo", name: "Bellini", price: 8.9, d: [], veg: true, alc: true },
  { id: 126, cat: "aperitivo", name: "Italicus Spritz", price: 9.9, d: [], veg: true, alc: true },
  { id: 127, cat: "aperitivo", name: "Limoncello Spritz", price: 9.9, d: [], veg: true, alc: true },
  { id: 128, cat: "aperitivo", name: "Sarti Spritz", price: 9.9, d: [], veg: true, alc: true },
  { id: 129, cat: "aperitivo", name: "Spritz della Casa", price: 8.9, d: [], veg: true, alc: true },
  { id: 130, cat: "aperitivo", name: "Martini Bianco", price: 5.9, d: [], veg: true, alc: true },
  { id: 131, cat: "aperitivo", name: "Martini Rosso", price: 5.9, d: [], veg: true, alc: true },
  { id: 132, cat: "aperitivo", name: "Martini alkoholfrei", price: 6.9, d: [], veg: true },

  // Cocktails
  { id: 140, cat: "cocktails", name: "Negroni", price: 10.5, d: ["Gin", "Wermut", "Campari"], veg: true, alc: true },
  { id: 141, cat: "cocktails", name: "Moscow Mule", price: 9.5, d: ["Wodka", "Limette", "Ginger Beer"], veg: true, alc: true },
  { id: 142, cat: "cocktails", name: "Cuba Libre", price: 9.5, d: ["brauner Rum", "Limette", "Rohrzucker", "Cola"], veg: true, alc: true },
  { id: 143, cat: "cocktails", name: "Caipirinha", price: 9.5, d: ["Limette", "brauner Zucker", "Cachaça"], veg: true, alc: true },
  { id: 144, cat: "cocktails", name: "Mojito", price: 9.5, d: ["weißer Rum", "Rohrzucker", "Limette", "Minze", "Tonic Water"], veg: true, alc: true },
  { id: 145, cat: "cocktails", name: "Sex on the Beach", price: 9.5, d: ["Pfirsich-Wodka", "Orangensaft", "Cranberrysaft"], veg: true, alc: true },
  { id: 146, cat: "cocktails", name: "Tequila Sunrise", price: 9.5, d: ["Tequila", "Orangensaft", "Grenadine"], veg: true, alc: true },
  { id: 147, cat: "cocktails", name: "Mi-To (Milano-Torino)", price: 9.5, d: ["Campari", "Martini Rosso"], veg: true, alc: true },
  { id: 148, cat: "cocktails", name: "Daiquiri", price: 8.9, d: ["weißer Rum", "Rohrzucker", "Limette"], veg: true, alc: true },
  { id: 149, cat: "cocktails", name: "Piña Colada", price: 9.5, d: ["weißer Rum", "Ananassaft", "Kokossirup"], veg: true, alc: true },
  { id: 150, cat: "cocktails", name: "Old Fashioned", price: 10.5, d: ["Whiskey", "Würfelzucker", "Angostura"], veg: true, alc: true },
  { id: 151, cat: "cocktails", name: "Whiskey Sour", price: 10.9, d: ["Whiskey", "Zitronensaft", "Zuckersirup", "Eiweiß", "Angostura"], alc: true },
  { id: 152, cat: "cocktails", name: "Amaretto Sour", price: 10.9, d: ["Amaretto", "Zitronensaft", "Zuckersirup", "Eiweiß", "Angostura"], alc: true },

  // Alkoholfreie Cocktails
  { id: 160, cat: "mocktails", name: "Mint Tonic", price: 6.9, d: ["Tonic Water", "Pfefferminzsirup", "Zitronensaft", "Minze"], veg: true, vegan: true },
  { id: 161, cat: "mocktails", name: "Joo Margherita", price: 6.9, d: ["Johannisbeersaft", "Orangensaft", "Zitronensaft"], veg: true, vegan: true },
  { id: 162, cat: "mocktails", name: "Fizz Fix", price: 6.9, d: ["Grenadine", "Orangensaft", "Zitronensaft", "Sodawasser"], veg: true, vegan: true },
  { id: 163, cat: "mocktails", name: "Mo-Jo", price: 7.9, d: ["Limette", "Zucker", "Bitter Lemon", "Minze"], veg: true, vegan: true },
  { id: 164, cat: "mocktails", name: "Vi-Co", price: 7.9, d: ["Kokossirup", "Pfirsichsirup", "Ananassaft", "Kokosmilch"], veg: true, vegan: true },
  { id: 165, cat: "mocktails", name: "Virgin Sunrise", price: 7.9, d: ["Orangensaft", "Ananassaft", "Zitronensaft", "Grenadine"], veg: true, vegan: true },

  // Wein & Bier
  { id: 170, cat: "wine_beer", name: "Weißwein (offen)", price: 4.9, from: true, d: [], veg: true, alc: true },
  { id: 171, cat: "wine_beer", name: "Rotwein (offen)", price: 4.9, from: true, d: [], veg: true, alc: true },
  { id: 172, cat: "wine_beer", name: "Rosé (offen)", price: 4.9, from: true, d: [], veg: true, alc: true },
  { id: 173, cat: "wine_beer", name: "Hefeweizen vom Fass", price: 3.8, from: true, d: [], veg: true, alc: true },
  { id: 174, cat: "wine_beer", name: "Pils vom Fass", price: 3.8, from: true, d: [], veg: true, alc: true },
  { id: 175, cat: "wine_beer", name: "Radler vom Fass", price: 3.8, from: true, d: ["süß oder sauer"], veg: true, alc: true },
  { id: 176, cat: "wine_beer", name: "Birra Moretti", price: 3.8, size: "0,33 l", d: [], veg: true, alc: true },
  { id: 177, cat: "wine_beer", name: "Peroni Nastro Azzurro", price: 3.8, size: "0,33 l", d: [], veg: true, alc: true },
  { id: 178, cat: "wine_beer", name: "Peroni 0,0 % alkoholfrei", price: 3.8, size: "0,33 l", d: [], veg: true },

  // Digestivi & Gin
  { id: 190, cat: "digestivo", name: "Limoncello", price: 3.0, size: "2 cl", d: [], veg: true, alc: true },
  { id: 191, cat: "digestivo", name: "Amaro del Capo", price: 3.0, size: "2 cl", d: [], veg: true, alc: true },
  { id: 192, cat: "digestivo", name: "Sambuca", price: 5.0, size: "2 cl", d: [], veg: true, alc: true },
  { id: 193, cat: "digestivo", name: "Grappa Riserva", price: 8.9, size: "4 cl", d: [], veg: true, alc: true },
  { id: 194, cat: "digestivo", name: "Gin Tonic Classico", price: 9.9, d: ["London Dry Gin", "Tonic Water"], veg: true, alc: true },
  { id: 195, cat: "digestivo", name: "Gin Mare & Tonic", price: 14.9, d: ["mediterraner Gin", "Tonic Water"], veg: true, alc: true },
  { id: 196, cat: "digestivo", name: "Gin Tonic alkoholfrei", price: 12.9, d: ["alkoholfreier Gin", "Tonic Water"], veg: true }
];

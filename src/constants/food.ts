export const FOOD_MENU = {
  greek_salad: {
    name: "Greek Salad",
    types: ["lunch"],
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    cost: 12.99,
    image: require("@/assets/images/restaurant/greek_salad.jpg"),
  },
  bruschetta: {
    name: "Bruschetta",
    types: ["lunch"],
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
    cost: 7.99,
    image: require("@/assets/images/restaurant/bruschetta.jpg"),
  },
  grilled_fish: {
    name: "Grilled Fish",
    types: ["specials", "mains", "a_la_carte"],
    description: "Grilled fish served with a side of vegetables.",
    cost: 20,
    image: require("@/assets/images/restaurant/grilled_fish.jpg"),
  },
  pasta: {
    name: "Pasta",
    types: ["lunch", "mains", "a_la_carte"],
    description: "Spaghetti with marinara sauce.",
    cost: 18.99,
    image: require("@/assets/images/restaurant/pasta.jpg"),
  },
  lemon_dessert: {
    name: "Lemon Dessert",
    types: ["dessert"],
    description: "A refreshing lemon dessert.",
    cost: 6.99,
    image: require("@/assets/images/restaurant/lemon_dessert.webp"),
  },
};

export const FOOD_TYPES: Record<string, { name: string }> = {
  lunch: {
    name: "Lunch",
  },
  specials: {
    name: "Specials",
  },
  mains: {
    name: "Mains",
  },
  dessert: {
    name: "Dessert",
  },
  a_la_carte: {
    name: "A la Carte",
  },
};

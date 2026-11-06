// Structured restaurant data. The interface is generated from this graph.
const restaurantData = {
  graph: [
    {
      id: "restaurant-spice-route",
      type: "Restaurant",
      name: "Spice Route",
      location: "GEC Wayanad campus",
      cuisine: "Kerala comfort food",
      open: true,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85",
      dishes: ["dish-001", "dish-002", "dish-003", "dish-004", "dish-005", "dish-006"]
    },
    {
      id: "dish-001",
      type: "Dish",
      name: "Malabar Chicken Biryani",
      category: "Main course",
      description: "Fragrant jeerakasala rice, tender chicken and roasted spices.",
      price: 160,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=85",
      vegetarian: false,
      popular: true
    },
    {
      id: "dish-002",
      type: "Dish",
      name: "Paneer Pepper Fry",
      category: "Main course",
      description: "Soft paneer tossed with black pepper, curry leaves and onion.",
      price: 130,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85",
      vegetarian: true,
      popular: true
    },
    {
      id: "dish-003",
      type: "Dish",
      name: "Kerala Parotta",
      category: "Breads",
      description: "Flaky, layered bread served warm from the tawa.",
      price: 35,
      image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=900&q=85",
      vegetarian: true,
      popular: false
    },
    {
      id: "dish-004",
      type: "Dish",
      name: "Vegetable Stew",
      category: "Main course",
      description: "Seasonal vegetables simmered in gentle coconut milk.",
      price: 110,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
      vegetarian: true,
      popular: false
    },
    {
      id: "dish-005",
      type: "Dish",
      name: "Mango Lassi",
      category: "Drinks",
      description: "Chilled yoghurt blended with ripe Alphonso mango.",
      price: 70,
      image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=85",
      vegetarian: true,
      popular: false
    },
    {
      id: "dish-006",
      type: "Dish",
      name: "Payasam",
      category: "Dessert",
      description: "A creamy traditional dessert with cardamom and cashews.",
      price: 60,
      image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
      vegetarian: true,
      popular: true
    }
  ]
};

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      id: 1,
      name: "Rose",
      image: "/shoppingreact/images/rose.png",
      description: "Beautiful and fragrant flower loved worldwide.",
      cost: "$15",
      category: "Aromatic Plants",
    },
    {
      id: 2,
      name: "Sunflower",
      image: "/shoppingreact/images/sunflower.png",
      description: "Bright yellow flower symbolizing happiness.",
      cost: "$12",
      category: "Aromatic Plants",
    },
    {
      id: 3,
      name: "Tulip",
      image: "/shoppingreact/images/tulip.png",
      description: "Elegant flower available in many colors.",
      cost: "$10",
      category: "Medicinal Plants",
    },
    {
      id: 4,
      name: "Daisy",
      image: "/shoppingreact/images/daisy.png",
      description: "Simple and charming flower with white petals.",
      cost: "$8",
      category: "Medicinal Plants",
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  const isAdded = (name) =>
    addedToCart[name] || cartItems.some((item) => item.name === name);

  return (
    <div className="product-container">
      <h2 className="section-title">Aromatic Plants</h2>
      <div className="product-grid">
        {plantsArray
          .filter((plant) => plant.category === "Aromatic Plants")
          .map((plant) => (
            <div key={plant.id} className="product-card">
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>{plant.description}</p>
              <p className="cost">{plant.cost}</p>
              <button
                disabled={isAdded(plant.name)}
                className={isAdded(plant.name) ? "added-btn" : ""}
                onClick={() => handleAddToCart(plant)}
              >
                {isAdded(plant.name) ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          ))}
      </div>

      <h2 className="section-title">Medicinal Plants</h2>
      <div className="product-grid">
        {plantsArray
          .filter((plant) => plant.category === "Medicinal Plants")
          .map((plant) => (
            <div key={plant.id} className="product-card">
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>{plant.description}</p>
              <p className="cost">{plant.cost}</p>
              <button
                disabled={isAdded(plant.name)}
                className={isAdded(plant.name) ? "added-btn" : ""}
                onClick={() => handleAddToCart(plant)}
              >
                {isAdded(plant.name) ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;

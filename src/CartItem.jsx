// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import "./CartItem.css";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, amount: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, amount: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  const calculateSubtotal = (item) => {
    const cost = parseFloat(item.cost.replace("$", ""));
    return (cost * item.quantity).toFixed(2);
  };

  const calculateTotalAmount = () => {
    return cartItems
      .reduce(
        (total, item) =>
          total + parseFloat(item.cost.replace("$", "")) * item.quantity,
        0
      )
      .toFixed(2);
  };

  const handleContinueShopping = () => {
    navigate("/productlist");
  };

  const handleCheckoutShopping = () => {
    alert("Functionality to be added for future reference");
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty 🌱</h2>
        <button onClick={handleContinueShopping}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-grid">
        {cartItems.map((item) => (
          <div key={item.name} className="cart-card">
            <img src={item.image} alt={item.name} />
            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="unit-price">Unit Price: {item.cost}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
              <p className="subtotal">Subtotal: ${calculateSubtotal(item)}</p>
              <button
                className="remove-btn"
                onClick={() => handleRemove(item.name)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total Amount: ${calculateTotalAmount()}</h3>
        <div className="cart-actions">
          <button onClick={handleContinueShopping}>Continue Shopping</button>
          <button onClick={handleCheckoutShopping}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

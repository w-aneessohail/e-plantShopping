// import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-brand">
          🌿 Paradise Nursery
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/productlist" className="nav-link">
          Plants
        </Link>
        <Link to="/cart" className="nav-link cart-icon">
          🛒 Cart ({totalQuantity})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

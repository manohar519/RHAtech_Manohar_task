import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./App";

const Navbar = () => {
  const { cartItems } = useContext(useCartContext);
  const [isLog, setLog] = useState(true);
  let cart = 0;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 3,
        backgroundColor: "gray",
        color: "white",
      }}

    >
      <Link to="/">
        Shop
      </Link>
      {isLog ? (
        <button onClick={() => setLog(!isLog)}>Logout</button>
      ) : (
        <button
          onClick={() => {
            localStorage.setItem("data", JSON.stringify(cartItems));
            setLog(!isLog);
          }}
        >
          Login
        </button>
      )}

      <Link
        to="/cart"
      >
        <button>{isLog ? cartItems.length : cart}</button>
      </Link>
    </div>
  );
};

export default Navbar;

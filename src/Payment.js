import React, { useContext, useState } from "react";
import "./App.css";
import { useCartContext } from "./App";

const Payment = () => {
  const { setTotal, total } = useContext(useCartContext);
  const [coupon, setCoupon] = useState("");
  const [message, setMessage] = useState("");

  const coupons = {
    SAVE10: 10,
    SAVE20: 20,
    SAVE30: 30,
  };

  const applyCoupon = () => {
    if (coupons[coupon]) {
      setTotal(total - coupons[coupon]);
      setMessage(`Coupon applied! You saved $${coupons[coupon]}.`);
    } else {
      setMessage("Invalid coupon code.");
    }
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total Amount: ${total}</p>
      <input
        type="text"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        placeholder="Enter coupon code"
      />
      <button onClick={applyCoupon}>Apply Coupon</button>
      {message && <p style={{ color: "#0015ff" }}>{message}</p>}

      <h5>Available Coupns For You</h5>
      <ul>
        {Object.entries(coupons).map(([key, value]) => (
          <li key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}: ${value.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Payment;

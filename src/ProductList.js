import React, { useContext } from "react";
import { useCartContext } from "./App";
import { useNavigate } from "react-router-dom";
const ProductList = () => {
  const navigate = useNavigate();
  const { data,cartItems } = useContext(useCartContext);
  console.log("data", cartItems);
 
  return (
    <div
      style={{
        display: "flex",
        flexWrap:'wrap',
        gap: "20px",
      }}
    >
       
      {data?.map((item) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent:'space-around',
            border: "2px solid black",
            width: "300",
            height: "250px",
          }}
        >
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          <button
            onClick={() => {
              navigate(`/detail/${item.id}`);
            }}
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

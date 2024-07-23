import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "./App";

const ProductDetails = () => {

  const [product, setProduct] = useState();
  const parms = useParams();
  console.log(parms);
  const { cartItems, getItem, setCartItems } =
    useContext(useCartContext);

  useEffect(() => {
    const getItems = getItem(parms.id);
    console.log(getItems);
    setProduct(getItems[0]);
  }, []);

  return (
    <div >
      <div >
        <span style={{ fontWeight: 700 }}>{product?.title}</span>
        <span>₹ {product?.price}</span>
        <p>{product.description}</p>
        <p>{product.tags.join(",")}</p>
        <p>Rating : {product.rating}</p>
      </div>
      {cartItems.includes(product) ? (
        <button
          onClick={() => setCartItems(cartItems.filter((c) => c.id !== product.id))}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={() => setCartItems([...cartItems, product])}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductDetails;

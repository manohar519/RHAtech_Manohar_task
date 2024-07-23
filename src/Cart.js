import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "./App";

export const Cart = () => {
    const navigate = useNavigate()
  const { cartItems,setCartItems,setTotal} = useContext(useCartContext);
  console.log(cartItems);
  useEffect(() => {
    setTotal(cartItems.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cartItems]);
  const totalPrice = (cart) => {
    const total = cart.reduce(
      (total, product) => total + product.weight * product.price,
      0
    );
    setTotal(total)
    return total
  };
  const Increase = (id) => {
    const IndexI = cartItems.findIndex((p) => p.id === id);
    cartItems[IndexI].weight += 1;
  };
  const Decrease = (id) => {
    const IndexI = cartItems.findIndex((p) => p.id === id);
    cartItems[IndexI].weight -= 1;
  };
  const totalItem = (cart) => {
    const total =cart.reduce((sum, product) => sum + product.weight, 0);
// setTotal(total)
    return total
  };

  
  return (
    <>
      {" "}
      {cartItems.map((product, index) => (
        <div className="d-flex border mb-3">
          {/* <img src={product.thumbnail} className="w-25 h-25" alt="" /> */}
          <div style={{display:'flex',gap:20}}>
            <h4>{product.title}</h4>
            <h5>${product.price} * {product.weight} Items = {product.price*product.weight}</h5>
            <div style={{marginTop:'10px'}}>
              <button
                style={{height:'20px'}}
                onClick={() => Decrease(product.id)}
              >
                <b>-</b>
              </button>
              <button className="rounded">{product.quantity}</button>
              <button
                className="rounded-circle px-2"
                onClick={() => Increase(product.id)}
              >
                <b>+</b>
              </button>
            </div>
            <button
             style={{height:'30px'}}
             onClick={() => setCartItems(cartItems.filter((c) => c.id !== product.id))}
              // onClick={() => dispatch({ type: "Remove", id: product.id })}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="col-4 ">
        <div className="bg-secondary p-3 text-white">
          <h5>Total Items: {totalItem(cartItems)}</h5>
          <h5>Total Price: ${totalPrice(cartItems)} </h5>
          <button onClick={()=> navigate("/payment")}>Checkout</button>
        </div>
      </div>
    </>
  );
};

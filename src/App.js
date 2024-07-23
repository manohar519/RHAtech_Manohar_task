
import "./App.css";
import { useState, createContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import { Cart } from "./Cart";
import Navbar from "./Navbar";
import Payment from "./Payment";
export const useCartContext = createContext();
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const getItem = (id) => {
    const datas = data.filter((it) => it.id == id);
    console.log(datas);
    return datas;
  };
  const getData = async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const datas = await resp.json();
    console.log(datas);
    setData(datas.products);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <useCartContext.Provider
      value={{ data, cartItems,setCartItems ,getItem,setTotal,total}}
    >
    <Navbar/>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<ProductDetails />} />
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
    </useCartContext.Provider>
  );
}

export default App;

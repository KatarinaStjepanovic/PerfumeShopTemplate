import React, { useEffect, useState, useRef } from "react"
import { Route, Routes, BrowserRouter  } from "react-router-dom"
import MainPage from "./components/MainPage"
import CustomerFav from "./components/CustomerFav"
import ProductDesc from "./components/ProductDesc"
import CartList from "./components/CartList"

import "./style.css"

function App() {
  const [data, setData] = useState([]);
  const [favorite, setFav] = useState([]);
  const [added, addProd] = useState([]);
  const section = useRef(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFav(data.slice(0, 4));
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const scroll = () => {
    if( section.current){
      section.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    < BrowserRouter>
    <Routes>
      < Route path="/"  element = {
        <>
      <MainPage  scroll = {scroll}/>
      <CustomerFav ref = {section} favorite = {favorite}/>
      </>
      }>
       
    </Route>
    <Route path="/:productId" element={< ProductDesc data = {data} />} />
    < Route path="/cart" element = {< CartList added = {added} />} />
    </Routes>
   </BrowserRouter>
    
  );
}

export default App;

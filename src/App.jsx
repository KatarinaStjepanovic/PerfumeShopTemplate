import React, { useEffect, useState, useRef } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import CustomerFav from "./components/CustomerFav";
import ProductDesc from "./components/ProductDesc";
import CartList from "./components/CartList";
import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import "./style.css";

function App() {
  const [data, setData] = useState([]);
  const [favorite, setFav] = useState([]);
  const [added, setAdded] = useState([]);
  const section = useRef(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setFav(data.slice(0, 4));
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const scroll = () => {
    if (section.current) {
      section.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const addProduct = (product, num) => {
    const newObj = JSON.parse(JSON.stringify(product));
    newObj.numberOf = num;
    setAdded((prev) => {
      const newArr = [...prev];
      const index = newArr.findIndex((p) => p.name === newObj.name);
      if (index !== -1) {
        newArr[index].numberOf++;
      } else {
        newArr.push(newObj);
      }

      return newArr;
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainPage scroll={scroll} />
               <Cart />
              <CustomerFav ref={section} favorite={favorite} />
              <AllProducts data={data} />
              < Footer />
            </>
          }
        ></Route>
        <Route
          path="/:productId"
          element={<ProductDesc data={data} addProduct={addProduct} added = {added} />}
        />
        <Route path="/cart" element={<CartList added={added} setAdded = {setAdded} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

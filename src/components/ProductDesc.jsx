import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

function ProductDesc({ data }) {
  const { productId } = useParams();
  const [product, setProd] = useState({});
  const [stars, setStars] = useState([]);
  const [num, setNum] = useState(1);
  const [error, setError] = useState(false);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      if (i < data[productId - 1]?.stars) {
        setStars((prev) => {
          const newArr = [...prev];
          newArr.push(faStarSolid);
          return newArr;
        });
      } else {
        setStars((prev) => {
          const newArr = [...prev];
          newArr.push(faStarRegular);
          return newArr;
        });
      }
    }
    setProd(data[productId - 1]);
    setPrice(data[productId - 1].price);
  }, [productId]);

  const decrement = () => {
      setPrice(product.price * (num-1) )
    if (num >   1) {
      setNum((prev) => {
        return prev - 1}
      );
      
    } else {
      console.log(product.price)
      setPrice( product.price)
      setError(true);
    }
  };

  const increment = () => {
    console.log(product.price)
    setPrice(product.price * (num+1)  )
   setNum((prev) => {
        return prev + 1}
      );
    setError(false);
  };

  return (
    <>
    <div className="arrowBack">
      
    </div>
      <div className="descName">{product?.name}</div>
      <div className="descLeft">
        <div className="title">Fragrance Notes:</div>
        <div className="top">Top: {product.fragranceNotes?.top}</div>
        <div className="heart">Heart: {product.fragranceNotes?.heart}</div>
        <div className="base">Base: {product.fragranceNotes?.base}</div>
        <div></div>
        <div className="title">Style & Mood: </div>
        <div className="styleDesc">{product?.desc}</div>
        <div className="title">Occasion: </div>
        <div>{product?.occasion}</div>
        <div className="descStars">
          {stars.map((s, id) => {
            return <FontAwesomeIcon icon={s} key={id} />;
          })}
        </div>
      </div>

      <img className="descImg" src={product?.img} alt="Perfume Image" />
      <div className="descRight">
        <div className="long">Longevity: </div>
        <div className="longT">{product?.longevity}</div>
        <hr className="descHr" />
        <div className="smallDet">
          Designed for: <span style={{ color: "white" }}>{product?.for}</span>
        </div>
        <div className="smallDet">
          Size: <span style={{ color: "white" }}>{product?.size}</span>
        </div>
        <div className="buttonsDiv">
          <div
            className="error"
            style={{ visibility: error ? "visible" : "hidden" }}
          >
            cannot be null
          </div>
          <button className="btn" onClick={decrement}>
            -
          </button>
          <div className="number">{num}</div>
          <button className="btn" onClick={increment}>
            +
          </button>
        </div>
        <div className="price">
          Price: <span style={{ color: "white", marginLeft: "15px" }}>${price.toFixed(2)}</span>
        </div>
        <button className="addToCart">Own This Scent</button>
      </div>
    </>
  );
}

export default ProductDesc;

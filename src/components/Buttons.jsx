import React, { useState } from "react";

function Buttons({ num, setNum, setPrice, price, product }) {
  const [error, setError] = useState(false);
  const decrement = () => {
    setPrice(product.price * (num - 1));
    if (num > 1) {
      setNum((prev) => {
        return prev - 1;
      });
    } else {
      setPrice(product.price);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1200);
    }
  };

  const increment = () => {
    setPrice(product.price * (num + 1));
    setNum((prev) => {
      return prev + 1;
    });
    setError(false);
  };
  return (
    <>
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
    </>
  );
}

export default Buttons;

import React, { useState } from "react";

function Buttons({ num, setNum, setPrice, price, product, classN, setAdded }) {
  const [error, setError] = useState(false);

  const classes = classN ? `${classN} buttonsDiv ` : "buttonsDiv"
  const decrement = () => {
    setPrice(product.price * (num - 1));
    if (num > 1) {
      setNum((prev) => {
        return prev - 1;
      });
         setAdded && setAdded( prev => {
      const newArr = [...prev]
      const ind  = newArr.findIndex(p => p.name === product.name)
      newArr[ind].numberOf--;
      return newArr;
    }
    )
    } else {
      setPrice(product.price);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1200);
    }
  };

  const increment = () => {
       setAdded && setAdded( prev => {
    console.log(product.numberOf)
      const newArr = [...prev]
      const ind  = newArr.findIndex(p => p.name === product.name)
      newArr[ind].numberOf++;
      return newArr;
    }
    )
    setPrice(product.price * (num + 1));
    setNum((prev) => {
      return prev + 1;
    });
    setError(false);
  };
  return (
    <>
      <div className={classes}>
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

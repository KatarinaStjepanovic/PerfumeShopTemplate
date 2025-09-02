import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDesc({ data }) {
  const { productId } = useParams();
  const [product, setProd] = useState({})

  useEffect ( () => {
    setProd ( data[productId-1]);
  }, [productId])

  return (
    <>
      <div className="descName">{product.name}</div>
      <img className="descImg" src={product?.img} alt="Perfume Image" />
    </>
  );
}

export default ProductDesc;

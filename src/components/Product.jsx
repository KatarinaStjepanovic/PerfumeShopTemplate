import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Product({ product }) {
  return (
    <div className="productDiv">
      <div className="productName">{product?.name}</div>
      <img className="productImg" src={product?.img} alt="Product Image" />
      <div className="productPrice">${product?.price}</div>
      <div className="productIcon">
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <div className="scentNotes">
        Scent Notes: <br />
        <span style={{ color: "var(--main-color)" }}>
          {product?.fragranceNotes.top}
        </span>
      </div>
    </div>
  );
}

export default Product;

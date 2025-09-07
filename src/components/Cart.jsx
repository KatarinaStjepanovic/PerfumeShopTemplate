import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="fixedCart">
      <Link to="/cart" style={{ color: "var(--main-color)" }}>
        <FontAwesomeIcon icon={faShoppingCart} className="cart" />
      </Link>
    </div>
  );
}

export default Cart;

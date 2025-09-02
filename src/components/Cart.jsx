import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  return (
        <div className="fixedCart">
         <FontAwesomeIcon icon={faShoppingCart} className="cart" />
      </div>
  )
}

export default Cart
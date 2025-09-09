import React from "react";
import PreviousPage from "./PreviousPage";
import CartProduct from "./CartProduct";

function CartList({added}) {
  console.log(added)
  return (
    <>
      <PreviousPage />
      < div className="cartTitle">Selected Scents</div>
      <div className="cartListProducts">
        {added.map( (p) => {
            return < CartProduct product={p} />
        })}
      </div>
    </>
  );
}

export default CartList;

import React from "react";
import PreviousPage from "./PreviousPage";
import CartProduct from "./CartProduct";

function CartList({added, setAdded}) {
  return (
    <>
      <PreviousPage />
      < div className="cartTitle">Selected Scents</div>
      <div className="cartListProducts">
        {added.map( (p, id) => {
            return < CartProduct product={p} setAdded= {setAdded} key = {id} />
        })}
      </div>
    </>
  );
}

export default CartList;

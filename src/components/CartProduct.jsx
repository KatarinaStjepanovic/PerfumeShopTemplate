import React, {useState, useEffect} from 'react'
import Buttons from './Buttons'

function CartProduct({product}) {
      const [num, setNum] = useState(1);
      const [price, setPrice] = useState(0);


      useEffect( () => {
            setPrice( product.price)
            setNum(product.numberOf)
      }, [product])

  return (
    <div className='cartProdDiv'>
        <img src={product.img} alt='Product image' className='cartImg'/>
        <div className='cartName'> {product.name}</div>
        <div className='cartPrice'>$ {price.toFixed(2)}</div>
        < Buttons  setNum={setNum} num={num} setPrice={setPrice} price = {price} product = {product} />
    </div>
  )
}

export default CartProduct
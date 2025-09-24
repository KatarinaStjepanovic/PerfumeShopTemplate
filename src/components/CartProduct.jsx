import React, {useState, useEffect} from 'react'
import Buttons from './Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function CartProduct({product, setAdded}) {
      const [num, setNum] = useState(1);
      const [price, setPrice] = useState(0);

      useEffect( () => {
        setPrice ( product.price * num )
      }, [price])


      useEffect( () => {
            setPrice( product.price)
            setNum(product.numberOf)
      }, [product])

      const handleClick = () => {
         setAdded( prev => {
             const newArr = [...prev];
             const ind = newArr.findIndex( p  => p.name === product.name);
                newArr.splice(ind, 1);
                return newArr;
         })  
      }

  return (
    <div className='cartProdDiv'>
      <div className='deleteProd' onClick={handleClick}><FontAwesomeIcon icon={faX}/></div>
        <img src={product.img} alt='Product image' className='cartImg'/>
        <div className='cartName'> {product.name}</div>
        <div className='cartPrice'>$ {price.toFixed(2)}</div>
        < Buttons  setNum={setNum} num={num} setPrice={setPrice} price = {price} product = {product} setAdded = {setAdded} classN = "small" />
    </div>
  )
}

export default CartProduct
import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDesc(props) {
    const {productId} = useParams()
  return (
    <div>{productId}</div>
  )
}

export default ProductDesc
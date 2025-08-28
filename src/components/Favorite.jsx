import React from 'react'

function Favorite(props) {
  return (
   <div className='favBorder'>
    <div className='favName'>{props.fav?.name}</div>
    <div className='favDesc'>{props.fav?.desc}</div>
    <img src={props.fav?.img} alt='favImg' className='favImg'/>
   </div>
  )
}

export default Favorite
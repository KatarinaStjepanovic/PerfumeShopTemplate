import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons"
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons"
import { faAngleRight} from "@fortawesome/free-solid-svg-icons"

 

function Favorite(props) {
  const [stars, setStars] = useState([])
  useEffect(() => {
  
    for (let i = 0; i < 5; i++) {
      if (i < props.fav?.stars) {
        setStars( prev => {
            const newArr = [...prev]
             newArr.push(faStarSolid)
             return newArr
        }
        )
      } else {
           setStars( prev => {
            const newArr = [...prev]
             newArr.push(faStarRegular)
             return newArr
        })
      }
    }
  }, [props.stars]);

  return (
    <div className="favBorder">
      <div className="favName">{props.fav?.name}</div>
      <div className="favDesc">{props.fav?.desc}</div>
      <img src={props.fav?.img} alt="favImg" className="favImg" />
      <div className="stars">
        {stars.map((star, id) => {
          return <FontAwesomeIcon icon={star} key = {id} className="star" />
        })}
      </div>
      <FontAwesomeIcon icon={faAngleRight} className="ar" />
    </div>
  );
}

export default Favorite;

import React from "react"
import { Link } from "react-router-dom"

import Favorite from "./Favorite";

function CustomerFav(props, ref) {
  const linkStyle = {
    textDecoration: "none",
    color: "white"
  }
  return (
    <div className="customerFav" ref={ref}>
      <div className="favTitle">Customer Favorites</div>
      <div className="favText">Top picks our customers <br/> can’t get enough of</div>
      <div className="favDiv">
        {props.favorite.map( (fav, id) => {
        return <Link to={`/${fav.id}`} key={id} style={linkStyle}>
            < Favorite fav={fav}/>
        </Link>
      })}
      </div>
      
    </div>
  );
}

export default React.forwardRef(CustomerFav);

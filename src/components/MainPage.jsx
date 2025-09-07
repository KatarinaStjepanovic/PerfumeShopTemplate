import React from "react";

import Cart from "./Cart";

function MainPage({ scroll }) {
  return (
    <div className="mainDiv">
      <div>
        <div className="mainTitle">
          Discover the fragrance <br /> that defines you
        </div>
        <div className="mainText">
          Handpicked luxury perfumes and <br /> niche scents for every occasion.
        </div>
        <button className="mainBtn" onClick={scroll}>
          Find Your Scent
        </button>
      </div>
      <img className="mainImg" alt="Main Image" src="/MainImg.jpg" />
    </div>
  );
}

export default MainPage;

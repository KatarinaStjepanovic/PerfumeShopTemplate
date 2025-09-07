import React, { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faForward, faBackward } from "@fortawesome/free-solid-svg-icons";

import Product from "./Product";
import { Link } from "react-router-dom";

function AllProducts({ data }) {
  const [showMore, setShowMore] = useState(false);
  const scrollDiv = useRef(null)


  const shMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="allProdDiv">
      <div className="allTitle">
        Uncover the Full Fragrance <br /> Experience
      </div>
      <hr className="allHr" />
      <div className="filter">
        <FontAwesomeIcon
          icon={faCaretDown}
          style={{ color: "var(--main-color)" }}
        />
        Filter: none
      </div>
      <div ref={scrollDiv} className="allProdShow" style={{overflowY: showMore ? "scroll" : "hidden"}}>
      {data.map((p, id) => {
          return (
            <Link to={`/${p.id}`} key={id}>
              <Product product={p} key={id}  />
            </Link>
          );
        })}
      </div>
      <div className="explore" onClick={shMore}>
        {showMore ? "Show Less" : "Explore the Rest"}{" "}
        <FontAwesomeIcon
          icon={showMore ? faBackward : faForward}
          className="more"
        />
      </div>
    </div>
  );
}

export default AllProducts;

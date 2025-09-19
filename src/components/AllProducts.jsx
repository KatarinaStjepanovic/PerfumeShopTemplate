import React, { useState, useRef, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faForward, faBackward, faX } from "@fortawesome/free-solid-svg-icons";

import Product from "./Product";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function AllProducts({ data }) {
  const [showMore, setShowMore] = useState(false);
  const scrollDiv = useRef(null);
  const [clicked, setClicked] = useState("none");
  const [showed, setShowed] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setShowed(() => {
      const newArr = [...data];
      return newArr;
    });
  }, [data]);

  const shMore = () => {
    scrollDiv.current.scroll({
      top: 0,
      behavior: "smooth",
    });
    setShowMore((prev) => !prev);
  };

  const handleClick = (value) => {
    if (value === clicked) return;
    setClicked(value);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowed(() => {
        return value === "none"
          ? [...data]
          : data.filter((d) => {
              return d.for === value;
            });
      });
    }, 1500);
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
        Filter: {clicked}
        <div className="filterOptions">
          <FontAwesomeIcon
            icon={faX}
            className="x"
            onClick={() => handleClick("none")}
          />
          <div
            className="filterOpt"
            onClick={() => handleClick("Men")}
            style={{
              backgroundColor: clicked === "Men" ? "#514847" : "#020304",
              marginTop: "20px",
            }}
          >
            Men
          </div>
          <div
            className="filterOpt"
            onClick={() => handleClick("Women")}
            style={{
              backgroundColor: clicked === "Women" ? "#514847" : "#020304",
            }}
          >
            Women
          </div>
        </div>
      </div>
      <div
        ref={scrollDiv}
        className="allProdShow"
        style={{ overflowY: showMore ? "scroll" : "hidden" }}
      >
        {loading ? (
          <Loader />
        ) : (
          showed.map((p, id) => {
            return (
              <Link to={`/${p.id}`} key={id}>
                <Product product={p} key={id} />
              </Link>
            );
          })
        )}
      </div>
      <div className="explore" onClick={shMore}>
        {showed.length > 10
          ? showMore
            ? "Show Less"
            : "Explore the Rest"
          : ""}{" "}
        <FontAwesomeIcon
          icon={showMore ? faBackward : faForward}
          className="more"
        />
      </div>
    </div>
  );
}

export default AllProducts;

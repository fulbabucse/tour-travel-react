import React, { useState } from "react";
import "./Tour.css";

const Tour = ({ id, name, info, img, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="fourImages" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="tour-title">
            <h2 className="text-xl font-bold">{name}</h2>
            <span className="price">Price: ${price}</span>
          </div>
          <p className="info">
            {readMore ? info : `${info.slice(0, 200)}... `}
            <button
              className="showHide-btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? " Show less" : " Read more"}
            </button>
          </p>
          <div>
            <button className="delete-btn" onClick={() => removeTour(id)}>
              No Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;

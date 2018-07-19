import React from "react";
import { Link } from "react-router-dom";

const AdSummary = props => {
  let { _id, title, price } = props.ad;

  return (
    <li className="ad">
      <img src="" alt="" />
      <div className="ad_info">
        {/* <h5>{title}</h5> */}
        <Link to={`/offer/${_id}`}>{title}</Link>
        <h5 className="price">{price} €</h5>
      </div>
    </li>
  );
};

export default AdSummary;

import "./Card.scss";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">Card</div>
    </Link>
  );
};

export default Card;

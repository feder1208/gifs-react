import React from "react";
import { Link } from "wouter";
import "./Gif.css";

const Gif = ({ title, id, url }) => {
  return (
    <Link to={`/gif/${id}`} className="Gif-link">
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </Link>
  );
};

export default Gif;

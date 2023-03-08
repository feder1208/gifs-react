import React from "react";
import "./styles.css";
import Gif from "../Gif/Gif";

const ListOfGifs = ({ gifs } = {}) => {
  return (
    <div>
      {gifs.map(({ title, id, url }) => (
        <Gif title={title} url={url} key={id} id={id} />
      ))}
    </div>
  );
};

export default ListOfGifs;

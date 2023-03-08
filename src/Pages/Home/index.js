import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";

const POPULAR_GIFS = ["Piano", "Messi", "Mordor", "Argentina"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const { loading, gifs } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // navegar a otra ruta
    pushLocation(`/search/${keyword}`);
    console.log(keyword);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <h3 className="App-title">Los gifs más populares</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={keyword}
          placeholder="Search a gif here..."
        />
        <button>Buscar</button>
      </form>
      <h3>Última búsqueda</h3>
      <ListOfGifs gifs={gifs} />
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

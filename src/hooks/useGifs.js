import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    // recuperamos la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem("lastKeyword");

    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      // guardamos la keyword en el localStorage
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword]);

  return { loading, gifs };
}

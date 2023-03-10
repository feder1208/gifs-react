import React from "react";
import Spinner from "../../components/Spinner";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";

const SearchResults = ({ params }) => {
  const { keyword = {} } = params;
  const { loading, gifs } = useGifs({ keyword });
  console.log({ loading, gifs });

  return <>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>;
};

export default SearchResults;

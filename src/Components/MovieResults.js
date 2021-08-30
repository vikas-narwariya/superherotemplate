import React from "react";
import MovieResultItem from "./MovieResultItem";

function MovieResults(props) {
  const { herodata = [] } = props;

  console.log("herodata", herodata);
  return (
    <div>
      {herodata.map((hero) => (
        <MovieResultItem data={hero} />
      ))}
    </div>
  );
}

export default MovieResults;

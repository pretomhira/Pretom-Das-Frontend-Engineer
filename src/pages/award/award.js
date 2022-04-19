import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import MovieList from "../../components/indivitualsComponent/movieList";

function Award() {
  const [category1, setCategory1] = useState([]);
  const [category2, setCategory2] = useState([]);

  const getResponse = async () => {
    try {
      const response = await axios.get(
        "https://www.omdbapi.com/?apikey=888cd91f&s=batman&y=2020&type=movie"
      );

      setCategory1(response.data.Search);
    } catch (err) {
      console.log("err");
    }
    try {
      const response = await axios.get(
        "https://www.omdbapi.com/?apikey=888cd91f&s=superman&y=2020&type=movie"
      );

      setCategory2(response.data.Search);
    } catch (err) {
      console.log("err");
    }
  };
  useEffect(() => {
    getResponse();
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-32">
      <div>
        <div className="text-2xl text-center p-8 my-2 bg-black/10">DC</div>
        <MovieList list={category1} />
      </div>
      <div>
        <div className="text-2xl text-center p-8 my-2 bg-black/10">Marvel</div>
        <MovieList list={category2} />
      </div>
    </div>
  );
}
export default Award;

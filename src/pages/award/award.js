import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useModal } from "react-hooks-use-modal";
import MovieList from "../../components/indivitualsComponent/movieList";

function Award() {
  const [category1, setCategory1] = useState([]);
  const [category2, setCategory2] = useState([]);
  const [Modal, open, close, isOpen] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false,
  });
  const selectedMovie = useSelector((state) => state.movies);
  const refresh = useSelector((state) => state.movies.refresh);

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
        "https://www.omdbapi.com/?apikey=888cd91f&s=spider-man&y=2020&type=movie"
      );

      setCategory2(response.data.Search);
    } catch (err) {
      console.log("err");
    }
  };
  useEffect(() => {
    getResponse();
  }, [refresh]);

  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div>
        <div className="text-2xl text-center p-4 my-8 bg-black/10">DC</div>
        <MovieList list={[category1, "one"]} />
      </div>
      <div>
        <div className="text-2xl text-center p-4 my-8 bg-black/10">Marvel</div>
        <MovieList list={[category2, "two"]} />
      </div>
      <div className=" relative w-full h-20 bg-none sm:bg-black/10 my-10">
        <div className="absolute w-full h-full text-center text-2xl z-20 flex flex-row justify-center mb-10 ">
          <div className="flex flex-col justify-center h-full text-center ">
            <button
              className=" w-72 bg-yellow-500 py-2 rounded-md text-white uppercase hover:bg-yellow-600 transition duration-700"
              onClick={open}
            >
              Submit Ballot
            </button>
          </div>
        </div>
      </div>
      <Modal>
        <div className="bg-white max-w-lg w-auto md:w-[50rem] h-[20rem]  rounded-lg shadow-lg overflow-hidden">
          <div className="bg-white text-4xl font-bold text-gray-900 p-4 drop-shadow-lg text-center">
            Nominated Movies
          </div>
          <div className="p-4 flex flex-col gap-y-2">
            <div className=" bg-green-500/25 p-2 rounded-sm">
              {selectedMovie.value1 === "" ? (
                <span className="text-red-500">Movie not selected from DC</span>
              ) : (
                selectedMovie.value1
              )}
            </div>
            <div className=" bg-green-500/25 p-2 rounded-sm">
              {selectedMovie.value2 === "" ? (
                <span className="text-red-500">
                  {" "}
                  Movie not selected from Marvel
                </span>
              ) : (
                selectedMovie.value2
              )}
            </div>
          </div>
          <div className="text-center">
            <button
              className="bg-red-500 text-white p-2 rounded-sm"
              onClick={close}
            >
              CLOSE
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default Award;

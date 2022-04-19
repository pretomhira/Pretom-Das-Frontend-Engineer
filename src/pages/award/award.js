import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useModal } from "react-hooks-use-modal";
import MovieList from "../../components/indivitualsComponent/movieList";

function Award() {
  const [category1, setCategory1] = useState([]);
  const [category2, setCategory2] = useState([]);
  const [Modal, open, close, isOpen] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false,
  });

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
      <div className=" relative w-full h-20 bg-black/10 my-10">
        <div className="absolute w-full h-full text-center text-2xl z-20 flex flex-row justify-center ">
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
        <div className="bg-white/70">
          <h1>Title</h1>
          <p>This is a customizable modal.</p>
          <button onClick={close}>CLOSE</button>
        </div>
      </Modal>
    </div>
  );
}
export default Award;

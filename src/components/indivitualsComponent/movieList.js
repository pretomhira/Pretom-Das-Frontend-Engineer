import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deselectCategory1,
  deselectCategory2,
  updateCategory1,
  updateCategory2,
} from "../../redux/tools/movieSlice";

const MovieList = (props) => {
  const checkName = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  console.log(props);
  return (
    <>
      <div className="flex flex-wrap gap-8 justify-center">
        {props.list[0].map((element) => {
          return (
            <div key={element.imdbID} className="relative group">
              <div className="absolute bottom-0 w-full h-auto min-h-[5rem] bg-black/70 text-white text-center text-lg group-hover:bg-white/70 group-hover:text-black transition duration-700 flex flex-col justify-center">
                <div className=""> {element.Title}</div>
              </div>
              <div className="absolute w-full h-full z-10">
                <div className="flex flex-row justify-center h-full">
                  <div className="flex flex-col justify-center">
                    <button
                      onClick={() =>
                        props.list[1] === "two"
                          ? dispatch(updateCategory2(element.Title))
                          : dispatch(updateCategory1(element.Title))
                      }
                    >
                      {element.Title === checkName.value1 ||
                      element.Title === checkName.value2 ? (
                        <div className="bg-green-500 text-white cursor-pointer uppercase  font-bold text-4xl transition-all duration-700 p-4 rounded-lg">
                          selected
                        </div>
                      ) : (
                        <div className="group-hover:bg-yellow-500 group-hover:text-white cursor-pointer uppercase  text-white/0   font-bold text-4xl transition-all duration-700 p-4 rounded-lg">
                          select
                        </div>
                      )}
                    </button>
                    <div
                      className={`${
                        element.Title === checkName.value1 ||
                        element.Title === checkName.value2
                          ? "block"
                          : "hidden"
                      } text-white bg-black/40 rounded-lg my-2`}
                    >
                      Click here to{" "}
                      <button
                        onClick={() =>
                          props.list[1] === "two"
                            ? dispatch(deselectCategory2(""))
                            : dispatch(deselectCategory1(""))
                        }
                        className=" float-right uppercase bg-red-500 text-white cursor-pointer   font-bold text-sm transition-all duration-700 p-1 rounded-lg"
                      >
                        deselect
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className=" w-60 h-96 object-cover"
                src={element.Poster}
                alt="movie"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieList;

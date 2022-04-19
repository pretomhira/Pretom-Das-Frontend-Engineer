import React from "react";

const MovieList = (props) => {
  console.log(props);
  return (
    <>
      <div className="flex flex-wrap gap-8 justify-center">
        {props.list.map((element) => {
          return (
            <div key={element.imdbID} className="relative">
              <div className="absolute bottom-0 w-full h-auto min-h-[5rem] bg-black/70 text-white text-center text-lg hover:bg-white/70 hover:text-black transition duration-700 flex flex-col justify-center">
                <div className=""> {element.Title}</div>
              </div>
              <img className=" w-60 h-96 object-cover" src={element.Poster} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieList;

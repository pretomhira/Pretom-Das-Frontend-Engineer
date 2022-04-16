import React from "react";

export default function FloatPannel({ fact }) {
  return (
    <div className=" w-full h-full shadow-xl bg-white flex flex-col rounded-md">
      <h1 className=" text-base font-semibold ml-4 mt-2 pb-1 ">Facts:</h1>
      <p className=" text-center text-xs font-mono overflow-hidden">{fact}</p>
    </div>
  );
}

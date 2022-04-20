import React from "react";

export default function FloatPannel({ fact }) {
  return (
    <div className="max-w-sm w-screen md:w-auto h-full shadow-xl bg-white flex flex-col rounded-md float-right p-4">
      <h1 className="text-lg font-bold">Facts:</h1>
      <p className="text-base">{fact}</p>
    </div>
  );
}

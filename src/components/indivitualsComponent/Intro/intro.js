import React from "react";
import { useState, useEffect } from "react";

export default function Intro() {
  const [flag, setFlag] = useState(true);

  useEffect(() => {}, [flag]);

  return flag ? (
    <div>
      <h1>I think This Folder Pattern Will be good what You see</h1>
      <button
        onClick={() => {
          setFlag(false);
        }}
      >
        Yes
      </button>
      <button
        onClick={() => {
          setFlag(false);
        }}
      >
        No
      </button>
    </div>
  ) : (
    <div></div>
  );
}

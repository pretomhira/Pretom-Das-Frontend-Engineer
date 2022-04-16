import React from "react";
import { useEffect, useState } from "react";

function Home() {
  const [blogType, setBlogType] = useState("blogs");

  const getData = async () => {
    try {
      const res = await fetch(
        `https://www.reddit.com/r/reactjs/top.json?limit=1&t=day`
      );
      const data = await res.json();

      setBlogType(data.kind);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <h1 className="max-w-7xl mx-auto text-5xl text-center mt-10 mb-2">
          Reactjs
        </h1>
      </div>
      <div>{blogType}</div>
    </div>
  );
}
export default Home;

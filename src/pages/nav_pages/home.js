import React from "react";
import { useEffect, useState } from "react";

function blogs(info) {
  return (
    <div className="max-w-7xl mx-auto text-lg py-5" key={info.data.id}>
      {info.data.title}
    </div>
  );
}

function Home() {
  const [blogType, setBlogType] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(
        `https://www.reddit.com/r/reactjs/top.json?limit=10&t=day`
      );
      const data = await res.json();

      setBlogType(data.data.children);
      console.log(data.data.children);
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
          ReactJs
        </h1>
      </div>
      {blogType.map(blogs)}
    </div>
  );
}
export default Home;

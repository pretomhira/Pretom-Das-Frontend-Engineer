import React from "react";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

function blogs(info) {
  return (
    <div className="max-w-7xl mx-auto py-5" key={info.data.id}>
      <div>{info.data.title}</div>
      <div>{info.data.description}</div>
    </div>
  );
}

function Blog() {
  const [blogType, setBlogType] = useState([]);
  const { type } = useParams();

  const getData = async () => {
    try {
      const res = await fetch(
        `https://www.reddit.com/r/${type}/top.json?limit=10&t=day`
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
  }, [type]);

  return (
    <div>
      <div>
        <h1 className="max-w-7xl mx-auto text-5xl text-center mt-10 mb-2">
          {type}
        </h1>
      </div>
      {blogType.map(blogs)}
    </div>
  );
}
export default Blog;

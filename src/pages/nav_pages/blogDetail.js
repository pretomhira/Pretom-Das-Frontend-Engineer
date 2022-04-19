import React from "react";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Blog() {
  const { type, id } = useParams();
  const [children, setChildren] = useState([]);
  const refresh = useSelector((state) => state.movies.refresh);

  const getData = async () => {
    try {
      const res = await fetch(
        `https://www.reddit.com/r/${type}/top.json?limit=10&t=day`
      );
      const data = await res.json();
      setChildren(data.data.children);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, [id, refresh]);

  return (
    <div className="max-w-7xl mx-auto mt-28 mb-2">
      {children.map((element) => {
        {
          if (element?.data.id == id) {
            return (
              <div
                key={element?.data.id}
                className="max-w-7xl mx-auto  text-center  flex flex-col gap-y-4"
              >
                <h1 className="max-w-5xl mx-auto text-5xl">
                  {element?.data.title}
                </h1>
                <div>
                  <h1 className=" text-sm text-gray-500">
                    Written by{" "}
                    <span className="text-gray-600 font-bold">
                      {element?.data.author}
                    </span>
                  </h1>
                </div>
                <div className="max-w-4xl mx-auto">
                  <p className=" text-base text-left">
                    {element?.data.selftext}
                  </p>
                </div>
              </div>
            );
          }
        }
      })}
    </div>
  );
}
export default Blog;

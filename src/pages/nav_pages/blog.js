import React from "react";
import { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";

function Blog() {
  const { type } = useParams();
  const [children, setChildren] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(
        `https://www.reddit.com/r/${type}/top.json?limit=10&t=day`
      );
      const data = await res.json();
      setChildren(data.data.children);
      console.log(data.data.children);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, [type]);

  return (
    <>
      <div className=" bg-white flex flex-col gap-y-4 max-w-7xl mx-auto mt-32">
        {children.map((element) => {
          return (
            <div key={element?.data.id}>
              <Link to={`/${type}/${element?.data.id}`}>
                <div className="flex flex-row gap-x-4 p-4 drop-shadow-md shadow-sm hover:shadow-xl bg-white">
                  <div
                    className={` ${
                      element.data.thumbnail == ("self" || "")
                        ? "hidden"
                        : "block"
                    }`}
                  >
                    <img className="w-32 h-20" src={element?.data.thumbnail} />
                  </div>
                  <div className="flex flex-col w-full gap-y-2">
                    <div>
                      <h1 className="text-2xl font-bold capitalize">
                        {element?.data.title.substring(0, 50)}...
                      </h1>
                    </div>

                    <div>
                      <h1 className=" text-sm text-gray-500">
                        Written by{" "}
                        <span className="text-gray-600 font-bold">
                          {element?.data.author}
                        </span>
                      </h1>
                    </div>
                    <div>
                      <p className=" text-base">
                        {element?.data.selftext.substring(0, 250)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Blog;

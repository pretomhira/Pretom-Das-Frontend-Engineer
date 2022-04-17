import React from "react";
import { useEffect, useState } from "react";

function Home() {
  const [children, setChildren] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(
        `https://www.reddit.com/r/reactjs/top.json?limit=10&t=day`
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
  }, []);

  return (
    <>
      <div>
        <h1 className="max-w-7xl mx-auto text-5xl text-center mt-10 mb-2">
          reactjs
        </h1>
      </div>
      <div className=" w-full h-auto ml-4 bg-white shadow-lg">
        {children.map((element) => {
          return (
            <div
              key={element?.data.id}
              className=" w-full h-auto shadow-sm flex flex-col pb-4 ml-6"
            >
              <div className=" w-11/12 h-auto flex flex-row ">
                <h1 className=" text-lg text-green-600"> Title : </h1>
                <h1 className=" ml-2 mt-1">{element?.data.title}</h1>
              </div>
              <div className=" w-11/12 h-auto flex flex-row">
                <h1 className="text-lg text-green-600 ">author: </h1>
                <h1 className=" ml-2 mt-1">{element?.data.author}</h1>
              </div>
              <div className=" w-11/12 h-auto flex flex-row">
                <h1 className="text-lg text-green-600">Text: </h1>
                <p className=" ml-2 mt-3">{element?.data.selftext}</p>
              </div>
              <br />
              <br />
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Home;

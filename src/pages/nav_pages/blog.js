import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

function Blog() {
  const blog_reddit_type = useSelector((state) => state.subreddit);
  console.log(blog_reddit_type);
  const [blogType, setBlogType] = useState("blogs");
  const { type } = useParams();
  const getData = async () => {
    try {
      const res = await fetch(
        `https://www.reddit.com/r/${blog_reddit_type}/top.json?limit=1&t=day`
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
  }, [blog_reddit_type]);

  return (
    <div>
      <div>
        <h1 className="max-w-7xl mx-auto text-5xl text-center mt-10">{type}</h1>
      </div>
      <div>{blogType}</div>
    </div>
  );
}
export default Blog;

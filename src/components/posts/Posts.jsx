import Post from "../post/Post";
import React from "react";

const Posts = ({ posts }) => {
  console.log("component posts", posts);

  return (
    <div className="max-w-7xl mx-auto posts flex md:flex-row flex-wrap m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
};

export default Posts;

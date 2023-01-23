import Post from "../post/Post";
import React from "react";

const Posts = ({ posts }) => {
  console.log("component posts", posts);

  return (
    <div className="posts basis-3/4 flex flex-wrap m-5 ">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
};

export default Posts;

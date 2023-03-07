import React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
// import Post from "../../components/post/Post";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  const fetchApi = async () => {
    const response = await axios.get(
      "https://mitm-blogs.cyclic.app/api/posts" + search
    );
    console.log(response);

    setPosts(response.data);
  };

  // console.log("use component", Use);

  useEffect(() => {
    console.log("hi from useeffect");
    fetchApi();
  }, [search]);

  return (
    <>
      <Header />
      <div className="flex">
        <Posts posts={posts} />
        {/* <SideBar /> */}
      </div>
    </>
  );
};

export default Home;

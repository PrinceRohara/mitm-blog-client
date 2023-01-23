import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:8000/api/posts/" + path);
      console.log(res);
      setPost(res.data);
    };

    getPost();
  }, [path]);

  return (
    <div className="flex-1">
      <div className="singlePostWrapper p-5 pr-0 object-cover">
        {post.photo && (
          <img className="w-full h-96 rounded-md " src={post.photo} alt="" />
        )}

        <h1 className="text-4xl font-lora text-center mt-3 ">
          {post.title}
          <div className="singlepost float-right cursor-pointer ">
            <i className="mr-2 text-lg fa-regular fa-pen-to-square text-teal-800 "></i>
            <i className="mr-1 text-lg fa-sharp fa-solid fa-trash text-red-500"></i>
          </div>
        </h1>
        <div className="singlepostinfo  mb-5 flex justify-between font-varelaround">
          <span>
            Author:{" "}
            <Link to={`/?user=${post.username}`}>
              {" "}
              <b>{post.username}</b>
            </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className=" tracking-wide text-xl first-letter:ml-5 first-letter:text-6xl ">
          {post.description}
        </p>
      </div>
    </div>
  );
};

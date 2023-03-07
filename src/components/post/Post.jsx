import "./post.css";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  const PF = "https://mitm-blogs.cyclic.app/images/";

  return (
    <div className="post w-96 mx-6 mb-10">
      {post.photo && (
        <Link to={`/post/${post._id}`}>
          <img
            className="w-full h-72 object-cover rounded-md"
            src={PF + post.photo}
            alt=""
          />
        </Link>
      )}

      <div className="postInfo flex flex-col items-center ">
        <div className="postCats flex gap-1 mr-4 ml-4 text-xs  mt-4 leading-5 cursor-pointer text-gray-700">
          {post.categories.map((c) => (
            <span>{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`}>
          <span className="text-xl font-josefin font-bold mt-3 cursor-pointer">
            {post.title}
          </span>
        </Link>
        <hr />
        <span className="postDate font-lora italic text-gray-700 mt-2 mb-2">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc font-varelaround text-xm text-gray-600 leading-6 mt-2 font-medium">
        {post.description}
      </p>
    </div>
  );
};

export default Post;

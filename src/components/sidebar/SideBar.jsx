import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const SideBar = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:8000/api/posts/categories");
      setCats(res.data);
    };

    getCats();
  }, []);
  return (
    <div className="basis-1/4 m-5 pb-7 rounded-md flex flex-col items-center">
      <div className="">
        <span className="m-5 x`p-1 text-xl text-center border-y-2 border-sky-500 font-Varela-Round">
          About Me
        </span>
        <img
          className="mt-3 rounded-sm"
          src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p className="p-2 text-center font-">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          omnis. Impedit nesciunt fugit amet enim reiciendis sint sunt ad
          deserunt
        </p>
      </div>
      <div className="flex flex-col items-center">
        <span className="m-1 p-1 text-xl text-center border-y-2 border-sky-500 font-Varela-Round leading-4">
          CATEGORIES
        </span>
        <ul className=" ">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`}>
              <li>{c.name}</li>
            </Link>
          ))}

          <li>Programming</li>
          <li>DSA</li>
          <li>Interview</li>
          <li>Interview</li>
          <li>Interview</li>
        </ul>
      </div>
      <div>
        <span></span>
        <div>
          <li>facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

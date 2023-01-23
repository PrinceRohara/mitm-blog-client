import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header  ">
      {/* <div className=" headerTitles flex flex-col align-center font-Lora absoulte">
        <span>React </span>
        <span>React </span>
        <span>React </span>
      </div> */}
      {/* <img
        className="w-full h-102 bg-cover"
        src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      /> */}
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center bg-yellow-500 border-y border-black py-10 lg:py-0">
          <div className="px-10 space-y-5">
            <h1 className="text-6xl max-w-xl font-serif">
              <span className="underline decoration-black decoration-4">
                MITM
              </span>{" "}
              Blogs is a place to write, read, and connect
            </h1>
            <h2 className="text-xl">
              It's easy and free to post your thinking on any topic and connect
              with students
            </h2>
          </div>

          <img
            className="hidden md:inline-flex h-32 lg:h-full"
            src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

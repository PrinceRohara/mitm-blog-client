import SideBar from "../sidebar/SideBar";
import { SinglePost } from "../singlePost/SinglePost";

const Single = () => {
  return (
    <div className="single  md:flex">
      {/* post */}
      <SinglePost />
      <SideBar />
    </div>
  );
};

export default Single;

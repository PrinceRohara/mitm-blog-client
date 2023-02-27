import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
const TobBar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  console.log(user, "user");
  return (
    <div className="top">
      <div className="topLeft text-2xl text-bold">MITM Blogs</div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" exact>
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" exact>
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write">Write</Link>
          </li>
          <li className="topListItem">
            <Link to="/login" exact>
              Contact
            </Link>
          </li>
          <li onClick={handleLogout} className="cursor-pointer">
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src={user.profilePic} alt="user" />
        ) : (
          <ul className="topList">
            <li className="topListItem bg-blue-400  rounded">
              <Link className="p-2 " to="login">
                LogIn
              </Link>
            </li>
            <li className="topListItem bg-yellow-400  rounded">
              <Link className="p-2" to="register">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        {/* <button onClick={handleLogout} className="bg-blue-500 p-2 rounded-md hover:bg-blue-800 text-white">
          LogOut
        </button> */}
      </div>
    </div>
  );
};

export default TobBar;

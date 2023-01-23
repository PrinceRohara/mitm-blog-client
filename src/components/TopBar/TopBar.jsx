import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
const TobBar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

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
          <img
            className="topImg"
            src="data:image/jpeg;base64,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"
            alt="user"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem bg-blue-400  rounded">
              <Link className="p-2 " to="login">
                LogIn
              </Link>
            </li>
            <li className="topListItem bg-yellow-400  rounded">
              <Link className="p-2" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        {/* <button className="bg-blue-500 p-2 rounded-md hover:bg-blue-800 text-white">
          LogOut
        </button> */}
      </div>
    </div>
  );
};

export default TobBar;

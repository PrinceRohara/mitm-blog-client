import React, { useRef } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  // console.log("login page hahh");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://mitm-blogs.cyclic.app/api/auth/login",
        {
          username: userRef.current.value,
          password: passwordRef.current.value,
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      window.location.replace("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      if (error.response.data === "wrong Credentials") {
        alert("Username or Password is wrong");
      }
      // console.log(error.response.data);
      // console.log(error.message, "err :message");
    }
  };
  // console.log(user);

  return (
    <div className="login items-center justify-center bg-yellow-500  bg-opacity-25">
      <span className="text-6xl text-blue -600">Login</span>
      <form
        className="flex flex-col mt-2 w-96 mb-2"
        action=""
        onSubmit={handleSubmit}
      >
        <label htmlFor="" className="text-xl">
          username
        </label>
        <input
          className="p-2 rounded-md"
          type="text"
          placeholder="Enter your username"
          ref={userRef}
        />
        <label htmlFor="" className="text-xl ">
          Password
        </label>
        <input
          className="p-2 rounded-md"
          type="password"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        <button
          type="submit"
          className="p-2 mt-4  rounded-md cursor-pointer border-none  bg-yellow-500 hover:bg-yelllow-600"
          disabled={isFetching}
        >
          Login
        </button>
      </form>
      <div className="flex items-center justify-right m-3">
        <p className="text-md">Don't have an account </p>
        <button className="cursor-pointer underline text-blue-500 ml-1 ">
          <Link to="/register">Register</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;

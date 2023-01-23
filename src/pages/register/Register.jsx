import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <div className="register items-center justify-center  bg-opacity-25">
      <span className="text-6xl text-yellow-600">Register</span>
      {error && (
        <h3 className="mt-2 mb-2 text-bold text-xl text-red-600">
          username is already in use
        </h3>
      )}

      <form
        className="flex flex-col mt-2 w-96 mb-2"
        action=""
        onSubmit={handleSubmit}
      >
        <label htmlFor="" className="text-xl">
          Username
        </label>
        <input
          required
          className="p-2 rounded-md"
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="" className="text-xl">
          Email
        </label>
        <input
          required
          className="p-2 rounded-md"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="" className="text-xl ">
          Password
        </label>
        <input
          required
          className="p-2 rounded-md"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="p-2 mt-4  rounded-md cursor-pointer border-none  bg-yellow-500 hover:bg-yelllow-600"
        >
          Register
        </button>
      </form>
      <div className="flex items-center justify-right m-3">
        <p className="text-md">Areday have an account </p>
        <button className="cursor-pointer text-blue-500 underline  ml-1 ">
          <Link to="/login">login</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Register;

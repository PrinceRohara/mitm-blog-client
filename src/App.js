import { Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import Posts from "./components/posts/Posts";
import SideBar from "./components/sidebar/SideBar";
import Single from "./components/single/Single";
import TopBar from "./components/TopBar/TopBar";
import Write from "./components/write/Write";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import { Context } from "./context/Context";

function App() {
  const user = useContext(Context);
  return (
    <>
      <TopBar />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="register" element={user ? <Home /> : <Register />} />
        <Route path="login" element={user ? <Home /> : <Login />} />

        <Route path="write" element={user ? <Write /> : <Register />} />
        <Route path="settings" element={user ? <Settings /> : <Home />} />
        <Route path="post/:postId" element={<Single />} />
      </Routes>

      {/* <div className="flex">
      
        <Posts />
        <SideBar />
      </div> */}
    </>
  );
}

export default App;

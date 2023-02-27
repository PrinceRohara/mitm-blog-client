import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

const Write = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:8000/api/upload", data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const res = await axios.post("http://localhost:8000/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sm:p-2 pt-12 mt-4">
      {file && (
        <img
          className="rounded-xl mb-1 mt-1 ml-[10rem] w-[70vw] h-[50vh] object-cover"
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
      {/* <img
        className="rounded-xl mb-1 mt-1 ml-[10rem] w-[70vw] h-[50vh] object-cover"
        src="https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      /> */}
      <form className=" items-center relative" onSubmit={handleSubmit}>
        <div className="ml-40 flex items-center">
          <label className="" htmlFor="fileInput">
            <i className=" items-center justify-center rounded-lg text-3xl text-gray-700 cursor-pointer fa-solid fa-image">
              +
            </i>
          </label>
          <input
            type="file"
            className="file hidden "
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="border-none  text-3xl p-4 focus:outline-none font-bold placeholder:font-normal tracking-wide w-full"
            type="text"
            placeholder="Title "
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="ml-40 justify-center p-4 m-2 mt-0 ">
          <textarea
            style={{ resize: "none", appearance: "none", overflow: "hidden" }}
            className="w-4/5 p-4 m-2 focus:outline-none placeholder:text-xl h-[100vh]"
            placeholder="Write blog ..."
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 p-2 m-1 text-white text-md absolute top-[15px] right-20"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;

import SideBar from "../../components/sidebar/SideBar";

const Settings = () => {
  return (
    <div className="flex">
      <div className="flex-1 p-5">
        <div className="flex items-center justify-between">
          <span className="text-xl text-green-500 cursor-pointer">
            Update Account
          </span>
          <span className="text-md text-red-600 cursor-pointer">
            Delete Account
          </span>
        </div>
        <form className="flex flex-col mt-4">
          <label>Profile Picture</label>

          <div className="flex m-1 items-center mt-4 mb-4">
            <img
              className="w-16 h-16 mr-2 rounded-3xl"
              src="https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <label className="p-1 cursor-pointer" htmlFor="fileInput">
              <i class="bg-pink-800 ml-4 text-xl p-1 rounded-full fa-solid fa-user"></i>
            </label>
            <input className="hidden" type="file" id="fileInput" />
          </div>
          <div className="flex flex-col p-1 mt-2 mb-2">
            <label className="mt-2" htmlFor="">
              UserName
            </label>
            <input
              className="p-1 border-gray-400 border-none border-b-1 focus:border-none "
              type="text"
              placeholder="jake"
            />
            <label htmlFor="">Email</label>
            <input
              className="p-1  border-b-1"
              type="email"
              placeholder="jake@email.com"
            />
            <label htmlFor="">Password</label>
            <input
              className="p-1 border-b-1"
              type="password"
              placeholder="*****"
            />
            <button className="p-1 bg-yellow-700 w-24 mt-2 text-gray-100">
              Update
            </button>
          </div>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;

import React from "react";

const Navbar = () => {
  return (
    <div className="flex border-b bg-[#0a0a0a] border-gray-500 shadow-blue-300 justify-between gap-20 justify- text-teal-100 font-semibold items-center h-20 z-50">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 h-10 px-10">
          <div>
            <img
              src="src\assets\logoOfYoga.jpeg"
              alt="logo"
              className="rounded-full h-10 w-10 object-fill"
            />
          </div>
          <p className="text-xl text-center text-nowrap">Yoga & Ayurveda</p>
        </div>
        
      </div>
      <div>
      <div className="text-xl flex gap-20">
          <p className="hover:text-white">About</p>
          <p className="hover:text-white">Home</p>
          <p className="hover:text-white">Contact</p>
        </div>
      </div>
      <div  className="mr-10">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span class="relative text-nowrap px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Sign up
          </span>
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;

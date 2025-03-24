import React from "react";
import Navbar from "./Navbar";

const NotFoundPage = () => {
  return (
    <div>
        <Navbar/>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-5 md:p-8">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-emerald-400 mb-4">
          Oops! Pose Not Found
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          The pose you are looking for does not exist or has been moved. Please
          check the URL or return to the homepage.
        </p>
        {/* <img
          src="/yoga-not-found.jpg"
          alt="Yoga Not Found"
          className="w-full max-w-md rounded-lg shadow-xl mb-6"
        /> */}
        <a
          href="/"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;

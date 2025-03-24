import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Navbar />
      <div>
        <section className=" bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-200">
              Who We Are
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              At the heart of innovation, we craft digital experiences that
              inspire, engage, and elevate. Our team of visionary developers,
              creative designers, and problem solvers push the boundaries of
              technology to build future-ready solutions.
            </p>
            <div className="flex justify-center mb-8">
              <img
                src="https://images.pexels.com/photos/355863/pexels-photo-355863.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-lg text-gray-400 mb-8">
              Whether it’s revolutionizing web applications or engineering
              seamless user experiences, we thrive on challenges and turn ideas
              into reality. We believe in the power of technology to create
              meaningful impact.
            </p>
            <div className="flex justify-center gap-6">
              <Link to={'/'} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-lg transition">
                Explore More
              </Link>
              <Link to={'/contact'} className="bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 px-6 rounded-lg shadow-lg transition">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

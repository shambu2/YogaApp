import React from "react";
import Navbar from "./Navbar";
import { Sparkles, ArrowRight } from "lucide-react";
const Hero = () => {
  const scrollToVH = () => {
    window.scrollTo({
      top: window.innerHeight, // 200vh (2 times the viewport height)
      behavior: "smooth",
    });
  };
  return (
    <div className="h-[100vh] bg-white ">
      <Navbar />

      {/* <div> */}
      <div className="h-screen  grid grid-cols-1 bg-slate-800 lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
        {/* Left Content */}
        <div className="space-y-8 mx-10">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full w-fit">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="text-sm text-slate-300">
              Supercharge your health
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Development tool for the modern health
          </h1>

          <p className="text-lg text-slate-300">
            Revitalize your body, harmonize your mind, and embrace wellness with
            our next-generation Yoga & Ayurveda platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors">
              <span onClick={scrollToVH}>Start here</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-4 bg-slate-800 text-slate-300 rounded-xl hover:bg-slate-700 transition-colors">
              View Docs
            </button>
          </div>

          <div className="flex items-center gap-4 pt-4">
            {/* <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-800" />
                ))}
              </div> */}

            <div className="flex -space-x-1 overflow-hidden">
              <img
                alt=""
                src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?ga=GA1.1.1804104719.1742798399&semt=ais_keywords_boost"
                className="inline-block size-6 rounded-full "
              />
              <img
                alt=""
                src="https://img.freepik.com/premium-photo/handsome-man-with-camera-around-his-neck_13339-257283.jpg?ga=GA1.1.1804104719.1742798399&semt=ais_keywords_boost"
                className="inline-block size-6 rounded-full"
              />
              <img
                alt=""
                src="https://img.freepik.com/premium-photo/girl-cap-coat-gym-shoes-white-background_1048944-26668540.jpg?ga=GA1.1.1804104719.1742798399&semt=ais_keywords_boost"
                className="inline-block size-6 rounded-full"
              />
              <img
                alt=""
                src="https://img.freepik.com/premium-photo/man-studio-smile-with-digital-camera-photography-creativity-portrait-white-background-male-person-photographer-talent-hobby-as-artist-memories-curation-profile_590464-461871.jpg?ga=GA1.1.1804104719.1742798399&semt=ais_keywords_boost"
                className="inline-block size-6 rounded-full "
              />
            </div>

            <p className="text-sm text-slate-400">
              Trusted by over{" "}
              <span className="text-white font-semibold">10,000+</span> Users
            </p>
          </div>
        </div>

        {/* Right Content - Code Preview */}
        <div className="relative">
          <div className="absolute  inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-3xl"></div>
          <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700 p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <pre className="text-sm">
              <code className="text-slate-300">
                <span className="text-indigo-400">import</span>{" "}
                <span className="text-emerald-400">{"{ Health }"}</span>{" "}
                <span className="text-indigo-400">from</span>{" "}
                <span className="text-amber-300">'@vedas/core'</span>;{"\n\n"}
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">health</span>{" "}
                <span className="text-slate-500">=</span>{" "}
                <span className="text-indigo-400">new</span>{" "}
                <span className="text-emerald-400">Life</span>
                <span className="text-slate-300">();</span>
                {"\n\n"}
                <span className="text-slate-300">app</span>
                <span className="text-slate-500">.</span>
                <span className="text-blue-400">configure</span>
                <span className="text-slate-300">{"({\n"}</span>
                <span className="text-slate-300">{"  "}plugins: [</span>
                <span className="text-amber-300">'Yoga'</span>
                <span className="text-slate-300">, </span>
                <span className="text-amber-300">'Ayurveda'</span>
                <span className="text-slate-300">],{"\n"}</span>
                <span className="text-slate-300">{"  "}mode: </span>
                <span className="text-amber-300">'Living'</span>
                {"\n"}
                <span className="text-slate-300">{"})"}</span>
                <span className="text-slate-300">;</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Hero;

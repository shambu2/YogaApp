import React, { useState } from "react";
// import { yogaPoses } from "./data/poses";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Signup from "./pages/Signup";
import PosePages from "./pages/PosePages";
import Mountain from "./components/Mountain";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  // const [selectedDosha, setSelectedDosha] = useState("");
  // const [difficulty, setDifficulty] = useState("");

  // const filteredPoses = yogaPoses.filter((pose) => {
  //   if (
  //     selectedDosha &&
  //     !pose.ayurvedaRecommendations.some((rec) =>
  //       rec.dosha.includes(selectedDosha)
  //     )
  //   ) {
  //     return false;
  //   }
  //   if (difficulty && pose.difficulty !== difficulty) {
  //     return false;
  //   }
  //   return true;
  // });

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pose/:name" element={<PosePages/>}/>
        {/* <Route path="/pose/Seated Forward Bend" element={<NotFoundPage/>}/> */}
        {/* <Route path="/pose/Standing Forward Bend" element={<NotFoundPage/>}/> */}
        {/* <Route path="/poses/Mountain" element={<Mountain/>}/> */}
      </Routes>
    </>
  );
}

export default App;

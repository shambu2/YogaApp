import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { yogaPoses } from "../data/poses";
import Navbar from "../components/Navbar";

const PosePages = () => {
  const { name } = useParams();
//   if (name === "Seated%20Forward%20Bend") {
//     return (<div>
//         not found
//     </div>)
//   }
  return (
    <div>
        <Navbar/>
      {name === "Mountain" && <div>Mountains</div>}
      {name === "Child's" && <div>childs</div>}
      {name === "Warrior" && <div>Warrior</div>}
      {name === "Corpse" && <div>corpse</div>}
      {name === "Cobra" && <div>cobra</div>}
      {name === "Triangle" && <div>triangle</div>}
      {name === "Fish" && <div>Fish</div>}
      {name === "Boat" && <div>Boat</div>}
      {name === "Lotus" && <div>Lotus</div>}
      {name === "Wind-Relieving" && <div>wind-Relieving</div>}
      {/* {name === "Seated%20Forward%20Bend" && <div>not found</div>} */}
      
    </div>
  );
};

export default PosePages;

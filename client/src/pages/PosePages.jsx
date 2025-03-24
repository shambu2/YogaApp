import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { yogaPoses } from "../data/poses";
import Navbar from "../components/Navbar";
import MountainPose from "../components/MountainPose";
import ChildsPose from "../components/ChildsPose";
import WarriorOnePose from "../components/WarriorOnePose";
import CorpsePose from "../components/CorpsePose";
import CobraPose from "../components/CobraPose";
import TrianglePose from "../components/TrianglePose";
import FishPose from "../components/FishPose";
import BoatPose from "../components/BoatPose";
import LotusPose from "../components/LotusPose";
import WindRelievingPose from "../components/WindRelievingPose";

const PosePages = () => {
  const { name } = useParams();
  //   if (name === "Seated%20Forward%20Bend") {
  //     return (<div>
  //         not found
  //     </div>)
  //   }
  return (
    <div>
      <Navbar />
      {name === "Mountain" && <div><MountainPose/></div>}
      {name === "Child's" && <div><ChildsPose/></div>}
      {name === "Warrior" && <div><WarriorOnePose/></div>}
      {name === "Corpse" && <div><CorpsePose/></div>}
      {name === "Cobra" && <div><CobraPose/></div>}
      {name === "Triangle" && <div><TrianglePose/></div>}
      {name === "Fish" && <div><FishPose/></div>}
      {name === "Boat" && <div><BoatPose/></div>}
      {name === "Lotus" && <div><LotusPose/></div>}
      {name === "Wind-Relieving" && <div><WindRelievingPose/></div>}
      {/* {name === "Seated%20Forward%20Bend" && <div>not found</div>} */}
    </div>
  );
};

export default PosePages;

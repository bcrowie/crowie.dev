import React from "react";
import Project from "./Project";
import BattleChess from "../../Images/battlechess.png";
import Thishub from "../../Images/thishub.png";
import {
  BATTLECHESS,
  BATTLECHESS_DESC,
  THISHUB,
  THISHUB_DESC,
} from "../../constants";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects">
      <div className="border"></div>
      <h1>Projects</h1>
      <div className="project-grid">
        <Project img={Thishub} title={THISHUB} desc={THISHUB_DESC} />
        <Project
          img={BattleChess}
          title={BATTLECHESS}
          desc={BATTLECHESS_DESC}
        />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Projects;

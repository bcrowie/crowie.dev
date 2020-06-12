import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

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
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 2000], [0, -2000]);

  return (
    <motion.div className="projects" style={{ y: y1 }}>
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
    </motion.div>
  );
};

export default Projects;

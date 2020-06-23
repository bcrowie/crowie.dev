import React from "react";
import Project from "./Project";
import BattleChess from "../../Images/battlechess.png";
import Portfolio from "../../Images/portfolio.PNG";
import SpotifyTool from "../../Images/spotify-tool.PNG";
import Thishub from "../../Images/thishub.png";
import {
  BATTLECHESS,
  BATTLECHESS_DESC,
  PORTFOLIO,
  PORTFOLIO_DESC,
  THISHUB,
  THISHUB_DESC,
  SPOTIFY_TOOL,
  SPOTIFY_TOOL_DESC,
} from "../../constants";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="border"></div>
      <div className="project-container">
        <h1>Projects</h1>
        <div className="project-grid">
          <Project img={Thishub} title={THISHUB} desc={THISHUB_DESC} />
          <Project
            img={BattleChess}
            title={BATTLECHESS}
            desc={BATTLECHESS_DESC}
          />
          <Project
            img={SpotifyTool}
            title={SPOTIFY_TOOL}
            desc={SPOTIFY_TOOL_DESC}
          />
          <Project img={Portfolio} title={PORTFOLIO} desc={PORTFOLIO_DESC} />
        </div>
      </div>
    </div>
  );
};

export default Projects;

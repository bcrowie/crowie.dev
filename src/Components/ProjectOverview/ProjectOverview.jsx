import React from "react";
import { useHistory } from "react-router-dom";
import Display from "./Display/Display";
import { ReactComponent as BackArrow } from "../../Images/back-arrow.svg";
import "./ProjectOverview.scss";
import { useEffect } from "react";

const ProjectOverview = ({ demo, desc, img, link }) => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overview-container">
      <div className="overview-background">
        <div className="border" />
      </div>
      <div className="overview">
        <div className="button-container">
          <button
            onClick={(e) => {
              e.preventDefault();
              history.push("/");
            }}
          >
            <BackArrow />
            Back
          </button>
        </div>
        <Display img={img} />
        <p className="description">
          {desc}
          <p className="github-link">
            <a target="_blank" rel="noopener noreferrer" href={link}>
              Click here to visit the project Github page.
            </a>
          </p>
          {demo && (
            <p className="github-link">
              <a target="_blank" rel="noopener noreferrer" href={demo}>
                Click here to see a demo!
              </a>
            </p>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;

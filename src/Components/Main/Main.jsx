import React, { useContext, useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  DARK_BLUE,
  INTRODUCTION,
  INTRODUCTION_DESC,
  LIGHT,
  TITLES,
  TITLE_ANIMATE_OPACITY,
  TITLE_ANIMATE_Y,
} from "../../constants";
import { NavTheme } from "../../App";
import TitleItem from "./TitleItem";
import "./Main.scss";

const Main = () => {
  const [sticky, setSticky] = useState(false);
  const nameControls = useAnimation();
  const navState = useContext(NavTheme);
  const ref = useRef(null);

  const colorTransition = (color) => {
    nameControls.start({
      color: color,
      transition: { duration: 0.2 },
    });
  };

  const handleScroll = () => {
    if (ref.current) {
      if (window.scrollY < 190) {
        setSticky(false);
      } else if (ref.current.getBoundingClientRect().top <= 2) {
        setSticky(true);
      } else if (ref.current.getBoundingClientRect().top > 3) {
        setSticky(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    nameControls.start({
      opacity: TITLE_ANIMATE_OPACITY,
      y: TITLE_ANIMATE_Y,
      transition: { duration: 1.7 },
    });
  }, [nameControls]);

  useEffect(() => {
    if (navState.navTheme) {
      colorTransition(LIGHT);
    } else if (!navState.navTheme) {
      colorTransition(DARK_BLUE);
    }
  }, [navState]);

  return (
    <div className="main">
      <div className="titles-top">
        <div className="titles">
          <p className="title-item" style={{ marginLeft: "8px" }}>
            {INTRODUCTION}
          </p>
          <motion.p
            animate={nameControls}
            className={`name ${sticky ? "sticky" : ""}`}
            ref={ref}
            style={{ scale: 1.5 }}
          >
            Brenden Crowie
          </motion.p>
        </div>
        <div className="titles">
          <TitleItem duration={0.5} title={TITLES[0]} />
          <TitleItem duration={0.75} title={TITLES[1]} />
          <TitleItem duration={1} title={TITLES[2]} />
        </div>
      </div>
      <div className="titles-bottom">
        <motion.p>{INTRODUCTION_DESC}</motion.p>
      </div>
    </div>
  );
};

export default Main;

import React, { useContext, useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import TitleItem from "./TitleItem";
import { NavTheme } from "../../App";
import {
  DARK_BLUE,
  INTRODUCTION,
  INTRODUCTION_DESC,
  LIGHT,
  NAV_DARK,
  NAV_LIGHT,
  TITLES,
  TITLE_ANIMATE_OPACITY,
  TITLE_ANIMATE_Y,
  NAV_WHITE,
} from "../../constants";
import "./Main.scss";

const Main = () => {
  const [sticky, setSticky] = useState(false);
  const mobile = window.innerWidth <= 900;
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
      if (
        (window.scrollY < 190 && !mobile) ||
        (window.scrollY < 160 && mobile)
      ) {
        setSticky(false);
      } else if (ref.current.getBoundingClientRect().y <= 10) {
        setSticky(true);
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
    if (navState.navTheme === NAV_WHITE) {
      colorTransition(DARK_BLUE);
    } else if (
      navState.navTheme === NAV_DARK ||
      navState.navTheme === NAV_LIGHT
    ) {
      colorTransition(LIGHT);
    }
  }, [navState]);

  return (
    <div className="main container">
      <div className="titles-top">
        <div className="titles">
          <p className="title-item">{INTRODUCTION}</p>
          <motion.p
            animate={nameControls}
            className={`name ${sticky ? "sticky" : ""}`}
            ref={ref}
          >
            Brenden Crowie
          </motion.p>
        </div>
        <div className={`titles ${sticky ? "sticky-titles" : ""}`}>
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

import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { NavTheme } from "../../App";
import { ReactComponent as LinkedIn } from "../../Images/linkedin.svg";
import { ReactComponent as Github } from "../../Images/github.svg";
import {
  DARK_BLUE,
  GITHUB_LINK,
  LIGHT,
  LINKEDIN_LINK,
  LIGHT_BLUE,
  NAV_DARK,
  NAV_LIGHT,
  NAV_WHITE,
} from "../../constants";
import SocialLink from "./SocialLink";
import "./Nav.scss";

const Nav = () => {
  const location = useLocation();
  const navState = useContext(NavTheme);
  const navControls = useAnimation();
  const socialControls = useAnimation();
  const transition = { duration: 0.2 };

  const startTransition = (backgroundColor, fill) => {
    navControls.start({
      backgroundColor,
      transition,
    });
    socialControls.start({
      fill,
      transition,
    });
  };

  useEffect(() => {
    if (navState.navTheme === NAV_LIGHT) {
      startTransition(LIGHT_BLUE, LIGHT);
    } else if (navState.navTheme === NAV_WHITE) {
      startTransition(LIGHT, DARK_BLUE);
    } else if (navState.navTheme === NAV_DARK) {
      startTransition(DARK_BLUE, LIGHT);
    }
  }, [navState]);

  return (
    <motion.nav
      className="nav"
      animate={navControls}
      style={{ backgroundColor: LIGHT }}
    >
      <div className="nav-container">
        <h2 className="name">
          {location.pathname !== "/" && "Brenden Crowie"}
        </h2>

        <div>
          <SocialLink
            link={LINKEDIN_LINK}
            navState={navState.navTheme}
            socialControls={socialControls}
          >
            {<LinkedIn />}
          </SocialLink>
          <SocialLink
            link={GITHUB_LINK}
            navState={navState.navTheme}
            socialControls={socialControls}
          >
            {<Github />}
          </SocialLink>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;

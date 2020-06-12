import React, { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { NavTheme } from "../../App";
import { ReactComponent as LinkedIn } from "../../Images/linkedin.svg";
import { ReactComponent as Github } from "../../Images/github.svg";
import {
  DARK_BLUE,
  GITHUB_LINK,
  LIGHT,
  LINKEDIN_LINK,
  DARK_PURPLE,
} from "../../constants";
import SocialLink from "./SocialLink";
import "./Nav.scss";

const Nav = () => {
  const navState = useContext(NavTheme);
  const navControls = useAnimation();
  const socialControls = useAnimation();

  const transition = { duration: 0.2 };

  const startTransition = (color) => {
    navControls.start({
      backgroundColor: color,
      transition,
    });
    socialControls.start({
      fill: color === LIGHT ? DARK_BLUE : LIGHT,
      transition,
    });
  };

  const handleSocialHover = (start) => {
    if (start) {
      socialControls.start({
        fill: DARK_PURPLE,
        transition,
      });
    } else {
      socialControls.start({
        fill: navState.navTheme ? LIGHT : DARK_BLUE,
        transition,
      });
    }
  };

  useEffect(() => {
    if (navState.navTheme) {
      startTransition(DARK_BLUE);
    } else if (!navState.navTheme) {
      startTransition(LIGHT);
    }
  }, [navState]);

  return (
    <motion.nav
      className="nav"
      animate={navControls}
      style={{ backgroundColor: LIGHT }}
    >
      <div className="nav-container">
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

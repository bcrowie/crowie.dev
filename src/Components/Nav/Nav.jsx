import React, { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { NavTheme } from "../../App";
import { ReactComponent as LinkedIn } from "../../Images/linkedin.svg";
import { ReactComponent as Github } from "../../Images/github.svg";
import { DARK_BLUE, GITHUB_LINK, LIGHT, LINKEDIN_LINK } from "../../constants";
import SocialLink from "./SocialLink";
import "./Nav.scss";

const Nav = () => {
  const navState = useContext(NavTheme);
  const navControls = useAnimation();
  const socialControls = useAnimation();

  const startTransition = (color) => {
    navControls.start({
      backgroundColor: color,
      transition: { duration: 0.2 },
    });
    socialControls.start({
      fill: color === LIGHT ? DARK_BLUE : LIGHT,
      transition: { duration: 0.2 },
    });
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
          <SocialLink link={LINKEDIN_LINK} socialControls={socialControls}>
            {<LinkedIn />}
          </SocialLink>
          <SocialLink link={GITHUB_LINK} socialControls={socialControls}>
            {<Github />}
          </SocialLink>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;

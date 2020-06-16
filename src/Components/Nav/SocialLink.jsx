import React from "react";
import { motion } from "framer-motion";
import { DARK_BLUE, LIGHT_BLUE, NAV_LIGHT } from "../../constants";

const SocialLink = ({ children, navState, link, socialControls }) => {
  return (
    <motion.a
      animate={socialControls}
      style={{ fill: DARK_BLUE }}
      transition={{ duration: 0.5 }}
      whileHover={{
        fill: navState === NAV_LIGHT ? DARK_BLUE : LIGHT_BLUE,
        transition: { duration: 0.2 },
      }}
      href={link}
      target="_blank"
    >
      {children}
    </motion.a>
  );
};

export default SocialLink;

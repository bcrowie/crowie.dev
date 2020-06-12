import React from "react";
import { motion } from "framer-motion";
import { DARK_BLUE, DARK_PURPLE, LIGHT_BLUE } from "../../constants";

const SocialLink = ({ children, navState, link, socialControls }) => {
  return (
    <motion.a
      animate={socialControls}
      style={{ fill: DARK_BLUE }}
      transition={{ duration: 0.5 }}
      whileHover={{
        fill: navState ? LIGHT_BLUE : DARK_PURPLE,
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

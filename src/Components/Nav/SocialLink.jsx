import React from "react";
import { motion } from "framer-motion";
import { DARK_BLUE } from "../../constants";

const SocialLink = ({ children, link, socialControls }) => {
  return (
    <motion.a
      animate={socialControls}
      style={{ fill: DARK_BLUE }}
      transition={{ duration: 0.5 }}
      href={link}
      target="_blank"
    >
      {children}
    </motion.a>
  );
};

export default SocialLink;

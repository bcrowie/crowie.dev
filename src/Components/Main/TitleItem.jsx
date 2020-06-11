import React from "react";
import { motion } from "framer-motion";
import { TITLE_ANIMATE_OPACITY, TITLE_ANIMATE_Y } from "../../constants";

const TitleItem = ({ duration, title }) => {
  return (
    <motion.p
      className="title-item"
      initial={{ opacity: 0 }}
      animate={{
        opacity: TITLE_ANIMATE_OPACITY,
        y: TITLE_ANIMATE_Y,
      }}
      transition={{ duration }}
    >
      {title}
    </motion.p>
  );
};

export default TitleItem;

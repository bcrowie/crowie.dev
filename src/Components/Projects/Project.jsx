import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Project = ({ img, title, desc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const variants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0 },
  };

  return (
    <motion.div
      className="project"
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
    >
      <Link to={`/${title}`}>
        <div
          className="img"
          style={{
            backgroundImage: `url("${img}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "15em",
            width: "25em",
            color: "white",
          }}
        >
          <motion.div
            animate={isHovered ? "open" : "closed"}
            variants={variants}
            className="description"
          >
            <h2>{title}</h2>
            <p>{desc}</p>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Project;

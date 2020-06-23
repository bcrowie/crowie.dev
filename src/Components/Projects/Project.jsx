import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Project = ({ img, title, desc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const mobile = window.innerWidth <= 900;

  const hiddenVariants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };

  const overlayVariants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0 },
  };

  return (
    <>
      {mobile && <h2 className="mobile-title">{title}</h2>}
      <motion.div
        animate={inView ? "visible" : "hidden"}
        variants={hiddenVariants}
        transition={{ duration: 0.3, ease: "easeOut" }}
        ref={ref}
        className="project"
        onMouseEnter={() => setIsHovered(!isHovered)}
        onMouseLeave={() => setIsHovered(!isHovered)}
      >
        <Link to={`/${title}/#`}>
          <div
            className="img"
            style={{
              backgroundImage: `url("${img}")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: `${mobile ? "12em" : "15em"}`,
              width: `${mobile ? "21em" : "25em"}`,
              color: "white",
            }}
          >
            <motion.div
              animate={isHovered ? "open" : "closed"}
              transition={{ duration: 0.5 }}
              variants={overlayVariants}
              className="description"
            >
              <h2>{title}</h2>
              <p>{desc}</p>
            </motion.div>
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default Project;

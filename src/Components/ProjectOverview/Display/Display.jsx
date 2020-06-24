import React from "react";

const Display = ({ img }) => {
  const mobile = window.innerWidth <= 900;
  return (
    <div
      className="laptop"
      style={{
        backgroundImage: `url("${img}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: `${mobile ? "12em" : "25em"}`,
        margin: "2em auto 0 auto",
        width: `${mobile ? "20em" : "43em"}`,
      }}
    ></div>
  );
};

export default Display;

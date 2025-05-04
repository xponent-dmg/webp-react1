import React from "react";

export const Divider = ({ exerciseNum }) => {
  const dividerContainerStyle = {
    display: "flex",
    alignItems: "center",
    margin: "30px 0",
    position: "relative",
  };

  const dividerStyle = {
    width: "100%",
    height: "2px",
    backgroundColor: "#e0e0e0",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  };

  const exerciseNumStyle = {
    backgroundColor: "#3498db",
    color: "white",
    width: "36px",
    height: "36px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    fontWeight: "bold",
    fontSize: "0.9rem",
    zIndex: 1,
  };

  return (
    <div style={dividerContainerStyle}>
      <div style={dividerStyle}></div>
      {exerciseNum && <div style={exerciseNumStyle}>Ex {exerciseNum}</div>}
    </div>
  );
};

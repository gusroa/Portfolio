import React from "react";

const AdjustFullHeight = (Component) => (props) => {
  const avHeight = window.innerHeight;

  return (
    <div className="full-height" style={{ minHeight: avHeight + "px" }}>
      <Component {...props} />
    </div>
  );
};

export { AdjustFullHeight };

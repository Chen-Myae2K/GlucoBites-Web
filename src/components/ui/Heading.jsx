import React from "react";

const Heading = ({ children }) => {
  return (
    <p className="text-lg text-ink/80 w-3xl text-center py-3">
      {children}
    </p>
  );
};

export default Heading;

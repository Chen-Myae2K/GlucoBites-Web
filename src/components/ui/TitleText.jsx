import React from "react";

const TitleText = ({ title, description }) => {
  return (
    <div className="flex items-center px-16 gap-5">
      <p className="text-3xl text-white text-nowrap bg-cyan px-2 py-1 rounded-md font-semibold">
        {title}
      </p>
      <p className="text-ink w-xl">{description}</p>
    </div>
  );
};

export default TitleText;

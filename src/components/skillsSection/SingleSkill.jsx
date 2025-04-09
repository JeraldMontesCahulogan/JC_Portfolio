import { useState } from "react";

/* eslint-disable react/prop-types */
const SingleSkill = ({ imgSvg, text, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hover:-translate-y-10 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center gap-2 relative">
        <div
          className="bg-white text-cyan h-[105px] w-[105px] flex items-center justify-center rounded-full 
          hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange"
          style={{
            color: isHovered ? color : "",
          }}
        >
          {imgSvg}
        </div>
        <p className="text-white font-bold">{text}</p>
      </div>
      <div className="w-[105px] h-[200px] bg-orange absolute top-[50px] -z-10"></div>
    </div>
  );
};

export default SingleSkill;

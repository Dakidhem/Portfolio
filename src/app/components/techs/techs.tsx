import React from "react";

import technologies from "../../utils/technologies";
const Techs = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {technology.name}
        </div>
      ))}
    </div>
  );
};

export default Techs;

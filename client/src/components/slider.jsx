import React from "react";
import { FaAtlassian, FaAccessibleIcon, FaInvision, FaSitemap } from "react-icons/fa";
import { FaSitrox } from "react-icons/fa6";

const icons = [FaAtlassian, FaAccessibleIcon, FaInvision, FaSitemap, FaSitrox];

const Slider = () => {
  return (
    <div className="w-full overflow-hidden bg-navyblue py-6">
      <div className="flex gap-12 animate-scroll whitespace-nowrap ">
        {[...icons, ...icons].map((Icon, index) => (
          <div key={index} className="text-white text-5xl flex-shrink-0 bg-blue-950 p-3 rounded-lg">
            <Icon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = ({ title, icon, text, textClass, titleClass }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Accordion Header */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full justify-between items-center p-4 bg-gradient-to-r from-blue-500
                to-teal-500 rounded-lg shadow-md text-lg
                  font-semibold text-white transition-all
                  hover:scale-105 hover:shadow-2xl"
      >
        <div className="flex gap-3 items-center">
          {icon}
          <span className={`${titleClass}`}>{title}</span>
        </div>

        {open ? (
          <IoIosArrowUp className="text-xl transition-transform duration-300" />
        ) : (
          <IoIosArrowDown className="text-xl transition-transform duration-300" />
        )}
      </button>

      {/* Accordion Content */}
      <div
        className={`transition-all duration-300  ease-in-out overflow-hidden ${open ? " opacity-100 py-3" : "max-h-0 opacity-0 py-0"}`}
      >
        <div className={`p-4  rounded-lg shadow-sm border bg-gray-200 border-gray-300 ${textClass}`}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default Accordion;

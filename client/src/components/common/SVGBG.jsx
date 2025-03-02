import React from 'react';
import './SVGBG.css'; // Import the CSS file for animation

const SVGBG = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 390"
      xmlns="http://www.w3.org/2000/svg"
      className="transition duration-300 ease-in-out delay-150"
    >
      <defs>
        <linearGradient id="gradient" x1="11%" y1="81%" x2="89%" y2="19%">
          <stop offset="5%" stopColor="#9900ef"></stop>
          <stop offset="95%" stopColor="#0693e3"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,400 L 0,150 C 54.08107179663345,134.77842665750603 108.1621435932669,119.55685331501203 178,117 C 247.8378564067331,114.44314668498797 333.43249742356585,124.5510133974579 405,152 C 476.56750257643415,179.4489866025421 534.1078667124699,224.23909309515633 605,198 C 675.8921332875301,171.76090690484367 760.1360357265545,74.49261422191687 836,78 C 911.8639642734455,81.50738577808313 979.3479903813125,185.79045001717625 1043,204 C 1106.6520096186875,222.20954998282375 1166.4720027481965,154.3455857093782 1232,131 C 1297.5279972518035,107.65441429062179 1368.7639986259019,128.8272071453109 1440,150 L 1440,400 L 0,400 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        fillOpacity="1"
        className="wave"
      ></path>
    </svg>
  );
};

export default SVGBG;

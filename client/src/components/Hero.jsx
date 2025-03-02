import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const Hero = () => {
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setInitialPosition({
      x: window.innerWidth / 2 - 200,
      y: window.innerHeight / 2 - 200,
    });
  }, []);

  return (
    <div className="relative w-full h-screen bg-navyblue overflow-hidden">

      {/* Content */}
      <div className="absolute mt-7 w-full text-center text-white flex flex-col items-center py-10  z-10 ">
        {/* Star Ratings */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="flex items-center text-xl">
            <i className="bx bxs-star text-khaki"></i>
            <i className="bx bxs-star text-khaki"></i>
            <i className="bx bxs-star text-khaki"></i>
            <i className="bx bxs-star text-khaki"></i>
            <i className="bx bxs-star-half text-khaki"></i>
          </div>
          <div className="flex items-center gap-1">
            <p>4.7</p>
            <p>(2000+ Reviews)</p>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-3xl md:text-6xl font-poppins font-bold leading-tight mb-6 w-[90%] md:w-[60%] mt-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Your Partner in <span className="text-khaki">Digital</span> Transformation.
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg mb-8 px-6 md:px-12 w-[90%]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Empowering businesses to evolve, adapt, and thrive in a rapidly
          changing digital world. With cutting-edge technology and personalized solutions,
          we guide you through every step of your transformation journey.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row w-[90%] gap-4 justify-center font-poppins mb-4">
          <motion.button
            className="bg-khaki text-black px-8 py-3 rounded-lg text-lg flex items-center justify-between gap-3 hover:scale-105
           hover:text-white hover:bg-blue-600 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Get Started
            <IoIosArrowForward />
          </motion.button>
          <motion.button
            className="border-2 border-khaki text-khaki px-8 py-3 flex items-center gap-3 hover:scale-105 justify-between
                rounded-lg text-lg hover:border-blue-600 hover:text-white
                 hover:bg-blue-600 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Request A Demo
            <IoIosArrowForward />
          </motion.button>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <p className="font-bold font-playfair text-white text-center text-sm md:text-xl">
            <a href="#" className="text-blue-700 underline">
              Request A Demo
            </a>{" "}
            to try our platform for three months, it's free.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

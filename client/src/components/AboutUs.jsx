import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import img from '../assets/images/image.jpg'
import ppl from '../assets/images/download/ppl.jpg'
import Value from "./Value";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation only happens once
    threshold: 0.2, // Triggers when 20% of the section is visible
  });
  
  return (
    <div className="py-16 px-8 md:px-16 bg-gray-200">
      <div className="flex flex-col md:flex-row w-full gap-10 items-center">
        {/* Left Section */}
        <div className="md:w-1/2 w-full space-y-6">
          {/* Heading */}
          <div className="flex items-center gap-4 font-semibold text-blue-600 text-lg">
            <div className="w-20 h-[2px] bg-navyblue"></div>
            Learn More About Us
          </div>

          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            Since our inception, we have been at the forefront of technological 
            innovation, helping businesses adapt and thrive in the digital era. 
            What started as a small team of passionate tech enthusiasts has grown 
            into a dynamic IT solutions provider, delivering cutting-edge services 
            across industries. Over the years, we have built a reputation for excellence, 
            reliability, and innovation, partnering with organizations to streamline their 
            processes, enhance security, and drive digital transformation. Our journey is 
            defined by our commitment to solving complex challenges with smart, scalable, and future-proof solutions.
          </p>

          {/* Button */}
          <button className="bg-khaki text-black px-8 py-3 rounded-lg text-lg flex items-center gap-3 
                             hover:scale-105 hover:text-white hover:bg-blue-600 transition duration-300">
            Learn More
            <IoIosArrowForward />
          </button>
        </div>

        {/* Right Section - Add an Image or Graphics Here */}
        <div className="md:w-1/2 w-full flex justify-center">
            <img src={img} alt="" className="rounded-lg" />
          {/* <div className="w-full h-64 bg-gray-100 rounded-lg shadow-lg flex items-center justify-center">
          </div> */}
        </div>
      </div>


   
    </div>
  );
};

export default AboutUs;

import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdAddBox } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  return (
    <div className="bg-navyblue sticky top-0 right-0 shadow z-20">
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-5 md:px-12 py-5">
        {/* Logo */}
        <div className="font-bold text-xl text-white">
          <Link
            to="home"
            className="cursor-pointer"
            smooth={true}
            duration={500}
          >
            NeoTech
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-white"
          >
            <AiOutlineMenu />
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6 font-semibold text-white">
          <Link
            to="home"
            className="cursor-pointer"
            smooth={true}
            duration={500}
          >
            Home
          </Link>

          <Link
            to="services"
            className="cursor-pointer"
            smooth={true}
            duration={500}
          >
            Services
          </Link>
          <Link
            to="about"
            className="cursor-pointer"
            smooth={true}
            duration={500}
          >
            About Us
          </Link>

          {/* Products with Dropdown */}
          <div
            className="relative flex items-center gap-1 cursor-pointer"
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            <h2>Products</h2>
            {isProductsDropdownOpen ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
            )}

            {isProductsDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full w-72 bg-amber-600 shadow-lg"
              >
                <Link
                  to="school-management"
                  className="px-4 flex items-center gap-2 py-2 text-white hover:text-blue-950 hover:bg-gray-200"
                  smooth={true}
                  duration={500}
                >
                  <MdAddBox className="text-xl" /> School Management System
                </Link>
                <Link
                  to="hotel-management"
                  className="flex items-center gap-2 px-4 py-2 text-white hover:text-blue-950 hover:bg-gray-200"
                  smooth={true}
                  duration={500}
                >
                  <MdAddBox className="text-xl" /> Hotel Management System
                </Link>
                <Link
                  to="eva-net"
                  className="flex items-center gap-2 px-4 py-2 text-white hover:text-blue-950 hover:bg-gray-200"
                  smooth={true}
                  duration={500}
                >
                  <MdAddBox className="text-xl" /> EvaNet Website
                </Link>
              </motion.div>
            )}
          </div>

          <h2>Blog</h2>
          <h2>Contact Us</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-khaki rounded-lg text-black px-4 hover:bg-yellow-500"
          >
            Sign Up
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-trasparent border-2 border-khaki rounded-lg text-white px-4 hover:bg-yellow-500"
          >
            Donate
          </motion.button>
        </div>
      </div>

      {/* Dropdown Menu (Mobile) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-md p-5 md:hidden z-30"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-5 right-5 text-2xl text-blue-950"
            >
              <AiOutlineClose />
            </button>
            <ul className="space-y-4 font-semibold">
              <li>
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                >
                  <span>About Us</span>
                  {isAboutDropdownOpen ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </div>
                {isAboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="pl-4 mt-2 space-y-2"
                  >
                    <Link
                      to="mission"
                      className="block text-gray-700 hover:text-blue-950"
                      smooth={true}
                      duration={500}
                    >
                      Our Mission
                    </Link>
                    <Link
                      to="team"
                      className="block text-gray-700 hover:text-blue-950"
                      smooth={true}
                      duration={500}
                    >
                      Our Team
                    </Link>
                    <Link
                      to="history"
                      className="block text-gray-700 hover:text-blue-950"
                      smooth={true}
                      duration={500}
                    >
                      Our History
                    </Link>
                  </motion.div>
                )}
              </li>
              <li>
                <Link to="services" smooth={true} duration={500}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="products" smooth={true} duration={500}>
                  Products
                </Link>
              </li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2  w- bg-khaki rounded-lg text-white hover:bg-yellow-500"
                >
                  Sign Up
                </motion.button>
              </li>

              <li>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-trasparent border-2 border-navyblue rounded-lg text-navyblue px-4 hover:bg-yellow-500 hover:border-none"
                >
                  Donate
                </motion.button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

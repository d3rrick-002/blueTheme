import React, { useState, useEffect } from 'react';
import { AiFillDatabase } from "react-icons/ai";
import { BiSolidCctv } from "react-icons/bi";
import { AiFillCode } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { RiCodeBoxFill } from "react-icons/ri";
import { BsHddNetworkFill } from "react-icons/bs";

const Services = () => {
  const [visible, setVisible] = useState(false);

  const cards = [
    { icon: < AiFillDatabase />, title: 'Creating Database', desc: 'Tailored database solutions for your organization.' },
    { icon: <BiSolidCctv />, title: 'CCTV Installation', desc: 'Secure your premises with professional CCTV installation.' },
    { icon: <AiFillCode />, title: 'Website Development', desc: 'Custom-built websites to establish your online presence.' },
    { icon: <MdSecurity />, title: 'Cybersecurity Awareness', desc: 'Protect your business with cybersecurity education.' },
    { icon: <RiCodeBoxFill />, title: 'Software Development', desc: 'Developing software solutions for your needs.' },
    { icon: <BsHddNetworkFill />, title: 'Building Network', desc: 'Designing and implementing reliable network solutions.' },
  ];

  // Handle scroll to trigger animation
  const handleScroll = () => {
    const servicesSection = document.getElementById('services');
    const sectionTop = servicesSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight) {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="services" className=" md:w-full w-full mx-auto px-4 py-12 bg-navyblue ">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Our Services</h2>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {cards.map((service, index) => (
          <div
            key={index}
            className="bg-blue-950 shadow-lg border rounded-lg p-6 text- transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div  alt={service.title} className="w-16 text-blue-500 text-5xl mx- mb-4" >{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
            <p className="text-blue-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

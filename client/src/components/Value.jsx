import React from 'react'
import Accordion from './common/Accordion'
import { LuHeartHandshake, LuHandHeart } from "react-icons/lu";
import { GiHeartShield } from "react-icons/gi";

const Value = () => {
  return (
    <div className='w-full flex flex-col gap-y-6  py-8 '>
        {/* <h2 className='text-4xl font-bold text-center text-gray-800 mb-8'>Our Values</h2> */}

        <Accordion 
            icon={<LuHeartHandshake className='text-xl text-white' />}
            title="Our Mission"
            text="Our mission is to empower businesses with innovative, efficient, and secure IT solutions that drive growth and transformation. We are dedicated to delivering tailored technology strategies that help organizations optimize operations, enhance digital experiences, and stay ahead in an ever-evolving digital landscape. By combining expertise, creativity, and cutting-edge technologies, we strive to create impactful solutions that make a difference."
            textClass="text-lg text-gray-600"
            titleClass="text-2xl font-semibold"
        />

        <Accordion 
            icon={<LuHandHeart className='text-xl text-white' />}
            title="Our Vision"
            text="We envision a future where technology seamlessly bridges the gap between ideas and success. Our goal is to be a global leader in digital transformation, fostering innovation and shaping a smarter, more connected world. We aim to be the go-to technology partner for businesses seeking sustainable growth, operational efficiency, and long-term success in the digital age."
            textClass="text-lg text-gray-600"
            titleClass="text-2xl font-semibold"
        />

        <Accordion 
            icon={<GiHeartShield className='text-xl text-white' />}
            title="Our Core Values"
            text={
                <>
                    <p className="font-semibold">Innovation:</p>
                    <p className="text-lg text-gray-600">We embrace creativity and continuously explore new technologies to deliver the best solutions.</p>

                    <p className="font-semibold mt-2">Integrity:</p>
                    <p className="text-lg text-gray-600">Honesty, transparency, and ethical business practices are at the heart of everything we do.</p>

                    <p className="font-semibold mt-2">Customer-Centric Approach:</p>
                    <p className="text-lg text-gray-600">Our clients are our priority, and we go the extra mile to exceed their expectations.</p>

                    <p className="font-semibold mt-2">Excellence:</p>
                    <p className="text-lg text-gray-600">We are committed to delivering high-quality, scalable, and secure solutions that drive success.</p>

                    <p className="font-semibold mt-2">Collaboration:</p>
                    <p className="text-lg text-gray-600">We believe in teamwork, fostering strong relationships with clients, partners, and colleagues.</p>

                    <p className="font-semibold mt-2">Adaptability:</p>
                    <p className="text-lg text-gray-600">In a rapidly evolving tech landscape, we stay ahead by embracing change and innovation.</p>
                </>
            }
            textClass="text-lg text-gray-600"
            titleClass="text-2xl font-semibold"
        />

        <Accordion 
            icon={<LuHandHeart className='text-xl text-white' />}
            title="Our Team Members"
            text="We envision a future where technology seamlessly bridges the gap between ideas and success. Our goal is to be a global leader in digital transformation, fostering innovation and shaping a smarter, more connected world. We aim to be the go-to technology partner for businesses seeking sustainable growth, operational efficiency, and long-term success in the digital age."
            textClass="text-lg text-gray-600"
            titleClass="text-2xl font-semibold"
        />
    </div>
  )
}

export default Value

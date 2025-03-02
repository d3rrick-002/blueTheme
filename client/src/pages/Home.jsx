import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'

const Home = () => {
  return (
    <div className='relative'>
       {/* Top Banner */}
       <div className="w-full p-3 bg-blue-700">
        <p className="text-white text-center">
          Signup for the newsletter to stay up to date with news and updates
        </p>
      </div>

      {/* Fixed Navbar */}
      <div className='fixed top-0 left-0 w-full z-20'>
        <Navbar />
      </div>

      {/* Add Padding to Avoid Navbar Overlap */}
      <div className=''>
        <Hero />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Services />
      </div>
    </div>
  )
}

export default Home

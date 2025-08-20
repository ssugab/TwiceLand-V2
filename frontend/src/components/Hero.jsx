import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='relative h-screen md:h-[600px] lg:h-[700px] w-full'>
      <img src={assets.Hero} alt="Hero" className='rounded-4xl absolute inset-0 p-3 h-full w-full object-cover'/>
      
      <div className='absolute z-10 top-1/3 left-12'>
        <h2 className='text-lg md:text-xl font-display-bold text-offwhite'>Welcome To</h2>
        <h1 className='text-9xl font-title bg-clip-text text-transparent inline-block pr-2 animate-gradient-vibrant' 
        style={{ backgroundImage: "var(--gradient-twice)", 
                  backgroundSize: "200% 200%" }}>TWICELAND</h1>

        <p className='mt-2 text-sm md:text-base text-offwhite/90 font-display-bold'>
          this website provides all information about twice
        </p>
      </div>

      {/*<div className='relative flex justify-center items-end'>
        <h2 className='text-lg md:text-xl font-display-bold text-offwhite'>Take a Look</h2>
      </div>*/}

      <div className='absolute z-10 bottom-6 left-1/2 transform -translate-x-1/2'>
        {/* Button Scroll- Need smoother scroll */}
        <a
          href="#latest-comeback"
          className="inline-block px-6 py-2 text-lg font-display-bold text-offwhite bg-accent rounded-xl shadow-lg hover:bg-accent2 transition relative animate-bounce"
        >
          Take a Look ↓
        </a>
      </div>

    </div>
  )
}

export default Hero
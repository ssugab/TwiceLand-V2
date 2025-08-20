import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {

  const menuItems = ['Profile', 'Discography', 'Music Videos', 'Gallery', 'News'];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      }
      else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])


  return (
    <div className='fixed top-0 left-0 right-0 z-50 p-2 flex justify-between items-center transition-all duration-300'>
      <div className={`w-full p-4 flex justify-between items-center transition-all duration-300
        ${isScrolled ? 'bg-accent2 rounded-2xl shadow-md' : 'bg-transparent'}`}>
        <div className='flex items-center'>
          <img href='#' src={assets.Twicelogo} alt="" className='w-12 h-12 ml-12 hover:scale-110 transition-transform duration-300' />
        </div>
        <div className='flex space-x-10 mr-12'>
          {menuItems.map((item, index) => (
            <a key={index} 
            href={`/${item.toLowerCase().replace(' ', '-')}`} 
            className={`text-sm font-display-bold hover:text-accent transition-colors duration-300
              ${isScrolled ? 'text-matteblack' : 'text-offwhite'}`}>{item}</a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
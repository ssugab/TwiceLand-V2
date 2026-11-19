import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {

  const menuItems = ['Home', 'Profile', 'Discography', 'Music Videos', 'Gallery', 'News'];
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Profile', path: '/Profile' },
    { name: 'Discography', path: '/Discography' }
  ];
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

        {/* Klik Logo TWICE langsung kembali ke Home ('/') */}
        <Link to='/' className='flex items-center ml-12'>
          <img src={assets.Twicelogo} alt="Twice Logo" className='w-12 h-12 hover:scale-110 transition-transform duration-300' />
        </Link>

        {/* Menu Navigasi dengan Link to */}
        <div className='flex space-x-10 mr-12'>
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`text-sm font-display-bold hover:text-accent transition-colors duration-300
                ${isScrolled ? 'text-matteblack' : 'text-offwhite'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Navbar
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  const navLinks = [
    { name: 'Profile', path: '/' },
    { name: 'Discography', path: '/discography' },
    { name: 'Music Videos', path: '/' },
    { name: 'Gallery', path: '/' },
    { name: 'News', path: '/news' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

  const isHeroPosition = isHome && !isScrolled;

  return (
    <div className='fixed top-0 left-0 right-0 z-50 p-2 flex justify-center items-center transition-all duration-300 pointer-events-none'>
      <div className={`w-300 p-2.5 flex justify-between items-center transition-all duration-500 pointer-events-auto
        ${isScrolled ? 'bg-accent2 rounded-2xl shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>

        {/* Logo TWICE: Klik untuk kembali ke Home */}
        <Link to='/' className={`flex space-x-10 ml-12 transition-all duration-500 ease-out
            ${isHeroPosition
            ? 'translate-y-[5vh] md:translate-y-[2vh]' // Menggeser ke bawah sejajar area tengah-bawah Hero
            : 'translate-y-0' // Kembali sejajar dengan Logo di Navbar
          }`}
        >
          <img src={assets.Twicelogo} alt="Twice Logo" className='w-12 h-12 hover:scale-110 transition-transform duration-300' />
        </Link>

        {/* Menu Navigasi Akan turun saat isHeroPosition true, dan naik (translate-y-0) saat di-scrol */}
        <div className={`flex space-x-10 mr-12 transition-all duration-500 ease-out
            ${isHeroPosition
            ? 'translate-y-[5vh] md:translate-y-[2vh]' // Menggeser ke bawah sejajar area tengah-bawah Hero
            : 'translate-y-0' // Kembali sejajar dengan Logo di Navbar
          }`}
        >
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`text-sm font-display-bold hover:text-accent transition-colors duration-300
                ${isScrolled ? 'text-matteblack' : 'text-offwhite drop-shadow-md'}`}
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

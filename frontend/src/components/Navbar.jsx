import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  const navLinks = [
    { name: 'Profile', path: '/profile' },
    { name: 'Discography', path: '/discography' },
    { name: 'Music Videos', path: '/' },
    { name: 'Gallery', path: '/' },
    { name: 'News', path: '/news' },
  ];

  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Jarak scroll (dalam px) yang dibutuhkan hingga menu benar-benar sampai di atas
      const maxScroll = 280;
      const currentScroll = window.scrollY;

      // Membatasi nilai antara 0 (paling atas) hingga 1 (selesai transisi)
      const progress = Math.min(Math.max(currentScroll / maxScroll, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Jika bukan di Home, paksa progress ke 1 (posisi navbar normal)
  const effectiveProgress = isHomePage ? scrollProgress : 1;
  const isScrolled = effectiveProgress > 0.99; // Background navbar muncul saat menu hampir sampai atas

  // Hitung posisi Y secara dinamis: dari 42vh turun perlahan ke 0vh
  const currentTranslateY = (1 - effectiveProgress) * 2;

  return (
    <div className='fixed top-0 left-0 right-0 z-50 p-2 flex justify-center items-center pointer-events-none'>
      <div
        className={`w-300 p-2.5 flex justify-between rounded-2xl items-center transition-all duration-500 pointer-events-auto
        ${isScrolled ? 'bg-accent2 rounded-2xl shadow-md backdrop-blur-sm' : 'bg-transparent ease-out'}`}
      >
        {/* Logo TWICE */}
        <Link to='/' style={{
          transform: `translateY(${currentTranslateY}vh)`,
        }}
          className='flex space-x-10 ml-12 will-change-transform'
        >
          <img
            src={assets.Twicelogo}
            alt="Twice Logo"
            className='w-12 h-12 hover:scale-110 transition-transform duration-300'
          />
        </Link>

        {/* Menu Navigasi: Bergerak real-time mengikuti scroll */}
        <div
          style={{
            transform: `translateY(${currentTranslateY}vh)`,
          }}
          className='flex space-x-10 mr-12 will-change-transform'
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
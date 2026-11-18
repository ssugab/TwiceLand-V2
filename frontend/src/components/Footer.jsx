import React from 'react';
import { assets } from '../assets/assets';

/**
 * Footer Component
 * 
 * Features:
 * 1. SOLID MODERN MAGENTA BACKGROUND (#FF337A): Strictly NO dark glass in this section.
 * 2. High-energy celebratory atmosphere completing the TWICE official color journey:
 *    Hero (Peach) -> LatestComeback (Dark Glass) -> LatestUpdate (Solid Apricot) -> Members (Dark Glass) -> Footer (Solid Magenta).
 * 3. High-contrast typography: Crisp white and matte black.
 */
const Footer = () => {
  return (
    <footer
      className="relative pt-20 pb-16 px-4 sm:px-6 md:px-12 text-white overflow-hidden"
      style={{ backgroundColor: '#FF337A' }} // Solid Modern Neon Magenta
    >
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Top Showcase Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/20">
          <div className="flex items-center gap-4">
            <img
              src={assets.Twicelogo}
              alt="TWICE Logo"
              className="w-16 h-16 drop-shadow-md filter brightness-0 invert"
            />
            <div>
              <h2 className="text-3xl sm:text-4xl font-title leading-none">
                TWICELAND
              </h2>
              <p className="text-xs sm:text-sm font-heading tracking-widest uppercase text-white/90 mt-1">
                One In A Million • Official Fan Hub
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://open.spotify.com/artist/7n2YcHowBYUVWzKQ4b3CJ7"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-matteblack text-white hover:bg-white hover:text-matteblack font-heading text-xs uppercase tracking-wider font-bold transition-all shadow-md cursor-pointer"
            >
              Spotify ↗
            </a>
            <a
              href="https://www.youtube.com/@TWICE"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-white text-matteblack hover:bg-matteblack hover:text-white font-heading text-xs uppercase tracking-wider font-bold transition-all shadow-md cursor-pointer"
            >
              YouTube ↗
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-10">
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-white/70 mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-sm font-body">
              <li><a href="#latest-comeback" className="hover:underline">Latest Era</a></li>
              <li><a href="#latest-updates" className="hover:underline">News & Schedule</a></li>
              <li><a href="#members" className="hover:underline">Nine Members</a></li>
              <li><a href="/discography" className="hover:underline">Discography</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-white/70 mb-3">
              Sub-Units & Solos
            </h4>
            <ul className="space-y-2 text-sm font-body">
              <li><span className="text-white/90">MISAMO</span></li>
              <li><span className="text-white/90">Nayeon Solo</span></li>
              <li><span className="text-white/90">Jihyo Solo</span></li>
              <li><span className="text-white/90">Tzuyu Solo</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-white/70 mb-3">
              Official Colors
            </h4>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-5 h-5 rounded-full bg-[#FCCFA6] border border-white/40 shadow-sm" title="Apricot" />
              <span className="text-xs font-heading">Apricot (#FCCFA6)</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-5 h-5 rounded-full bg-[#FF337A] border border-white/40 shadow-sm" title="Neon Magenta" />
              <span className="text-xs font-heading">Neon Magenta (#FF337A)</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-white/70 mb-3">
              Community
            </h4>
            <p className="text-xs font-body text-white/90 leading-relaxed">
              Made with passion for ONCE worldwide. Celebrating TWICE's historic music and journey.
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between text-xs text-white/80 font-body gap-4">
          <p>© {new Date().getFullYear()} Twiceland. Unofficial Fan Project.</p>
          <p className="font-heading">TWICE & JYP Entertainment.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

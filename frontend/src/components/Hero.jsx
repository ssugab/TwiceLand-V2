import React from 'react'
import { assets } from '../assets/assets'

/**
 * Hero Component
 * 
 * Features:
 * 1. Full-bleed layout: Starts immediately at top: 0 behind the transparent fixed Navbar (just like previous version).
 * 2. Top vignette gradient: Ensures Navbar text and logo remain 100% visible against the photo.
 * 3. Bottom gradient bridge: Fades smoothly from Hero's base into Modern Dark Glass (#120E16) for LatestComeback.
 */
const Hero = () => {
  return (
      <section className='relative h-screen min-h-[600px] md:min-h-[700px] w-full p-2 sm:p-3 overflow-hidden bg-accent2/30'>

        {/* Background Frame with Rounded Glass Border */}
      <div className='relative h-full w-full rounded-3xl md:rounded-4xl overflow-hidden shadow-2xl border border-white/10'>

            {/* Full-bleed Hero Image starting right from top: 0 behind the Navbar */}
            <img
              src={assets.Hero}
              alt="TWICE Group Hero"
              className='h-full w-full object-cover object-center filter brightness-[0.85] contrast-[1.05]'
            />

            {/* Top Vignette Scrim: Guarantees transparent navbar readability over any photo */}
            <div className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-10 pointer-events-none' />

            {/* Readability Scrims: Dark gradient overlays so text is legible against photo */}
            <div className='absolute inset-0 bg-gradient-to-t from-matteblack via-matteblack/30 to-transparent' />
            <div className='absolute inset-0 bg-gradient-to-r from-matteblack/70 via-transparent to-matteblack/20' />

            {/* Text Content */}
            <div className='absolute z-10 bottom-24 sm:bottom-28 md:bottom-24 left-6 sm:left-10 md:left-16 max-w-3xl pr-4'>
              {/* Official Fan Hub Status Pill */}
              <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3'>
                <span className='w-2 h-2 rounded-full bg-accent animate-pulse' />
                <span className='text-xs md:text-sm font-heading tracking-wider uppercase text-offwhite'>
                  Official Fan Hub
                </span>
              </div>

              <h2 className='text-base sm:text-lg md:text-2xl font-heading text-accent2 tracking-wide'>
                Welcome To
              </h2>

              {/* TWICE Animated Gradient Title */}
                    < h1 
            className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-title leading-none bg-clip-text text-transparent inline-block pr-4 animate-gradient-vibrant drop-shadow-[0_4px_16px_rgba(255,95,162,0.3)]' 
            style={{ 
              backgroundImage: "var(--gradient-twice)",
              backgroundSize: "200% 200%" 
            }}
          >
              TWICELAND
            </h1>

            <p className='mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-offwhite/80 font-body max-w-xl leading-relaxed'>
              The ultimate destination for ONCE. Explore albums, stream latest comebacks, and connect with TWICE.
            </p>
          </div>

          {/* Tactile Scroll Pill Button */}
          <div className='absolute z-10 bottom-6 left-1/2 -translate-x-1/2'>
            <a
              href="#latest-comeback"
              className="group flex items-center gap-2 px-6 py-2.5 text-sm md:text-base font-heading text-offwhite bg-white/10 hover:bg-accent/80 border border-white/20 hover:border-accent backdrop-blur-md rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_24px_rgba(255,95,162,0.45)] transition-all duration-300"
            >
              <span>Take a Look</span>
              <span className='group-hover:translate-y-1 transition-transform duration-200 text-accent2 group-hover:text-offwhite'>
                ↓
              </span>
            </a>
          </div>
        </div>

        {/* Seamless Transition Bridge: Fading from Hero's base into Modern Dark Glass (#120E16) */}
        <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-matteblack pointer-events-none' />
      </section>
      )
}

      export default Hero

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
      <div className='relative h-full w-full rounded-3xl md:rounded-4xl overflow-hidden border border-white/10'> {/* shadow-2xl */}

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

        {/*
         * Bookmark Button — Opsi A: Classic V-notch Horizontal Shape
         *
         * Bentuk bookmark buku horizontal menggunakan CSS clip-path:
         *   polygon(0% 0%, 100% 0%, 100% 65%, 50% 100%, 0% 65%)
         *
         *   (0,0) ──────────────────────── (100,0)
         *     │                                 │
         *     │     ↓   Take a Look             │  ← text area (0% - 65%)
         *     │                                 │
         *   (0,65%)                       (100,65%)
         *            \                   /
         *             \                 /
         *              \               /         ← V-notch area (65% - 100%)
         *               \             /
         *                (50%, 100%)  ← titik runcing bawah
         *
         * padding-bottom: ekstra besar untuk memberi ruang area notch
         * agar teks tidak bertabrakan dengan potongan clip-path.
         */}
        <div className='absolute z-10 bottom-4 left-1/2 -translate-x-1/2'>
          <a
            href="#latest-comeback"
            className="group relative inline-flex items-center justify-center gap-2.5 font-heading text-sm uppercase tracking-widest font-bold text-matteblack bg-accent2 hover:bg-white transition-all duration-300 shadow-[0_6px_28px_rgba(252,207,166,0.4)] hover:shadow-[0_0_32px_rgba(252,207,166,0.65)] active:scale-95"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 62%, 50% 100%, 0% 62%)',
              padding: '0.75rem 2rem 2.25rem 2rem',
            }}
          >
            {/* Animated arrow — bounces gently on hover */}
            <span className="text-matteblack/80 group-hover:text-matteblack transition-all duration-300 group-hover:translate-y-1 inline-block font-body text-base">
              ↓
            </span>
            <span>Take a Look</span>
          </a>
        </div>
      </div>

      {/* Seamless Transition Bridge: Fading from Hero's base into Modern Dark Glass (#120E16)
          Multi-stop gradient + extended height untuk transisi organik tanpa garis patah 
        <div
          className='absolute bottom-0 left-0 right-0 pointer-events-none'
          style={{
            height: '12rem',
            background: 'linear-gradient(to bottom, transparent 0%, transparent 15%, rgba(18,14,22,0.5) 50%, #120E16 85%, #120E16 100%)'
          }}
        /> */}
    </section>
  )
}

export default Hero

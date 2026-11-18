import React from "react"
import { motion } from "framer-motion"
import { assets } from "../assets/assets"

/**
 * LatestComeback Component
 * 
 * Performance & Style Notes:
 * 1. Background uses lightweight CSS radial gradients instead of heavy blur-[140px] divs,
 *    keeping mobile scrolling at a solid 60fps.
 * 2. Seamless Transition: Starts in Modern Dark Glass (#120E16) and ends with a smooth
 *    fade into Warm Apricot Atmosphere (#251614) for LatestUpdates.
 */
const LatestComeback = () => {
  return (
    <section
      id="latest-comeback"
      className="relative pt-20 pb-28 px-4 sm:px-6 md:px-12 bg-matteblack overflow-hidden"
    >
      {/* GPU-efficient ambient glows: uses opacity and transform, avoiding heavy blur filters */}
      <div
        className="absolute top-1/4 -left-32 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,95,162,0.18) 0%, rgba(18,14,22,0) 70%)'
        }}
      />
      < div
        className="absolute bottom-12 -right-32 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(252,207,166,0.14) 0%, rgba(18,14,22,0) 70%)'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-[2px] bg-accent" />
          <h2 className="text-xs md:text-sm font-heading tracking-widest uppercase text-accent">
            Current Era
          </h2>
        </motion.div>

        {/* Modern Dark Glass Showcase Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-md shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">

            {/* Left Column: Media with subtle scale on hover */}
            <div className="relative lg:col-span-7 h-72 sm:h-96 lg:h-auto overflow-hidden">
              <motion.img
                src={assets.cb}
                alt="TWICE Latest Comeback"
                loading="lazy"
                className="w-full h-full object-cover object-center filter brightness-[0.9]"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matteblack/90 via-matteblack/30 lg:bg-gradient-to-r lg:from-transparent lg:to-matteblack/90 pointer-events-none" />

              <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-matteblack/60 backdrop-blur-md border border-white/15 text-xs font-heading text-accent2 uppercase tracking-wider">
                Special Release
              </div>
            </div>

            {/* Right Column: Album Details & Actions */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs sm:text-sm font-heading text-accent2 uppercase tracking-widest block mb-2">
                  TWICE 4th Full Album
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-title text-offwhite leading-none mb-4">
                  THIS IS FOR
                </h1>

                <p className="text-offwhite/70 font-body text-sm sm:text-base leading-relaxed mb-6">
                  Experience the powerful vocals, dynamic choreography, and unforgettable melodies from TWICE's latest worldwide chapter.
                </p>

                {/* Primary Stream Button with high contrast & tactile spring */}
                <motion.a
                  href="https://open.spotify.com/artist/7n2YcHowBYUVWzKQ4b3CJ7"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 font-heading text-sm md:text-base rounded-xl text-matteblack bg-accent2 hover:bg-white shadow-[0_4px_20px_rgba(252,207,166,0.3)] hover:shadow-[0_0_25px_rgba(252,207,166,0.5)] transition-colors duration-300"
                >
                  <span>STREAM THE ALBUM NOW</span>
                  <span className="text-base">↗</span>
                </motion.a>
              </div>

              {/* YouTube Video Preview Card */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs font-heading text-offwhite/60 uppercase tracking-wider mb-3">
                  Featured Music Video
                </p>
                <motion.a
                  href="https://www.youtube.com/@TWICE"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="group flex items-center gap-4 p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-accent/40 transition-colors duration-300"
                >
                  <div className="relative w-20 h-14 rounded-lg bg-matteblack/80 overflow-hidden flex-shrink-0 flex items-center justify-center border border-white/10">
                    <span className="w-8 h-8 rounded-full bg-accent/90 flex items-center justify-center text-white text-xs pl-0.5 group-hover:scale-110 transition-transform">
                      ▶
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-heading text-offwhite group-hover:text-accent transition-colors">
                      Watch on YouTube
                    </h4>
                    <p className="text-xs text-offwhite/50 font-body">
                      Official M/V & behind the scenes
                    </p>
                  </div>
                </motion.a>
              </div>

            </div>

          </div>
        </motion.div >
      </div >

      {/* Seamless Transition Bridge: Fading from Dark Glass into Warm Apricot Atmosphere (#251614) */}
      < div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #251614 100%)'
        }}
      />
    </section >
  )
}

export default LatestComeback

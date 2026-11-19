import React from "react"
import { motion } from "framer-motion"
import { assets } from "../assets/assets"

const LatestComeback = () => {
  return (
    <section
      id="latest-comeback"
      className="relative py-16 px-4 sm:px-6 md:px-12 bg-matteblack overflow-hidden"
    >
      {/* Decorative ambient background glows with subtle floating animation */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.22, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-accent rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.10, 0.18, 0.10]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 -right-32 w-96 h-96 bg-accent2 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto">
        {/* Section Header with Stagger Reveal */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-[2px] bg-accent" />
          <h2 className="text-xs md:text-sm font-heading tracking-widest uppercase text-accent">
            LATEST COMEBACK
          </h2>
        </motion.div>

        {/* Modern Dark Glass Showcase Container with Viewport Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">

            {/* Left Column: Media / Album Artwork with Smooth Depth Reveal */}
            <div className="relative lg:col-span-7 h-72 sm:h-96 lg:h-auto overflow-hidden">
              <motion.img
                src={assets.cb}                   //DB latest CB Image
                alt="TWICE Latest Comeback"
                className="w-full h-full object-cover object-center filter brightness-[0.9]"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matteblack/90 via-matteblack/30 lg:bg-gradient-to-r lg:from-transparent lg:to-matteblack/50 pointer-events-none" />

              {/* Badge Overlay with Motion Fade */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-matteblack/60 backdrop-blur-md border border-white/15 text-xs font-heading text-accent2 uppercase tracking-wider"
              >
                Special Release       {/* YEAR OF RELEASE */}
              </motion.div>
            </div>

            {/* Right Column: Album Details & Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs sm:text-sm font-heading text-accent2 uppercase tracking-widest block mb-2">
                  TWICE 4th Full Album {/* DB ALBUM NAME */}
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-title text-offwhite leading-none mb-4">
                  THIS IS FOR   {/* DB ALBUM TITLE */}
                </h1>

                <p className="text-offwhite/70 font-body text-sm sm:text-base leading-relaxed mb-6">
                  Experience the powerful vocals, dynamic choreography, and unforgettable melodies from TWICE's latest worldwide chapter.  {/* DB ALBUM DESCRIPTION */}
                </p>

                {/* Primary Stream Button with Tactile Motion Feedback */}
                <motion.a
                  href="https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0?si=z18G5tgHR6yixKlt_QmL_g"
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

              {/* Polished Video Preview Card with Motion Spring on Hover */}
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

            </motion.div>

          </div>
        </motion.div >
      </div >
    </section >
  )
}

export default LatestComeback

import React from "react"
import { motion } from "framer-motion"
import { assets } from "../assets/assets"

const LatestComeback = ({title, thumbnail}) => {
  
  return (
    <section
      id="latest-comeback"
      className="relative bg-pink p-4 md:p-8 overflow-hidden"
    >
      <div className="relative w-full h-full rounded-bl-none rounded-tr-none rounded-4xl overflow-hidden">

        <motion.div
          className="absolute top-0 left-0 right-0 h-1/3 bg-accent z-0"
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
            {/* Animate when user scroll to this tab */}
          <img src={assets.cb} alt="" className=" relative w-full h-full object-cover rounded-4xl rounded-tr-none rounded-bl-none rounded-b-none z-10 animate-content-shift"/>
          <div className="absolute inset-0 bg-black/30 rounded-4xl rounded-tr-none  z-20 animate-content-shift"></div>
        
          <div className="absolute inset-0 z-30 flex flex-col justify-start p-8 text-left pt-20">
            <h1 className="text-7xl md:text-9xl font-bold text-offwhite leading-tight">
              THIS IS <br /> FOR
            </h1>
            {/* Add link to streaming platform */}
            <a
              href="#" 
              className="mt-4 w-2/6 inline-block bg-accent text-offwhite px-6 py-3 font-display-bold rounded-md shadow-lg hover:bg-accent2 hover:text-matteblack transition"
            >
              STREAM TWICE 4TH FULL ALBUM NOW !
            </a>

            <div className="mt-6 w-94 bg-gray-300 h-48 flex items-center justify-center text-black font-bold rounded-xl">
              YOUTUBE THUMBNAIL
            </div>
          </div>

      </div>
    </section>
  )
}

export default LatestComeback

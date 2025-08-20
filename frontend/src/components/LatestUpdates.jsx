import React from "react"
import { assets } from "../assets/assets"

const LatestComeback = () => {
  return (
    <section
      id="latest-comeback"
      className="relative bg-pink p-4 md:p-8 rounded-3xl overflow-hidden"
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-accent rounded-3xl animate-rise z-0 "></div>

        <img src={assets.cb} alt="" className="w-full h-full object-cover rounded-3xl relative z-10 animate-content-shift rounded-b-none"/>
        <div className="absolute inset-0 bg-black/30 rounded-3xl z-20 animate-content-shift"></div>

          <div className="absolute inset-0 z-30 flex flex-col justify-center p-6 text-left animate-content-shift">
            <h1 className="text-7xl md:text-9xl font-bold text-offwhite leading-tight">
              THIS IS <br /> FOR
            </h1>
            <a
              href="#"
              className="mt-4 w-2/6 inline-block bg-accent text-offwhite px-6 py-3 font-display-bold rounded-full shadow-lg hover:bg-fuchsia-600 transition"
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

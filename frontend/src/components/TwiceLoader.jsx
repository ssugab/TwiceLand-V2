import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const TwiceLoader = ({
    text = "Loading...",
    fullScreen = false,
    minHeight = "min-h-[400px]"
}) => {
    const containerClasses = fullScreen
        ? "fixed inset-0 z-50 bg-matteblack flex flex-col items-center justify-center"
        : `relative w-full ${minHeight} flex flex-col items-center justify-center overflow-hidden`;

    return (
        <div className={containerClasses}>
            {/* Glow Ambient */}
            <div
                className="absolute w-56 h-56 rounded-full blur-[80px] opacity-20 pointer-events-none animate-pulse"
                style={{
                    background: 'radial-gradient(circle, #FF337A 0%, #FCCFA6 100%)'
                }}
            />

            <div className="relative flex items-center justify-center w-24 h-24 mb-4">
                {/* Ring Neon Magenta - Apricot Berputar */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full p-[2.5px] shadow-[0_0_20px_rgba(255,51,122,0.3)]"
                    style={{
                        background: 'conic-gradient(from 0deg, #FF337A, #FCCFA6, transparent 70%, #FF337A)',
                        WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2.5px), black calc(100% - 2px))',
                        mask: 'radial-gradient(farthest-side, transparent calc(100% - 2.5px), black calc(100% - 2px))',
                    }}
                />

                {/* Logo TWICE Pulsing */}
                <motion.div
                    animate={{ scale: [0.95, 1.05, 0.95] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-matteblack/80 backdrop-blur-md border border-white/10"
                >
                    <img
                        src={assets.Twicelogo}
                        alt="TWICE"
                        className="w-8 h-8 object-contain filter drop-shadow-[0_0_8px_rgba(255,51,122,0.5)]"
                    />
                </motion.div>
            </div>

            <motion.p
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="text-xs font-heading uppercase tracking-widest font-bold bg-clip-text text-transparent"
                style={{
                    backgroundImage: 'linear-gradient(90deg, #FF337A, #FCCFA6, #FF337A)',
                    backgroundSize: '200% 100%',
                }}
            >
                {text}
            </motion.p>
            <span className="text-[9px] font-heading tracking-widest text-offwhite/40 uppercase mt-1">
                One In A Million
            </span>
        </div>
    );
};

export default TwiceLoader;
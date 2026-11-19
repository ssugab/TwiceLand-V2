import React, { useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "motion/react"
import { assets } from "../assets/assets"
import { AnimatedFlow } from "./lightswind/animated-flow"

/**
 * LatestComeback Component
 *
 * Features:
 * 1. Scroll-driven Pull-Up: Section keseluruhan bergerak "tertarik ke atas"
 *    saat user scroll dari Hero — menggunakan useScroll + useSpring (Sedang: 100px).
 * 2. Parallax WebGL Background: Canvas AnimatedFlow bergerak lebih lambat dari konten
 *    (faktor 0.25), memberikan efek kedalaman visual (dari implementasi sebelumnya).
 * 3. Spring Physics: useSpring membuat gerakan pull-up terasa elastis/fisik, bukan robotic.
 * 4. Opacity Fade: Section fade-in dari 0.6 → 1.0 seiring scroll.
 * 5. Auto-pause WebGL saat di luar viewport (hemat GPU).
 * 6. Parallax dinonaktifkan di mobile (<768px) & prefers-reduced-motion.
 */
const LatestComeback = () => {
  // Palet fluida WebGL khusus era Latest Comeback
  const TWICE_COMEBACK_PALETTE = [
    "#120e16", // 1. Deep Obsidian Base
    "#260b1b", // 2. Dark Magenta Vignette
    "#ff337a", // 3. TWICE Neon Magenta Accent
    "#fccfa6", // 4. TWICE Apricot Highlight
    "#000000", // 5. Deep Space Black
  ];

  // ─── SCROLL-DRIVEN PULL-UP ──────────────────────────────────────────────────
  // useScroll melacak posisi scroll window secara global
  const { scrollY } = useScroll();

  // Map scrollY → Y offset section:
  //   scrollY = 0px          → section 100px lebih rendah dari posisi normal
  //   scrollY = 60% viewport → section di posisi normal (y = 0)
  // Menggunakan nilai aman: 600 ≈ 60% dari viewport 1000px
  const rawY = useTransform(scrollY, [0, 600], [100, 0]);

  // useSpring: konversi linear motion value ke gerakan elastis fisik
  // stiffness rendah + damping sedang = gerakan smooth & terasa "tertarik"
  const y = useSpring(rawY, {
    stiffness: 80,  // kelenturan per: nilai rendah = lebih "kenyal"
    damping: 20,    // redaman: nilai sedang = sedikit overshoot ringan
    mass: 0.8,      // inersia: sedikit lebih ringan dari default
  });

  // Opacity terikat scroll: 0.6 saat di atas → 1.0 saat section masuk view
  const opacity = useTransform(scrollY, [0, 300], [0.6, 1]);

  // ─── PARALLAX BACKGROUND ────────────────────────────────────────────────────
  const sectionRef = useRef(null);
  const parallaxLayerRef = useRef(null);

  const PARALLAX_FACTOR = 0.25; // Sedang: background bergeser 25% dari kecepatan scroll
  const PARALLAX_CLAMP = 100;   // Batas maksimum geser (px)

  useEffect(() => {
    // Nonaktifkan parallax di mobile (<768px) atau reduced-motion preference
    const mq = window.matchMedia(
      "(prefers-reduced-motion: reduce), (max-width: 767px)"
    );
    if (mq.matches) return;

    const section = sectionRef.current;
    const layer = parallaxLayerRef.current;
    if (!section || !layer) return;

    let rafId = null;

    const updateParallax = () => {
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const rawOffset = (viewportCenter - sectionCenter) * PARALLAX_FACTOR;
      const clamped = Math.max(-PARALLAX_CLAMP, Math.min(PARALLAX_CLAMP, rawOffset));
      layer.style.transform = `translateY(${clamped.toFixed(2)}px)`;
    };

    const onScroll = () => {
      // Throttle via rAF — 1 render per frame, tidak lebih
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        updateParallax();
        rafId = null;
      });
    };

    updateParallax(); // posisi awal
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    // motion.section: section bergerak dengan spring physics (pull-up + fade-in)
    <motion.section
      id="latest-comeback"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ y, opacity }}
    >
      {/*
       * PARALLAX BACKGROUND LAYER
       * - Oversized atas-bawah (top/bottom: -10%) agar canvas tidak terekspos saat
       *   section bergeser akibat pull-up + parallax background secara bersamaan
       * - will-change: transform → GPU compositing layer terpisah, smooth tanpa jank
       */}
      <div
        ref={parallaxLayerRef}
        className="absolute inset-x-0 will-change-transform"
        style={{ top: "-10%", bottom: "-10%" }}
      >
        <AnimatedFlow
          colors={TWICE_COMEBACK_PALETTE}
          flowSpeed={0.85}
          distortionWarp={2.4}
          filmGrain={0.25}
          zoomScale={1.2}
          interactive={true}
          className="w-full h-full bg-matteblack"
        />
      </div>

      {/*
       * CONTENT LAYER
       * - position: relative z-10 → scroll normal, di atas background parallax
       * - Seluruh konten section berada di sini
       */}
      <div className="relative z-10 pt-24 pb-32 px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto">

          {/* Section Header with Stagger Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-[2px] bg-accent2" />
            <h2 className="text-xs md:text-sm font-heading tracking-widest uppercase text-accent2 font-bold">
              LATEST COMEBACK
            </h2>
          </motion.div>

          {/* Modern Dark Glass Showcase Container with Viewport Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative rounded-3xl overflow-hidden bg-white/[0.06] hover:bg-white/[0.08] border border-white/20 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">

              {/* Left Column: Media / Album Artwork with Depth */}
              <div className="relative lg:col-span-7 h-72 sm:h-96 lg:h-auto overflow-hidden">
                <motion.img
                  src={assets.cb}
                  alt="TWICE Latest Comeback"
                  loading="lazy"
                  className="w-full h-full object-cover object-center filter brightness-[0.92]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matteblack/90 via-matteblack/30 lg:bg-gradient-to-r lg:from-transparent lg:to-matteblack/90 pointer-events-none" />
              </div>

              {/* Right Column: Album Details & Actions */}
              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs sm:text-sm font-heading text-accent2 uppercase tracking-widest block mb-2 font-bold">
                    TWICE 13th Mini Album
                  </span>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-title text-offwhite leading-none mb-4">
                    The Story Goes On
                  </h1>

                  <p className="text-offwhite/80 font-body text-sm sm:text-base leading-relaxed mb-6">
                    Experience the powerful vocals, dynamic choreography, and unforgettable melodies from TWICE's latest worldwide chapter.
                  </p>

                  {/* Primary Stream Button with high contrast */}
                  <motion.a
                    href="https://open.spotify.com/artist/7n2YcHowBYUVWzKQ4b3CJ7"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 font-heading text-sm md:text-base rounded-xl text-matteblack bg-accent2 hover:bg-white shadow-[0_4px_20px_rgba(252,207,166,0.3)] hover:shadow-[0_0_25px_rgba(252,207,166,0.5)] transition-all duration-300 font-bold"
                  >
                    <span>STREAM THE ALBUM NOW</span>
                    <span className="text-base">↗</span>
                  </motion.a>
                </div>

                {/* Polished Video Preview Card */}
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
                      <h4 className="text-sm font-heading text-offwhite group-hover:text-accent transition-colors font-bold">
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default LatestComeback;

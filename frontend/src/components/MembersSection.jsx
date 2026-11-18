import React, { useRef } from 'react'
import nayeonImg from '../assets/images/Members/Nayeon-TEN.jpg'
import jeongyeonImg from '../assets/images/Members/JY-TEN.jpg'
import momoImg from '../assets/images/Members/Momo-TEN.jpg'
import sanaImg from '../assets/images/Members/Sana-TEN.jpg'
import jihyoImg from '../assets/images/Members/Jihyo-TEN.jpg'
import minaImg from '../assets/images/Members/Mina-TEN.jpg'
import dahyunImg from '../assets/images/Members/Dahyun-TEN.jpg'
import chaeyoungImg from '../assets/images/Members/Chaeyoung-TEN.jpg'
import tzuyuImg from '../assets/images/Members/Tzuyu-TEN.jpg'

/**
 * 9 TWICE Members Data:
 * Now linked to individual lightweight member photos from `assets/images/Members/`
 * (~150KB each instead of multi-megabyte shared photos).
 */
const membersData = [
  {
    name: 'Nayeon',
    hangul: '나연',
    role: 'Lead Vocalist, Lead Dancer, Center',
    colorHex: '#81D4FA',
    colorName: 'Sky Blue',
    image: nayeonImg,
    description: 'The bright and charismatic eldest member known for her energetic vocals, signature smile, and iconic solo anthems.'
  },
  {
    name: 'Jeongyeon',
    hangul: '정연',
    role: 'Lead Vocalist',
    colorHex: '#C5E1A5',
    colorName: 'Yellow Green',
    image: jeongyeonImg,
    description: 'Recognized for her rock-solid live vocal stability, chic visual charm, and protective sisterly presence in TWICE.'
  },
  {
    name: 'Momo',
    hangul: '모모',
    role: 'Main Dancer, Sub Vocalist, Sub Rapper',
    colorHex: '#FF80AB',
    colorName: 'Pink',
    image: momoImg,
    description: 'TWICE’s renowned dance machine celebrated for razor-sharp choreography, fluid precision, and MISAMO power.'
  },
  {
    name: 'Sana',
    hangul: '사나',
    role: 'Sub Vocalist',
    colorHex: '#B085F5',
    colorName: 'Purple',
    image: sanaImg,
    description: 'Captivating, bubbly, and charismatic with viral trendsetting lines and alluring stage expressions.'
  },
  {
    name: 'Jihyo',
    hangul: '지효',
    role: 'Leader, Main Vocalist',
    colorHex: '#FFB74D',
    colorName: 'Apricot',
    image: jihyoImg,
    description: 'The passionate leader and anchor with powerhouse soulful vocals, ten-year trainee discipline, and commanding presence.'
  },
  {
    name: 'Mina',
    hangul: '미나',
    role: 'Main Dancer, Sub Vocalist',
    colorHex: '#80CBC4',
    colorName: 'Mint',
    image: minaImg,
    description: 'The elegant black swan of TWICE, combining 11 years of ballet training with a calm, enchanting vocal timbre.'
  },
  {
    name: 'Dahyun',
    hangul: '다현',
    role: 'Lead Rapper, Sub Vocalist',
    colorHex: '#FFFFFF',
    colorName: 'White',
    image: dahyunImg,
    description: 'Known for her wit, variety charisma, crisp rap rhythm, eagle-eyed fan engagement, and heartfelt songwriting.'
  },
  {
    name: 'Chaeyoung',
    hangul: '채영',
    role: 'Main Rapper, Sub Vocalist',
    colorHex: '#E53935',
    colorName: 'Red',
    image: chaeyoungImg,
    description: 'Free-spirited artistic soul who writes verses, draws, designs album themes, and delivers distinctive hip-hop flair.'
  },
  {
    name: 'Tzuyu',
    hangul: '쯔위',
    role: 'Lead Dancer, Sub Vocalist, Visual, Maknae',
    colorHex: '#1E88E5',
    colorName: 'Blue',
    image: tzuyuImg,
    description: 'The beloved youngest member admired worldwide for statuesque grace, soothing vocals, and her solo record "abouTZU".'
  }
]

/**
 * MembersSection Component
 * 
 * Features:
 * 1. Base: Modern Dark Glass (#120E16) smoothly connecting from Solid Apricot.
 * 2. High-performance Sliding Gallery with smooth swipe/drag and arrow navigation.
 * 3. Individual member portrait loading with `loading="lazy"`.
 * 4. Bottom transition: Fades smoothly from Dark Glass (#120E16) into SOLID MODERN MAGENTA (#FF337A)
 *    for the Showcase/Footer!
 */
const MembersSection = () => {
  const scrollContainerRef = useRef(null)

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative pt-24 pb-32 px-4 sm:px-6 md:px-12 bg-matteblack overflow-hidden">
      {/* Subtle GPU-efficient ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,95,162,0.12) 0%, rgba(18,14,22,0) 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header with Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-xs md:text-sm font-heading tracking-widest uppercase text-accent">
                The Nine Members
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-offwhite">
              Meet TWICE
            </h2>
            <p className="mt-2 text-sm sm:text-base text-offwhite/60 font-body max-w-lg">
              Nine unique personalities, voices, and talents united as one global phenomenon.
            </p>
          </div>

          {/* Navigation Arrows for Sliding Gallery */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={() => handleScroll('left')}
              aria-label="Scroll members left"
              className="w-12 h-12 rounded-full bg-white/[0.05] hover:bg-accent border border-white/15 hover:border-accent text-offwhite flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(255,95,162,0.5)] cursor-pointer"
            >
              ←
            </button>
            <button
              onClick={() => handleScroll('right')}
              aria-label="Scroll members right"
              className="w-12 h-12 rounded-full bg-white/[0.05] hover:bg-accent border border-white/15 hover:border-accent text-offwhite flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(255,95,162,0.5)] cursor-pointer"
            >
              →
            </button>
          </div>
        </div>

        {/* Sliding Gallery Scroll Track (Touch Swipe + Smooth Scroll) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {membersData.map((member, index) => (
            <div
              key={member.name}
              className="snap-start shrink-0 w-[290px] sm:w-[330px] rounded-3xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-accent/40 backdrop-blur-md overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              {/* Member Visual Box */}
              <div className="relative h-80 w-full overflow-hidden bg-white/5">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top filter brightness-[0.9] group-hover:scale-105 group-hover:brightness-100 transition-all duration-500 ease-out"
                />

                {/* Gradient Scrim for crisp readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-matteblack via-transparent to-transparent pointer-events-none" />

                {/* Number Badge */}
                <span className="absolute top-4 left-4 text-xs font-heading px-3 py-1 rounded-full bg-matteblack/70 backdrop-blur-md border border-white/10 text-offwhite/90">
                  #{String(index + 1).padStart(2, '0')}
                </span>

                {/* Official Member Color Pill */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-matteblack/70 backdrop-blur-md border border-white/15">
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-black/30"
                    style={{ backgroundColor: member.colorHex }}
                  />
                  <span className="text-[10px] font-heading text-offwhite/90 uppercase">
                    {member.colorName}
                  </span>
                </div>

                {/* Hangul Accent Overlay */}
                <div className="absolute bottom-2 right-4 text-4xl font-title text-white/15 select-none pointer-events-none">
                  {member.hangul}
                </div>
              </div>

              {/* Card Details */}
              < div className="p-6 flex-1 flex flex-col justify-between" >
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-2xl font-title text-offwhite group-hover:text-accent transition-colors">
                      {member.name}
                    </h3>
                    <span className="text-sm font-heading text-accent2">
                      {member.hangul}
                    </span>
                  </div>

                  <p className="text-xs font-heading text-accent2/90 mb-3 tracking-wide">
                    {member.role}
                  </p>

                  <p className="text-xs sm:text-sm text-offwhite/70 font-body leading-relaxed line-clamp-3">
                    {member.description}
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-heading">
                  <span className="text-offwhite/40 uppercase tracking-wider">
                    Twice Profile
                  </span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform duration-200">
                    Explore →
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Swipe Hint for Mobile Viewports */}
        <p className="text-center text-xs font-body text-offwhite/40 mt-2 block sm:hidden">
          ← Swipe to meet all members →
        </p>

      </div >

      {/* Seamless Transition Bridge: Fading from Dark Glass (#120E16) directly into SOLID MODERN MAGENTA (#FF337A) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #FF337A 100%)'
        }}
      />
    </section >
  )
}

export default MembersSection

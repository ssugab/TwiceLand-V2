import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import rtbImage from '../assets/images/RTB.jpg';
import twiceBetweenImage from '../assets/images/twice-betweenjpg.jpg';
import misamoImage from '../assets/images/misamo.png';
import concertImage from '../assets/images/220425-TWICE-4TH-WORLD-TOUR-III-IN-JAPAN-Press-Photos-documents-7.jpeg';

/**
 * Updates Data:
 * Structured with explicit `year`, `month`, and `member` fields to enable
 * multi-dimensional filtering. Ready for future PostgreSQL mapping.
 */
const mockUpdates = [
  {
    id: 1,
    image: rtbImage,
    category: 'World Tour',
    year: '2024',
    month: 'August',
    member: 'Group',
    date: 'August 24, 2024',
    title: 'TWICE Announces World Tour "READY TO BE"',
    excerpt: 'The global stadium tour kicks off, bringing unforgettable stage performances across Asia, North America, and Europe.'
  },
  {
    id: 2,
    image: misamoImage,
    category: 'Sub-Unit',
    year: '2024',
    month: 'August',
    member: 'MISAMO',
    date: 'August 12, 2024',
    title: 'Mina, Sana, and Momo Make Historic Debut as "MISAMO"',
    excerpt: 'The Japanese sub-unit unleashes their first mini-album "Masterpiece", immediately topping physical and streaming charts.'
  },
  {
    id: 3,
    image: twiceBetweenImage,
    category: 'Release',
    year: '2024',
    month: 'July',
    member: 'Group',
    date: 'July 26, 2024',
    title: 'New Mini Album "BETWEEN 1&2" Hits #1 on Global Charts',
    excerpt: 'The record-breaking release showcases a mature musical evolution and received widespread critical acclaim.'
  },
  {
    id: 4,
    image: concertImage,
    category: 'Concert Encore',
    year: '2024',
    month: 'July',
    member: 'Group',
    date: 'July 15, 2024',
    title: 'Historic Special Stadium Encore Announced in Tokyo & Osaka',
    excerpt: 'TWICE becomes the first foreign female group to headline major stadium encore stages in consecutive sellout shows.'
  },
  {
    id: 5,
    image: rtbImage,
    category: 'Solo Project',
    year: '2024',
    month: 'September',
    member: 'Tzuyu',
    date: 'September 6, 2024',
    title: 'Tzuyu Announces Solo Debut Mini Album "abouTZU"',
    excerpt: 'The maknae steps into the spotlight with an alluring conceptual teaser, displaying vocal versatility and elegance.'
  },
  {
    id: 6,
    image: misamoImage,
    category: 'Fashion & Media',
    year: '2024',
    month: 'September',
    member: 'Sana',
    date: 'September 18, 2024',
    title: 'Sana Named Global Ambassador for Luxury Brand Campaigns',
    excerpt: 'Sana attends Milan Fashion Week, generating global trending topics and headlining international fashion editorials.'
  },
  {
    id: 7,
    image: twiceBetweenImage,
    category: 'Milestone',
    year: '2023',
    month: 'October',
    member: 'Group',
    date: 'October 20, 2023',
    title: 'TWICE Celebrates 8th Anniversary with Special ONCE Fan Meeting',
    excerpt: 'An unforgettable evening of acoustic stages, heartwarming games, and deep gratitude shared between TWICE and fans worldwide.'
  },
  {
    id: 8,
    image: concertImage,
    category: 'Solo Debut',
    year: '2023',
    month: 'August',
    member: 'Jihyo',
    date: 'August 18, 2023',
    title: 'Jihyo Releases Debut Solo Album "ZONE" and Title Track "Killin\' Me Good"',
    excerpt: 'Leader Jihyo proves her artistic range and vocal powerhouse capabilities with her highly praised first solo mini album.'
  }
];

/**
 * LatestUpdates Component
 * 
 * Features:
 * 1. SOLID MODERN APRICOT BACKGROUND: Strictly NO dark glass panels in this section.
 * 2. Crisp porcelain-white news cards with deep matte typography and warm drop-shadows.
 * 3. High-contrast multi-level filter controls (Year -> Month -> Member).
 * 4. Smooth gradient bridges connecting:
 *    LatestComeback (#120E16) -> Solid Apricot (#FF9A6C) -> MembersSection (#120E16).
 */
const LatestUpdates = () => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [selectedMember, setSelectedMember] = useState('All');

  // Dynamically extract unique years (Junior Best Practice: derived state)
  const availableYears = useMemo(() => {
    return ['All', ...new Set(mockUpdates.map((item) => item.year))];
  }, []);

  // Dynamically extract unique months based on the selected year
  const availableMonths = useMemo(() => {
    const list = selectedYear === 'All'
      ? mockUpdates
      : mockUpdates.filter(item => item.year === selectedYear);
    return ['All', ...new Set(list.map((item) => item.month))];
  }, [selectedYear]);

  // Dynamically extract unique member tags
  const availableMembers = useMemo(() => {
    return ['All', ...new Set(mockUpdates.map((item) => item.member))];
  }, []);

  // Compound multi-level filter
  const filteredUpdates = useMemo(() => {
    return mockUpdates.filter((update) => {
      const matchYear = selectedYear === 'All' || update.year === selectedYear;
      const matchMonth = selectedMonth === 'All' || update.month === selectedMonth;
      const matchMember = selectedMember === 'All' || update.member === selectedMember;
      return matchYear && matchMonth && matchMember;
    });
  }, [selectedYear, selectedMonth, selectedMember]);

  return (
    <section
      className="relative pt-24 pb-32 px-4 sm:px-6 md:px-12 overflow-hidden"
      style={{ backgroundColor: '#FF9A6C' }} // Solid Modern Apricot Background (NO dark glass)
    >
      {/* Top Gradient Bridge: Fading in from Modern Dark Glass (#120E16) to Solid Apricot */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #120E16 0%, transparent 100%)'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-4 border-b border-black/15">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[3px] bg-matteblack" />
              <span className="text-xs md:text-sm font-heading tracking-widest uppercase text-matteblack/80 font-bold">
                Timeline & Archives
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title text-matteblack">
              Latest Updates
            </h2>
            <p className="mt-2 text-sm sm:text-base text-matteblack/80 font-body">
              Filter by year, month, and member activities across TWICE's historic journey.
            </p>
          </div>

          {/* Year Filter Option Tabs (Solid High-Contrast Styling) */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-black/10 backdrop-blur-none border border-black/10 self-start md:self-auto">
            <span className="text-xs font-heading text-matteblack/80 px-2 uppercase tracking-wider font-bold">
              Year:
            </span>
            {availableYears.map((year) => {
              const isActive = selectedYear === year;
              return (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYear(year);
                    setSelectedMonth('All');
                  }}
                  className={`relative px-4 py-1.5 rounded-xl text-xs md:text-sm font-heading transition-colors duration-200 cursor-pointer ${isActive ? 'text-white font-bold' : 'text-matteblack/80 hover:text-matteblack'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeYearTab"
                      className="absolute inset-0 bg-matteblack rounded-xl shadow-md"
                      transition={{ type: 'spring', stiffness: 500, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{year}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Month Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs font-heading text-matteblack/70 uppercase tracking-wider mr-2 font-bold">
            Month:
          </span>
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-black/10 border border-black/10">
            {availableMonths.map((month) => {
              const isActive = selectedMonth === month;
              return (
                <button
                  key={month}
                  onClick={() => setSelectedMonth(month)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-heading transition-colors duration-200 cursor-pointer ${isActive ? 'text-white font-bold' : 'text-matteblack/80 hover:text-matteblack'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeMonthTab"
                      className="absolute inset-0 bg-matteblack rounded-lg shadow-sm"
                      transition={{ type: 'spring', stiffness: 500, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{month}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Member Filter Chips */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
          <span className="text-xs font-heading text-matteblack/70 uppercase tracking-wider mr-2 shrink-0 font-bold">
            Member:
          </span>
          {availableMembers.map((member) => (
            <button
              key={member}
              onClick={() => setSelectedMember(member)}
              className={`px-3.5 py-1 rounded-full text-xs font-heading transition-all duration-200 cursor-pointer shrink-0 border ${selectedMember === member
                  ? 'bg-matteblack text-white border-matteblack shadow-md'
                  : 'bg-white/40 text-matteblack border-black/10 hover:bg-white hover:text-matteblack'
                }`}
            >
              {member}
            </button>
          ))}
        </div>

        {/* Animated News Card Grid (Crisp Porcelain White Cards, High Contrast) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredUpdates.length > 0 ? (
              filteredUpdates.map((update) => (
                <motion.article
                  key={update.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: -20 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="group flex flex-col rounded-3xl bg-white text-matteblack shadow-[0_10px_30px_rgba(180,60,10,0.15)] hover:shadow-[0_16px_40px_rgba(180,60,10,0.25)] overflow-hidden transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Image Frame */}
                  <div className="relative h-52 w-full overflow-hidden bg-black/5">
                    <img
                      src={update.image}
                      alt={update.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Category & Member Tag */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-white text-matteblack text-[11px] font-heading font-bold uppercase tracking-wider shadow-sm">
                        {update.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-accent text-white text-[11px] font-heading font-bold uppercase tracking-wider shadow-sm">
                        {update.member}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs text-matteblack/50 font-body mb-2 block font-medium">
                        {update.date}
                      </span>
                      <h3 className="text-lg font-heading text-matteblack group-hover:text-accent transition-colors duration-200 mb-3 leading-snug font-bold">
                        {update.title}
                      </h3>
                      <p className="text-sm text-matteblack/80 font-body line-clamp-3 leading-relaxed mb-6">
                        {update.excerpt}
                      </p>
                    </div>

                    {/* Card Link */}
                    <div className="pt-4 border-t border-black/10">
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 text-xs font-heading text-matteblack group-hover:text-accent tracking-wider uppercase font-bold transition-colors"
                      >
                        <span>Read Article</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-16 text-center text-matteblack/70 font-body font-medium"
              >
                No updates found for this Year, Month, and Member filter.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Bottom Gradient Bridge: Fading smoothly from Solid Modern Apricot into Modern Dark Glass (#120E16) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #120E16 100%)'
        }}
      />
    </section>
  );
};

export default LatestUpdates;

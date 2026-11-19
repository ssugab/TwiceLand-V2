import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import rtbImage from '../assets/images/RTB.jpg';
import twiceBetweenImage from '../assets/images/twice-betweenjpg.jpg';
import misamoImage from '../assets/images/misamo.png';
import concertImage from '../assets/images/220425-TWICE-4TH-WORLD-TOUR-III-IN-JAPAN-Press-Photos-documents-7.jpeg';

/**
 * Updates Data:
 * Structured with explicit `year`, `month`, `day`, `weekday`, and `category` fields.
 * Disusun dengan format tanggal kalender yang terstruktur agar mudah di-parse dan di-render.
 */
const mockUpdates = [
  {
    id: 1,
    image: rtbImage,
    category: 'World Tour',
    year: '2024',
    month: 'August',
    day: '24',
    weekday: 'SAT',
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
    day: '12',
    weekday: 'MON',
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
    day: '26',
    weekday: 'FRI',
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
    day: '15',
    weekday: 'MON',
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
    day: '06',
    weekday: 'FRI',
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
    day: '18',
    weekday: 'WED',
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
    day: '20',
    weekday: 'FRI',
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
    day: '18',
    weekday: 'FRI',
    date: 'August 18, 2023',
    title: 'Jihyo Releases Debut Solo Album "ZONE" and Title Track "Killin\' Me Good"',
    excerpt: 'Leader Jihyo proves her artistic range and vocal powerhouse capabilities with her highly praised first solo mini album.'
  }
];

// Daftar bulan standar urutan kalender untuk tab navigasi kalender
const ALL_MONTHS = [
  'All', 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

/**
 * LatestUpdates Component
 * 
 * Konsep Redesign: "Calendar & Schedule Binder"
 * 1. Background Solid Modern Apricot (#FF9A6C) dengan estetika kalender editorial.
 * 2. Filter Tahun (Year) bergaya punch-card / pill tab yang elegan.
 * 3. Filter Bulan (Month) horizontal scrollable calendar track yang menandai bulan aktif.
 * 4. Filter Member DIHAPUS sesuai permintaan, fokus pada timeline kronologis kalender.
 * 5. Kartu-kartu event kalender dilengkapi Date Badge (Hari, Angka Tanggal, Jam/Kategori) mirip entri kalender Google/Apple Calendar.
 */
const LatestUpdates = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedMonth, setSelectedMonth] = useState('All');

  // BEST PRACTICE: Mengambil daftar tahun unik secara otomatis dari dataset (Dynamic Extraction)
  const availableYears = useMemo(() => {
    return ['All', ...new Set(mockUpdates.map((item) => item.year))];
  }, []);

  // BEST PRACTICE: Hanya menampilkan bulan yang ada datanya atau seluruh bulan kalender
  const activeMonthsInYear = useMemo(() => {
    if (selectedYear === 'All') {
      return ['All', ...new Set(mockUpdates.map((item) => item.month))];
    }
    const monthsWithData = new Set(
      mockUpdates.filter((item) => item.year === selectedYear).map((item) => item.month)
    );
    // Tampilkan 'All' ditambah bulan-bulan yang memiliki event pada tahun terpilih
    return ['All', ...ALL_MONTHS.filter((m) => m !== 'All' && monthsWithData.has(m))];
  }, [selectedYear]);

  // BEST PRACTICE: Derived State untuk filtering data tanpa redundant state
  const filteredUpdates = useMemo(() => {
    return mockUpdates.filter((update) => {
      const matchYear = selectedYear === 'All' || update.year === selectedYear;
      const matchMonth = selectedMonth === 'All' || update.month === selectedMonth;
      return matchYear && matchMonth;
    });
  }, [selectedYear, selectedMonth]);

  return (
    <section
      id="latest-updates"
      className="relative pt-28 pb-32 px-4 sm:px-6 md:px-12 overflow-hidden"
      style={{ backgroundColor: '#FF9A6C' }} // Solid Modern Apricot
    >
      {/* Top Gradient Bridge: Fading in from Modern Dark Glass (#120E16) to Solid Apricot */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #120E16 0%, transparent 100%)'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

          {/* CALENDAR HEADER: Judul & Filter Tahun */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b-2 border-matteblack/20">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[3px] bg-matteblack" />
                  <span className="text-xs md:text-sm font-heading tracking-widest uppercase text-matteblack font-bold flex items-center gap-2">
                    <span>🗓️</span> TWICE Official Schedule & Calendar
                  </span>
              </div>
                <h2 className="text-3xl sm:text-5xl font-title text-matteblack tracking-tight">
                  Latest Updates
                </h2>
                  <p className="mt-1 text-sm sm:text-base text-matteblack/85 font-body">
                    Jadwal rilis, tur dunia, dan agenda kegiatan member TWICE berdasarkan kalender waktu.
                  </p>
                </div>

                    {/* FILTER TAHUN (YEAR SELECTOR) */}
                    <div className="flex items-center gap-2 bg-matteblack/10 p-1.5 rounded-2xl border border-matteblack/15 self-start md:self-auto">
                      <span className="text-xs font-heading font-bold text-matteblack/80 px-2 uppercase tracking-wider">
                        Year:
                      </span>
                      {availableYears.map((year) => {
                        const isActive = selectedYear === year;
                        return (
                          <button
                            key={year}
                            onClick={() => {
                              setSelectedYear(year);
                              setSelectedMonth('All'); // Reset pilihan bulan saat tahun berubah
                            }}
                            className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-heading transition-colors duration-200 cursor-pointer ${isActive ? 'text-white font-bold' : 'text-matteblack/80 hover:text-matteblack font-semibold'
                              }`}
                          >
                            {isActive && (
                              <motion.div
                                layoutId="activeCalendarYear"
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

                      {/* CALENDAR MONTH BAR: Filter Bulan bergaya pita kalender */ }
                      <div className="mb-10">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-heading text-matteblack/80 uppercase tracking-wider font-bold flex items-center gap-1.5">
                            <span>📌</span> Select Month:
                          </span>
                          <span className="text-xs font-body text-matteblack/70">
                            Menampilkan {filteredUpdates.length} agenda di {selectedMonth === 'All' ? `semua bulan (${selectedYear})` : `${selectedMonth} ${selectedYear}`}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 no-scrollbar">
                          {activeMonthsInYear.map((month) => {
                            const isActive = selectedMonth === month;
                            return (
                              <button
                                key={month}
                                onClick={() => setSelectedMonth(month)}
                                className={`relative px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-heading font-bold transition-all duration-200 shrink-0 cursor-pointer shadow-sm ${isActive
                                    ? 'bg-matteblack text-white shadow-md scale-105'
                                    : 'bg-white/80 hover:bg-white text-matteblack border border-black/10 hover:border-black/30'
                                  }`}
                              >
                                {month}
                              </button>
                            );
                          })}
                        </div>
                      </div>

        {/* CALENDAR EVENT CARDS GRID */}
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
                  className="group flex flex-col rounded-3xl bg-white text-matteblack shadow-[0_12px_32px_rgba(180,60,10,0.18)] hover:shadow-[0_18px_45px_rgba(180,60,10,0.28)] overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-black/5"
                >
                  {/* Image Frame dengan Badge Kalender di atasnya */}
                  <div className="relative h-56 w-full overflow-hidden bg-black/5">
                    <img 
                      src={update.image} 
                      alt={update.title} 
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                    
                    {/* CALENDAR DATE BADGE (Kotak Kalender di pojok kiri atas) */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 text-center shadow-lg border border-black/10 min-w-[54px]">
                      <span className="block text-[10px] font-heading font-extrabold uppercase tracking-wider text-accent leading-none">
                        {update.month.slice(0, 3)}
                      </span>
                      <span className="block text-2xl font-title text-matteblack leading-tight">
                        {update.day}
                      </span>
                      <span className="block text-[9px] font-heading text-matteblack/60 font-bold uppercase leading-none">
                        {update.weekday}
                      </span>
                    </div>

                    {/* Category Tag di pojok kanan atas */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-matteblack/80 backdrop-blur-md text-white text-[11px] font-heading font-bold uppercase tracking-wider shadow-sm">
                        {update.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Konten Kalender */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Tanggal Lengkap Format Kalender */}
                      <div className="flex items-center gap-1.5 text-xs text-matteblack/60 font-body mb-2.5 font-semibold">
                        <span>🗓️</span>
                        <span>{update.date}</span>
                        <span>•</span>
                        <span className="text-accent font-heading font-bold">{update.category}</span>
                      </div>

                      <h3 className="text-lg font-heading text-matteblack group-hover:text-accent transition-colors duration-200 mb-3 leading-snug font-bold">
                        {update.title}
                      </h3>

                      <p className="text-sm text-matteblack/80 font-body line-clamp-3 leading-relaxed mb-6">
                        {update.excerpt}
                      </p>
                    </div>

                    {/* Footer Kartu Kalender: Read Detail */}
                    <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                      <span className="text-xs font-heading text-matteblack/50 uppercase tracking-wider font-semibold">
                        Event Detail
                      </span>
                      <a 
                        href="#" 
                        className="inline-flex items-center gap-1 text-xs font-heading text-matteblack group-hover:text-accent font-bold tracking-wider uppercase transition-colors"
                      >
                        <span>View Schedule</span>
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
                className="col-span-full py-16 text-center text-matteblack/70 font-body font-medium bg-white/40 rounded-3xl border border-black/10"
              >
                <p className="text-2xl mb-2">📅</p>
                <p className="text-base font-heading font-bold">Tidak ada agenda jadwal untuk periode ini.</p>
                <p className="text-xs text-matteblack/60 mt-1">Coba pilih tahun atau bulan lain pada filter kalender di atas.</p>
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

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { allUpdatesData, ALL_MONTHS } from '../data/newsData';

/**
 * LatestUpdates Component (Homepage)
 * 
 * Karakteristik Sesuai Permintaan:
 * 1. HANYA MENAMPILKAN TAHUN BERJALAN: Terkunci khusus pada tahun 2026.
 * 2. Filter tahun dihapus dari header homepage agar tampilan bersih, fokus pada kalender bulan 2026.
 * 3. Filter bulan tetap interaktif untuk memilah agenda bulan di 2026.
 * 4. Terdapat banner tombol navigasi yang menghubungkan ke halaman arsip penuh: `/news`.
 */
const LatestUpdates = () => {
  const CURRENT_YEAR = '2026';
  const [selectedMonth, setSelectedMonth] = useState('All');

  // Ambil hanya data tahun berjalan (2026)
  const currentYearUpdates = useMemo(() => {
    return allUpdatesData.filter((item) => item.year === CURRENT_YEAR);
  }, [CURRENT_YEAR]);

  // Ekstrak bulan-bulan aktif di tahun 2026
  const activeMonthsIn2026 = useMemo(() => {
    const monthsWithData = new Set(currentYearUpdates.map((item) => item.month));
    return ['All', ...ALL_MONTHS.filter((m) => m !== 'All' && monthsWithData.has(m))];
  }, [currentYearUpdates]);

  // Filter data berdasarkan bulan terpilih
  const filteredUpdates = useMemo(() => {
    return currentYearUpdates.filter((update) => {
      return selectedMonth === 'All' || update.month === selectedMonth;
    });
  }, [currentYearUpdates, selectedMonth]);

  return (
    <section
      id="latest-updates"
      className="relative pt-28 pb-32 px-4 sm:px-6 md:px-12 overflow-hidden"
      style={{ backgroundColor: '#FCC89B' }} // Solid Modern Apricot
    >
      {/* Top Gradient Bridge: Fading in from Modern Dark Glass (#120E16) to Solid Apricot
          Multi-stop + extended height untuk dissolve organik tanpa batas warna yang patah 
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '10rem',
          background: 'linear-gradient(to bottom, #120E16 0%, #120E16 20%, rgba(18,14,22,0.6) 55%, rgba(18,14,22,0.1) 80%, transparent 100%)'
        }}
      /> */}

      <div className="max-w-6xl mx-auto relative z-10">

        {/* CALENDAR HEADER: Judul & Badge Tahun 2026 (Tanpa tombol tahun) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b-2 border-matteblack/20">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[3px] bg-matteblack" />
              <span className="text-xs md:text-sm font-heading tracking-widest uppercase text-matteblack font-bold flex items-center gap-2">
                <span>🗓️</span> TWICE 2026 Official Calendar & Schedule
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display-bold text-matteblack tracking-tight">
              Latest Updates
            </h2>
            <p className="mt-1 text-sm sm:text-base text-matteblack/85 font-body">
              Agenda rilis album, tur dunia, dan jadwal terkini member TWICE untuk tahun <strong>{CURRENT_YEAR}</strong>.
            </p>
          </div>

          {/* Badge Penanda Tahun Berjalan */}
          <div className="flex items-center gap-2.5 bg-matteblack text-white px-5 py-2.5 rounded-2xl shadow-md self-start md:self-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs sm:text-sm font-heading tracking-wider uppercase font-bold">
              Current Era: {CURRENT_YEAR}
            </span>
          </div>
        </div>

        {/* CALENDAR MONTH BAR: Filter Bulan bergaya pita kalender */}
        <div className="mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 no-scrollbar">
            {activeMonthsIn2026.map((month) => {
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
                <p className="text-base font-heading font-bold">Tidak ada agenda jadwal untuk periode ini di tahun 2026.</p>
                <p className="text-xs text-matteblack/60 mt-1">Coba pilih bulan lain atau jelajahi arsip tahun sebelumnya di halaman News.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* BANNER NAVIGASI KE HALAMAN NEWS (ARCHIVE 2023 - 2025) */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-white/90 shadow-xl border border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-heading uppercase text-accent font-bold tracking-widest block mb-1">
              Historical Timeline
            </span>
            <h3 className="text-xl sm:text-2xl font-subtitle text-matteblack">
              Looking for Past Eras & Previous Years?
            </h3>
            <p className="text-sm text-matteblack/70 font-body mt-1">
              Jelajahi arsip lengkap berita, pencapaian Billboard, dan dokumentasi tur TWICE dari tahun 2023 hingga 2025.
            </p>
          </div>

          <Link
            to="/news"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-matteblack text-white hover:bg-accent font-heading text-xs sm:text-sm font-bold tracking-wider uppercase shadow-md transition-all duration-300 hover:scale-105"
          >
            <span>Explore All News & Archives</span>
            <span className="text-base font-body mb-1">→</span>
          </Link>
        </div>

      </div>

      {/* Bottom Gradient Bridge: Fading smoothly from Solid Modern Apricot into Modern Dark Glass (#120E16)
          Multi-stop gradient dengan midpoint stop agar transisi terasa seperti dissolve bukan linear abrupt */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '12rem',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(18,14,22,0.35) 35%, rgba(18,14,22,0.75) 65%, #120E16 90%, #120E16 100%)'
        }}
      />
    </section>
  );
};

export default LatestUpdates;

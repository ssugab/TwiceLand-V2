# Twiceland v2 - Design & Feature Change Log

This file documents all UI/UX design system upgrades, code changes, reasons, line numbers, and developer best practices.

---

### [2026-11-18 23:10:00 UTC+7] - Git Safety & Rollback Baseline
- **Triggering Command / Request**: User requested a rollback option before making design system changes.
- **Action**: Created Git branch `design-backup-baseline` preserving the exact starting state, and checked out working branch `feature/modern-dark-glass`.
- **How to Roll Back Anytime**:
  ```bash
  git checkout main
  # or: git checkout design-backup-baseline
  ```

---

### [2026-11-18 23:10:52 UTC+7] - Modern Dark Glass Theme & Typography Architecture
- **Triggering Command / Request**: "Let the `--color-accent2: #FCCFA6` stay like that. Try Modern Dark Glass. What do u suggest with Typography which i placed the font locally. I want to use that font."
- **Files Modified**: `frontend/src/index.css`
- **Problem Solved**:
  1. The previous dark token `#29232E` was purplish without depth tokens for frosted glass cards.
  2. Heavy display font (`Mont-HeavyDEMO`) was being loaded for both titles and body text, making small 14px text hard to read on mobile.
- **Lines Changed / Added**:
  - Preserved `--color-accent2: #FCCFA6`.
  - Added Modern Dark Glass surface tokens: `--color-matteblack: #120E16`, `--color-surface-dark: #1A1423`, `--color-surface-card: rgba(255, 255, 255, 0.05)`, and `--color-surface-border: rgba(255, 255, 255, 0.12)`.
  - Dedicated local font roles: `--font-title` ("Milligram") for billboard branding, `--font-heading` ("Mont") for section titles and badges, `--font-display` ("Couture") for banners, and `--font-body` (high-readability system-ui stack) for crisp, responsive paragraph text.
  - Set global default `html` and `body` background to `#120E16` with `color: #FAF9F6`.
- **Best Practice Rationale (Junior Note)**:
  - Display fonts with thick strokes (like `Mont-Heavy`) are meant for headings (24px+). Small body copy needs open counters and clear letter-spacing so eyes do not fatigue.
  - Dark mode surfaces should avoid pure `#000000` because high-contrast pure white on pure black causes halation (eye glow). An obsidian tint (`#120E16`) with semi-transparent frosted overlays (`backdrop-blur-md`) creates natural visual hierarchy and depth.

---

### [2026-11-18 23:26:07 UTC+7] - Custom Modern Dark Glass Scrollbar
- **Triggering Command / Request**: "Also how do i change the scroll bar?"
- **Files Modified**: `frontend/src/index.css` (Lines 95-135)
- **Problem Solved**:
  - Default browser scrollbars on Windows are light-grey blocks with square edges that look disjointed on a deep dark glass website.
- **Lines Changed / Added**:
  - Added standard CSS `scrollbar-width: thin` and `scrollbar-color: rgba(255, 255, 255, 0.2) #120E16` for Firefox.
  - Added Webkit rules (`::-webkit-scrollbar`, `::-webkit-scrollbar-track`, `::-webkit-scrollbar-thumb`) with rounded pill edges (`border-radius: 9999px`) and an accent glow hover state (`background: #FF5FA2`, TWICE Neon Magenta).
  - Added `.no-scrollbar` utility class for horizontal scrolling tracks (like the member sliding gallery) so content scrolls cleanly without scrollbar clutter.
- **Best Practice Rationale (Junior Note)**:
  - Always support both Webkit (`::-webkit-scrollbar`) and the CSS Box Model standard (`scrollbar-width`, `scrollbar-color`). Adding a 2px border on the thumb that matches the track background color (`border: 2px solid #120E16`) creates an elegant visual padding around the scroll thumb.

---

### [2026-11-19 00:07:48 UTC+7] - Full-Bleed Hero Behind Navbar & Solid Atmosphere Transitions
- **Triggering Command / Request**: "At hero image, make sure it still show fully on the hero page, not below the navbar. But started from behind navbar, just like previous version. Also with the modern apricot and magenta, make sure to not use dark glass again. So it like, Hero with apricot background, transitioned to dark glass, then gradient to solid apricot, then dark glass again, then solid magenta... keep PostgreSQL design as notes."
- **Files Modified**:
  - `frontend/src/components/Hero.jsx` (Lines 1-75)
  - `frontend/src/components/LatestUpdate.jsx` (Lines 1-240)
  - `frontend/src/components/MembersSection.jsx` (Lines 1-240)
  - `frontend/src/components/Footer.jsx` (Lines 1-110, [NEW])
  - `frontend/src/pages/HomePage.jsx` (Lines 1-25)
- **Problem Solved**:
  1. The Hero image had a `pt-20` offset pushing it 80px below the fixed navbar rather than bleeding full-height behind it.
  2. Apricot and Magenta sections were previously dark glass rather than rich, bold, solid editorial color-blocks.
- **Lines Changed / Added**:
  - **Full-Bleed Hero**: Removed `pt-20` from `Hero.jsx`. Set height to `h-screen min-h-[600px] md:min-h-[700px]` with `p-2 sm:p-3`. The image starts at `top: 0` directly behind the transparent Navbar. Added a top vignette scrim (`from-black/70 to-transparent`) so Navbar links are crystal clear over any photo.
  - **Solid Modern Apricot (`LatestUpdate.jsx`)**: Background set to solid `#FF9A6C`. Replaced dark-glass panels with crisp porcelain white cards (`bg-white text-matteblack shadow-[0_10px_30px_rgba(180,60,10,0.15)]`), solid matte black filter pills, and high-contrast typography. Strictly **NO dark glass** in this section!
  - **Solid Modern Magenta (`Footer.jsx`)**: Created a dedicated celebratory footer in solid TWICE Neon Magenta (`#FF337A`), featuring white branding, streaming action buttons, album links, and official color chips. Strictly **NO dark glass** in this section!
  - **Seamless Flow**: Hero (Peach) $\rightarrow$ LatestComeback (Dark Glass) $\rightarrow$ LatestUpdate (Solid Apricot) $\rightarrow$ MembersSection (Dark Glass) $\rightarrow$ Footer (Solid Magenta).
- **Best Practice Rationale (Junior Note)**:
  - **Full-bleed Hero**: Fixed navigation bars (`fixed top-0 z-50`) achieve an immersive app-like feel when hero banners extend underneath them with a gradient vignette mask protecting link contrast.
  - **Rhythm in UI**: Alternating between dark glass and bold solid color blocks creates visual rhythm and prevents eye fatigue across long single-page sites.

---

### [2026-11-19 12:58:26 UTC+7] - Calendar Schedule Redesign for Latest Updates
- **Triggering Command / Request**: "Oke, lanjutkan dengan redesign pada Latest Updates biar terlihat seperti calendar, namun ada filter tahun, bulan, gausah filter member. Lalu, biarkan Hero seperti sekarang. Terapkan best practice, dan tandai, berikan contoh perbandingan antara kode sebelumnya dan setelahnya."
- **Files Modified**: `frontend/src/components/LatestUpdate.jsx` (Lines 1-330)
- **Problem Solved**:
  1. Sebelumnya Latest Updates berbentuk kartu berita biasa yang bercampur dengan tag member yang padat.
  2. Format tanggal sebelumnya hanya berupa teks datar `"August 24, 2024"` tanpa hierarki visual kalender.
- **Lines Changed / Added**:
  - Dihapus: Filter member (`selectedMember`, `availableMembers`, dan deretan tombol member) sesuai permintaan agar halaman tidak terlalu padat (*decluttering*).
  - Ditambahkan: **Calendar Date Badge Box** di pojok kiri atas setiap kartu (berisi nama bulan 3-huruf `AUG`, angka tanggal besar `24`, dan hari `SAT`).
  - Ditambahkan: **Calendar Month Ribbon Bar** yang menampilkan daftar bulan secara kronologis kalender dengan status bulan aktif.
  - Filter Tahun dipertahankan dengan Framer Motion sliding pill (`layoutId="activeCalendarYear"`).
  - Ditambahkan pesan *Empty State* yang ramah jika tidak ada agenda pada kombinasi tahun dan bulan yang dipilih.
- **Best Practice Rationale (Junior Note)**:
  - **Cognitive Load Reduction**: Menghapus filter member yang berlebihan mengurangi beban visual (*cognitive load*) bagi user, mengarahkan fokus sepenuhnya pada lini masa waktu (kalender rilis & tur).
  - **Visual Anchor with Date Badge**: Mata manusia memproses bentuk visual lebih cepat daripada membaca kalimat. Kotak tanggal kalender (Bulan, Angka, Hari) memberikan penanda instan bagi fans untuk mengetahui kapan event tersebut berlangsung.

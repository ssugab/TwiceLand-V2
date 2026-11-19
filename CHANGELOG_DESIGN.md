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

---

### [2026-11-19 18:04:27 UTC+7] - Fix Clipped Magenta on Member Cards & Seamless Transitions
- **Triggering Command / Request**: "pada members section, L177-L182 Ada warna magenta yang muncul di div card twice members, sehingga muncul warna kepotong magenta gitu. Serta saya ingin agar background animasi flow tadi bisa terhubung dengan background section sebelumnya dan setelahnya, agar terasa ada transisi warna yang mulus"
- **Files Modified**:
  - `frontend/src/components/MembersSection.jsx` (Lines 130-275)
- **Problem Solved**:
  1. Sebelumnya jembatan gradien bawah setinggi `h-32` menimpa langsung sepertiga bagian bawah kartu slider member sehingga kartu terlihat terpotong blok warna magenta.
  2. Tidak ada gradien penghubung di bagian atas `MembersSection`, sehingga pergantian dari Solid Apricot (`#FF9A6C`) ke WebGL Dark Glass terasa agak patah.
- **Lines Changed / Added**:
  - **Safe Buffer Spacing**: Menambahkan padding bawah `pb-48` pada kontainer `AnimatedFlow`, sehingga ujung bawah kartu slider member berjarak aman di atas zona gradien transisi. Kartu member kini utuh dan bebas dari potongan warna magenta.
  - **Top Transition Bridge**: Menambahkan gradien transisi atas setinggi `h-32` (`from-[#FF9A6C] via-[#FF9A6C]/40 to-transparent`) yang menyatu dengan bagian bawah `LatestUpdate`.
  - **Bottom Transition Bridge**: Memperbarui gradien transisi bawah menjadi gradien setinggi `h-40` (`from-transparent via-[#FF337A]/40 to-[#FF337A]`) yang mengalir secara alami dan lembut menyambut `Footer` (Solid Magenta).
- **Best Practice Rationale (Junior Note)**:
  - **Stacking & Buffer Spacing**: Saat menggunakan elemen transisi gradien absolut (`absolute bottom-0`), selalu berikan padding bawah (*buffer*) minimal sebesar tinggi gradien pada elemen konten agar konten tidak tertimpa atau terpotong secara visual.

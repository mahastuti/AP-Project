# aero landing page

next.js 15 (app router) + typescript + tailwind css v4 + gsap + lucide.
tampilan minimalis putih dan soft blue, terinspirasi landing page saas premium.

## jalanin

```bash
npm install
npm run dev
```

buka http://localhost:3000

## production

```bash
npm run build
npm start
```

## struktur

```
app/
├── layout.tsx        # font geist, metadata, class "js" untuk reveal animation
├── page.tsx          # susunan section
├── globals.css       # tailwind, palette (@theme), keyframes, reduced-motion
├── icon.svg          # favicon
└── api/              # api todo bawaan (health, todos), tidak dipakai ui
components/
├── Navbar.tsx        # floating nav + menu mobile
├── Hero.tsx          # gradient atmosferik + mockup dashboard
├── Metrics.tsx
├── Features.tsx      # bento cards
├── Workflow.tsx
├── Insights.tsx
├── Testimonial.tsx
├── Cta.tsx
├── Footer.tsx
├── mockups.tsx       # dashboard mockup, chart, avatar, dll (pure html/svg)
├── Motion.tsx        # semua animasi gsap (reveal + parallax)
└── buttons.ts        # style tombol bersama
```

## catatan

- palette ada di `app/globals.css` bagian `@theme`. `azure-ink` (#1b6fa8) dipakai untuk teks biru kecil supaya kontrasnya lolos aa.
- animasi dikontrol lewat atribut: `data-reveal`, `data-reveal-delay`, `data-parallax`.
- semua animasi mati otomatis kalau `prefers-reduced-motion` aktif.
- semua teks (brand "aero", angka, testimonial) adalah placeholder, ganti sesuai produk.

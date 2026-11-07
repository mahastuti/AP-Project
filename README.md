# birdstrike juanda dashboard (versi tampilan)

salinan tampilan dari `mahastuti/qwb521jf9900`, dibuat ulang di project ini.
next.js 15 (app router) + typescript + tailwind css v4 + shadcn/ui + lucide.

## jalanin

```bash
npm install
npm run dev
```

buka http://localhost:3000

login (gate sisi klien): lihat `src/components/auth.tsx`.

## production

```bash
npm run build
npm start
```

## yang ikut dicopy

- semua halaman: dashboard (dashboard, predict, map), data, tentang, 3 halaman input, 404
- navbar, footer, form, tabel data, komponen ui, style (`src/app/globals.css`)
- aset: logo, foto, ilustrasi, dan 8 gambar peta

## yang berbeda dari aslinya

- **tanpa database.** prisma, python (`backend/`), dan folder `src/scripts` tidak dicopy.
  semua `/api/*` diganti versi contoh yang menyimpan data di memori (`src/lib/mock-db.ts`),
  jadi data hilang saat server restart dan isinya fiktif (dibuat otomatis).
- **import traffic flight tidak memproses file** (selalu 0 baris).
- **prediksi bukan model asli.** `/api/modeling/predict` hanya rumus sederhana dari jumlah burung.
  label model di ui sengaja bertuliskan "contoh-model (bukan model asli)". jangan dipakai untuk keputusan keselamatan.
- **gambar peta dikompres** dari png 14548x7197 (~17 MB) ke webp 5000 px (~0,8 MB).
- **font poppins** lewat `@fontsource/poppins` (self-hosted), bukan `next/font/google`.
- eslint belum dipasang.

## memasang backend asli

1. salin `prisma/` dan `src/lib/prisma.ts` dari repo asli, pasang `@prisma/client` dan `prisma`.
2. ganti route di `src/app/api/` dengan route asli dari repo asli.
3. hapus `src/lib/mock-db.ts`.

## catatan keamanan

login di `src/components/auth.tsx` hanya pembatas tampilan di browser (username/password tertulis di kode,
status login di `localStorage`). siapa pun bisa melewatinya. jangan jadikan itu satu-satunya proteksi data.

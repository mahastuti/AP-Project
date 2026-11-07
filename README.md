# nextjs-app

next.js (app router) + typescript, frontend + api dalam satu project. contoh: todo app.

## struktur

```
app/
├── layout.tsx
├── page.tsx             # ui todo (client component)
├── globals.css
└── api/
    ├── health/route.ts
    └── todos/
        ├── route.ts         # GET, POST
        └── [id]/route.ts    # PATCH, DELETE
lib/store.ts                 # data in-memory + tipe Todo
```

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

## api

| method | endpoint | keterangan |
|--------|----------|------------|
| GET | /api/health | cek server |
| GET | /api/todos | list todo |
| POST | /api/todos | tambah `{ "title": "..." }` |
| PATCH | /api/todos/:id | toggle selesai |
| DELETE | /api/todos/:id | hapus |

data disimpan in-memory, hilang kalau server restart (dan tidak cocok untuk serverless seperti vercel). ganti dengan database kalau butuh persistensi.

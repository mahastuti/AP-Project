# nextjs-app

next.js (app router) fullstack, frontend + api dalam satu project. contoh: todo app.

## struktur

```
app/
├── layout.js
├── page.js              # ui todo (client component)
├── globals.css
└── api/
    ├── health/route.js
    └── todos/
        ├── route.js         # GET, POST
        └── [id]/route.js    # PATCH, DELETE
lib/store.js                 # data in-memory
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

// data contoh in-memory untuk menggantikan database (prisma) di versi "tampilan saja".
// semua isi di sini fiktif, dibuat otomatis, bukan data asli bird strike juanda.
// ganti file ini dengan query database asli kalau backend sudah dipasang.

export type DataType = "bird-strike" | "bird-species" | "traffic-flight" | "modeling";

export type MockRow = {
  id: number;
  deletedAt: string | null;
  [key: string]: string | number | null;
};

export const DATA_TYPES: DataType[] = [
  "bird-strike",
  "bird-species",
  "traffic-flight",
  "modeling",
];

export function isDataType(v: string): v is DataType {
  return (DATA_TYPES as string[]).includes(v);
}

// pseudo-random deterministik supaya tampilan konsisten tiap reload
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function pick<T>(r: () => number, list: T[]): T {
  return list[Math.floor(r() * list.length)];
}

const pad = (n: number) => String(n).padStart(2, "0");

function randomDate(r: () => number) {
  const year = pick(r, [2023, 2024, 2025]);
  const month = 1 + Math.floor(r() * 12);
  const day = 1 + Math.floor(r() * 28);
  return { year, month, date: `${year}-${pad(month)}-${pad(day)}` };
}

function randomTime(r: () => number) {
  const h = Math.floor(r() * 24);
  const m = Math.floor(r() * 60);
  const waktu = h < 11 ? "Pagi" : h < 15 ? "Siang" : h < 18 ? "Sore" : "Malam";
  return { jam: `${pad(h)}:${pad(m)}`, waktu };
}

const CUACA = ["Cerah", "Berawan", "Hujan Ringan", "Mendung"];
const FASE = ["Take-off", "Landing", "Climb", "Approach"];
const TITIK = ["Titik 1", "Titik 2", "Titik 3", "Titik 4", "Titik 5"];
const AIRLINE = ["Airline A", "Airline B", "Airline C", "Airline D"];
const PESAWAT = ["A320", "B737-800", "ATR 72", "A330"];
const SPESIES = [
  ["Burung Layang-layang", "Hirundo rustica"],
  ["Burung Gereja", "Passer montanus"],
  ["Kuntul Kecil", "Egretta garzetta"],
  ["Bondol Peking", "Lonchura punctulata"],
];

function build(type: DataType, count: number): MockRow[] {
  const r = rng(type.length * 97 + 13);
  const rows: MockRow[] = [];
  for (let i = 1; i <= count; i++) {
    const { year, month, date } = randomDate(r);
    const { jam, waktu } = randomTime(r);
    const base = { id: i, deletedAt: i % 17 === 0 ? "2025-06-01T00:00:00.000Z" : null };

    if (type === "bird-strike") {
      rows.push({
        ...base,
        tanggal: date,
        jam,
        waktu,
        fase: pick(r, FASE),
        lokasi_perimeter: pick(r, ["Runway 10", "Runway 28", "Taxiway A", "Apron"]),
        titik: pick(r, TITIK),
        kategori_kejadian: pick(r, ["Strike", "Near miss", "Sighting"]),
        airline: pick(r, AIRLINE),
        runway_use: pick(r, ["10", "28"]),
        komponen_pesawat: pick(r, ["Radome", "Fuselage", "Engine", "Wing"]),
        dampak_pada_pesawat: pick(r, ["Tidak ada", "Minor", "Sedang"]),
        kondisi_kerusakan: pick(r, ["Tidak ada kerusakan", "Penyok kecil", "Perlu inspeksi"]),
        tindakan_perbaikan: pick(r, ["Inspeksi visual", "Penggantian panel", "-"]),
        sumber_informasi: pick(r, ["Laporan pilot", "ATC", "Patroli"]),
        remark: "-",
        deskripsi: "Data contoh untuk keperluan tampilan.",
        dokumentasi: "",
        jenis_pesawat: pick(r, PESAWAT),
      });
    } else if (type === "bird-species") {
      const [nama, ilmiah] = pick(r, SPESIES);
      rows.push({
        ...base,
        longitude: (112.77 + r() * 0.02).toFixed(5),
        latitude: (-7.38 + r() * 0.02).toFixed(5),
        lokasi: pick(r, ["Sisi utara", "Sisi selatan", "Dekat runway", "Area apron"]),
        titik: pick(r, TITIK),
        tanggal: date,
        jam,
        waktu,
        cuaca: pick(r, CUACA),
        jenis_burung: nama,
        nama_ilmiah: ilmiah,
        jumlah_burung: 1 + Math.floor(r() * 30),
        keterangan: "-",
        dokumentasi: "",
      });
    } else if (type === "modeling") {
      rows.push({
        ...base,
        tanggal: date,
        jam,
        waktu,
        cuaca: pick(r, CUACA),
        rata_rata_burung_di_titik_x: (r() * 12).toFixed(2),
        titik: pick(r, TITIK),
        fase: pick(r, FASE),
        strike: r() > 0.8 ? 1 : 0,
      });
    } else {
      rows.push({
        ...base,
        no: i,
        act_type: pick(r, PESAWAT),
        reg_no: `PK-${String.fromCharCode(65 + Math.floor(r() * 26))}${String.fromCharCode(65 + Math.floor(r() * 26))}${String.fromCharCode(65 + Math.floor(r() * 26))}`,
        opr: pick(r, AIRLINE),
        flight_number_origin: `XX${100 + Math.floor(r() * 800)}`,
        flight_number_dest: `XX${100 + Math.floor(r() * 800)}`,
        ata: jam,
        block_on: jam,
        block_off: `${pad((Number(jam.slice(0, 2)) + 1) % 24)}:${jam.slice(3)}`,
        atd: `${pad((Number(jam.slice(0, 2)) + 1) % 24)}:${jam.slice(3)}`,
        ground_time: `${pad(Math.floor(r() * 2))}:${pad(Math.floor(r() * 60))}`,
        org: pick(r, ["CGK", "DPS", "UPG", "BPN"]),
        des: pick(r, ["CGK", "DPS", "UPG", "BPN"]),
        ps: pick(r, ["P1", "P2", "P3"]),
        runway: pick(r, ["10", "28"]),
        avio_a: pick(r, ["A1", "A2", "-"]),
        avio_d: pick(r, ["D1", "D2", "-"]),
        f_stat: pick(r, ["ON", "OFF"]),
        bulan: pad(month),
        tahun: String(year),
      });
    }
  }
  return rows;
}

type Store = Record<DataType, { rows: MockRow[]; nextId: number }>;

const g = globalThis as typeof globalThis & { __mockStore?: Store };

export const mockStore: Store = (g.__mockStore ??= {
  "bird-strike": { rows: build("bird-strike", 64), nextId: 65 },
  "bird-species": { rows: build("bird-species", 64), nextId: 65 },
  "traffic-flight": { rows: build("traffic-flight", 96), nextId: 97 },
  modeling: { rows: build("modeling", 80), nextId: 81 },
});

export function addMockRow(type: DataType, fields: Record<string, unknown>): MockRow {
  const s = mockStore[type];
  const clean: Record<string, string | number | null> = {};
  for (const [k, v] of Object.entries(fields)) {
    if (typeof v === "string" || typeof v === "number" || v === null) clean[k] = v;
  }
  const row: MockRow = { ...clean, id: s.nextId++, deletedAt: null };
  s.rows.unshift(row);
  return row;
}

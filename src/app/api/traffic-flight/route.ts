import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// versi contoh: file tidak diproses, jadi tidak ada baris yang diimpor.
// ganti dengan parser excel + insert database kalau backend sudah dipasang.
export async function POST() {
  return NextResponse.json({
    success: true,
    count: 0,
    skipped: 0,
    replaced: [],
    message: "versi contoh: file tidak diproses",
  });
}

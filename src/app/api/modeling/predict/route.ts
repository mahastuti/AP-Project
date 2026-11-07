import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// prediksi tiruan: angka sederhana dari jumlah burung, BUKAN hasil model machine learning.
// jangan dipakai untuk keputusan keselamatan. ganti dengan pemanggilan model asli.
export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as { jumlahBurung?: unknown };
  const n = Math.max(0, Number(body?.jumlahBurung) || 0);
  const p = 1 - Math.exp(-n / 25);
  return NextResponse.json({
    success: true,
    result: { predictions: [Number(p.toFixed(5))] },
  });
}

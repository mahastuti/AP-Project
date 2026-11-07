import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// info model tiruan. teksnya ikut tampil di ui, jadi sengaja dilabeli.
export async function GET() {
  return NextResponse.json({
    success: true,
    model: {
      path: "contoh-model (bukan model asli)",
      ext: ".mock",
      size: 0,
    },
  });
}

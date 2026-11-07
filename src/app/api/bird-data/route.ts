import { NextResponse } from "next/server";
import { addMockRow } from "@/lib/mock-db";

export const dynamic = "force-dynamic";

// versi contoh: data hanya disimpan di memori server, hilang saat restart
export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) {
    return NextResponse.json({ success: false, message: "body tidak valid" }, { status: 400 });
  }
  const row = addMockRow("bird-species", body);
  return NextResponse.json({ success: true, data: row }, { status: 201 });
}

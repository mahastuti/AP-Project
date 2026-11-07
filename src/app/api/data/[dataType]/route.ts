import { NextResponse } from "next/server";
import { isDataType, mockStore, type MockRow } from "@/lib/mock-db";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ dataType: string }> };

const bad = (message: string, status = 400) =>
  NextResponse.json({ success: false, message }, { status });

export async function GET(request: Request, { params }: Ctx) {
  const { dataType } = await params;
  if (!isDataType(dataType)) return bad("tipe data tidak dikenal", 404);

  const q = new URL(request.url).searchParams;
  const page = Math.max(1, Number(q.get("page")) || 1);
  const limit = Math.min(200, Math.max(1, Number(q.get("limit")) || 10));
  const search = (q.get("search") ?? "").trim().toLowerCase();
  const showDeleted = q.get("showDeleted") === "true";
  const sortBy = q.get("sortBy") ?? "";
  const sortOrder = q.get("sortOrder") === "asc" ? 1 : -1;
  const bulan = q.get("bulan");
  const tahun = q.get("tahun");

  const all = mockStore[dataType].rows;
  let rows: MockRow[] = all.filter((r) => showDeleted || !r.deletedAt);

  if (dataType === "traffic-flight") {
    if (bulan) rows = rows.filter((r) => r.bulan === bulan);
    if (tahun) rows = rows.filter((r) => r.tahun === tahun);
  }
  if (search) {
    rows = rows.filter((r) =>
      Object.values(r).some((v) => String(v ?? "").toLowerCase().includes(search)),
    );
  }
  if (sortBy) {
    rows = [...rows].sort((a, b) => {
      const x = a[sortBy] ?? "";
      const y = b[sortBy] ?? "";
      const nx = Number(x);
      const ny = Number(y);
      if (!Number.isNaN(nx) && !Number.isNaN(ny) && x !== "" && y !== "") {
        return (nx - ny) * sortOrder;
      }
      return String(x).localeCompare(String(y)) * sortOrder;
    });
  }

  const total = rows.length;
  const pages = Math.max(1, Math.ceil(total / limit));
  const start = (page - 1) * limit;

  const years = Array.from(
    new Set(all.map((r) => String(r.tahun ?? "")).filter(Boolean)),
  ).sort();

  return NextResponse.json({
    success: true,
    data: rows.slice(start, start + limit),
    pagination: { page, limit, total, pages, totalAll: total },
    pageInfo: { hasMore: page < pages, nextCursor: null },
    filters: {
      months: Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")),
      years,
    },
  });
}

export async function PUT(request: Request, { params }: Ctx) {
  const { dataType } = await params;
  if (!isDataType(dataType)) return bad("tipe data tidak dikenal", 404);
  const id = Number(new URL(request.url).searchParams.get("id"));
  const row = mockStore[dataType].rows.find((r) => r.id === id);
  if (!row) return bad("data tidak ditemukan", 404);

  const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
  for (const [k, v] of Object.entries(body)) {
    if (k === "id" || k === "deletedAt") continue;
    if (typeof v === "string" || typeof v === "number" || v === null) row[k] = v;
  }
  return NextResponse.json({ success: true, data: row });
}

// soft delete, sama seperti perilaku aplikasi asli (baris bisa di-restore)
export async function DELETE(request: Request, { params }: Ctx) {
  const { dataType } = await params;
  if (!isDataType(dataType)) return bad("tipe data tidak dikenal", 404);
  const id = Number(new URL(request.url).searchParams.get("id"));
  const row = mockStore[dataType].rows.find((r) => r.id === id);
  if (!row) return bad("data tidak ditemukan", 404);
  row.deletedAt = new Date().toISOString();
  return NextResponse.json({ success: true });
}

export async function PATCH(request: Request, { params }: Ctx) {
  const { dataType } = await params;
  if (!isDataType(dataType)) return bad("tipe data tidak dikenal", 404);
  const sp = new URL(request.url).searchParams;
  const id = Number(sp.get("id"));
  const row = mockStore[dataType].rows.find((r) => r.id === id);
  if (!row) return bad("data tidak ditemukan", 404);
  if (sp.get("action") === "restore") row.deletedAt = null;
  return NextResponse.json({ success: true });
}

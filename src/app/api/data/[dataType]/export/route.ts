import { isDataType, mockStore } from "@/lib/mock-db";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ dataType: string }> };

function csvCell(v: unknown) {
  const s = String(v ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export async function GET(_request: Request, { params }: Ctx) {
  const { dataType } = await params;
  if (!isDataType(dataType)) {
    return new Response("tipe data tidak dikenal", { status: 404 });
  }

  const rows = mockStore[dataType].rows.filter((r) => !r.deletedAt);
  const headers = rows.length
    ? Object.keys(rows[0]).filter((k) => k !== "id" && k !== "deletedAt")
    : [];
  const csv = [
    headers.join(","),
    ...rows.map((r) => headers.map((h) => csvCell(r[h])).join(",")),
  ].join("\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${dataType}.csv"`,
    },
  });
}

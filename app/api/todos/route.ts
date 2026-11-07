import { NextResponse } from "next/server";
import { store, type Todo } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json<Todo[]>(store.todos);
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as { title?: unknown };
  const title = String(body?.title ?? "").trim();

  if (!title) {
    return NextResponse.json({ error: "title wajib diisi" }, { status: 400 });
  }

  const todo: Todo = { id: store.nextId++, title, done: false };
  store.todos.push(todo);
  return NextResponse.json(todo, { status: 201 });
}

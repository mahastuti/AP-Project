import { NextResponse } from "next/server";
import { store } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function PATCH(_request, { params }) {
  const { id } = await params;
  const todo = store.todos.find((t) => t.id === Number(id));

  if (!todo) {
    return NextResponse.json({ error: "todo tidak ditemukan" }, { status: 404 });
  }

  todo.done = !todo.done;
  return NextResponse.json(todo);
}

export async function DELETE(_request, { params }) {
  const { id } = await params;
  const index = store.todos.findIndex((t) => t.id === Number(id));

  if (index === -1) {
    return NextResponse.json({ error: "todo tidak ditemukan" }, { status: 404 });
  }

  store.todos.splice(index, 1);
  return new NextResponse(null, { status: 204 });
}

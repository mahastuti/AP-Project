"use client";

import { useEffect, useState } from "react";

const API = "/api/todos";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  async function load() {
    try {
      const res = await fetch(API);
      setTodos(await res.json());
      setError("");
    } catch {
      setError("gagal ambil data");
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function addTodo(e) {
    e.preventDefault();
    if (!title.trim()) return;
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    if (res.ok) {
      const todo = await res.json();
      setTodos((prev) => [...prev, todo]);
      setTitle("");
    }
  }

  async function toggle(id) {
    const res = await fetch(`${API}/${id}`, { method: "PATCH" });
    if (res.ok) {
      const updated = await res.json();
      setTodos((prev) => prev.map((t) => (t.id === id ? updated : t)));
    }
  }

  async function remove(id) {
    const res = await fetch(`${API}/${id}`, { method: "DELETE" });
    if (res.ok) setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <main className="container">
      <h1>todo list</h1>

      <form onSubmit={addTodo} className="form">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="tulis todo baru..."
        />
        <button type="submit">tambah</button>
      </form>

      {error && <p className="error">{error}</p>}

      <ul className="list">
        {todos.map((t) => (
          <li key={t.id} className={t.done ? "done" : ""}>
            <span onClick={() => toggle(t.id)}>{t.title}</span>
            <button className="del" onClick={() => remove(t.id)}>
              hapus
            </button>
          </li>
        ))}
        {todos.length === 0 && !error && <li className="empty">belum ada todo</li>}
      </ul>
    </main>
  );
}

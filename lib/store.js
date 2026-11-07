// simpan di globalThis supaya tidak reset saat hot reload di dev
const g = globalThis;

if (!g.__todoStore) {
  g.__todoStore = {
    nextId: 3,
    todos: [
      { id: 1, title: "belajar next.js", done: true },
      { id: 2, title: "bikin api route", done: false },
    ],
  };
}

export const store = g.__todoStore;

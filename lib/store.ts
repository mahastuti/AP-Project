export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

type Store = {
  nextId: number;
  todos: Todo[];
};

// simpan di globalThis supaya tidak reset saat hot reload di dev
const g = globalThis as typeof globalThis & { __todoStore?: Store };

export const store: Store = (g.__todoStore ??= {
  nextId: 3,
  todos: [
    { id: 1, title: "belajar next.js", done: true },
    { id: 2, title: "bikin api route", done: false },
  ],
});

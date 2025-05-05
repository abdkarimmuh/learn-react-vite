import { createRoot } from "react-dom/client";
import TodoList from "./TodoList";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoList />
  </StrictMode>
);

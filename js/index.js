let FormEl = document.querySelector(".todo-input");
let UlEl = document.querySelector(".todo-list");
import { postTodo, getTodo, deleteTodo, updateTodo } from "./getData.js";
FormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(FormEl.input.value);
  postTodo("http://localhost:8080/todos", FormEl.input.value);
  getTodo("http://localhost:8080/todos");
  FormEl.reset();
});
export function UpdateUi(list) {
  UlEl.innerHTML = "";

  list.forEach((todo) => {
    let li = document.createElement("li");
    li.className = "todo-item";
    let span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo.title;
    let actions = document.createElement("div");
    actions.className = "todo-actions";
    let editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    editBtn.addEventListener("click", async () => {
      let newTitle = prompt("Yangi nomni kiriting:", todo.title);
      if (!newTitle || newTitle.trim() === "") return;
      await updateTodo(todo.id, newTitle.trim());
      getTodo("http://localhost:8080/todos");
    });
    deleteBtn.addEventListener("click", async () => {
      await deleteTodo(todo.id);
      getTodo("http://localhost:8080/todos");
    });
    actions.append(editBtn, deleteBtn);
    li.append(span, actions);
    UlEl.appendChild(li);
  });
}

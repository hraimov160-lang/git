import { UpdateUi } from "./index.js";
export async function getTodo(params) {
  try {
    let res = await fetch(params);
    if (!res.ok) {
      throw new Error("apida muammo");
    }
    let data = await res.json();
    UpdateUi(data);
  } catch (error) {
    console.log(error);
  }
}
getTodo("http://localhost:8080/todos");
export async function postTodo(params, title) {
  try {
    let res = await fetch(params, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title }),
    });
    if (!res.ok) {
      throw new Error("qo'shishda muammo uchramoqda");
    }
    let data = await res.json();
  } catch (error) {
    console.log(error);
  }
}
export async function deleteTodo(id) {
  try {
    let res = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("o‘chirishda muammo");
    }
  } catch (error) {
    console.log(error);
  }
}
export async function updateTodo(id, newTitle) {
  try {
    let res = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTitle,
      }),
    });
    if (!res.ok) {
      throw new Error("o‘zgartirishda muammo");
    }
  } catch (error) {
    console.log(error);
  }
}

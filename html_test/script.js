const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// localStorageから読み込み
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
savedTodos.forEach(todo => createTodo(todo.text, todo.completed));

// Todo追加
function addTodo() {
  const text = todoInput.value.trim();
  if (text === "") return;

  createTodo(text, false);
  saveTodos();
  todoInput.value = "";
}

// Todoを作る関数
function createTodo(text, completed) {
  const li = document.createElement("li");

  const left = document.createElement("div");
  left.className = "todo-left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;

  const span = document.createElement("span");
  span.textContent = text;
  if (completed) {
    span.classList.add("completed");
  }

  checkbox.addEventListener("change", () => {
    span.classList.toggle("completed");
    saveTodos();
  });

  left.appendChild(checkbox);
  left.appendChild(span);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "削除";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveTodos();
  });

  li.appendChild(left);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}

// localStorageに保存
function saveTodos() {
  const todos = [];
  document.querySelectorAll("li").forEach(li => {
    const text = li.querySelector("span").textContent;
    const completed = li.querySelector("input").checked;
    todos.push({ text, completed });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

// ボタンで追加
addBtn.addEventListener("click", addTodo);

// Enterキーで追加
todoInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    addTodo();
  }
});

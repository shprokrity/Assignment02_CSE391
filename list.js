const backBtn = document.getElementById("backBtn");
const listTitle = document.getElementById("listTitle");
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const currentList = localStorage.getItem("currentList");
let allLists = JSON.parse(localStorage.getItem("todo-lists")) || {};

if (!currentList || !allLists[currentList]) {
  window.location.href = "index3.html";
}

listTitle.textContent = currentList;

addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (!task) return;

  allLists[currentList].push({ text: task, done: false });
  saveAndRender();
  taskInput.value = "";
});

function saveAndRender() {
  localStorage.setItem("todo-lists", JSON.stringify(allLists));
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";
  allLists[currentList].forEach((task, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => {
      task.done = checkbox.checked;
      saveAndRender();
    });

    const span = document.createElement("span");
    span.textContent = task.text;
    span.className = "task-text";
    if (task.done) span.classList.add("completed");

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";
    delBtn.onclick = () => {
      allLists[currentList].splice(index, 1);
      saveAndRender();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

backBtn.addEventListener("click", () => {
  window.location.href = "index3.html";
});

renderTasks();

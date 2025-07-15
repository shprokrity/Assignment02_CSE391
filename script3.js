const listContainer = document.getElementById("listContainer");
const newListInput = document.getElementById("newListInput");
const createListBtn = document.getElementById("createListBtn");

let allLists = JSON.parse(localStorage.getItem("todo-lists")) || {};

createListBtn.addEventListener("click", () => {
  const name = newListInput.value.trim();
  if (!name || allLists[name]) return;

  allLists[name] = [];
  localStorage.setItem("todo-lists", JSON.stringify(allLists));
  renderLists();
  newListInput.value = "";
});

function renderLists() {
  listContainer.innerHTML = "";
  Object.keys(allLists).forEach(list => {
    const li = document.createElement("li");

    const nameBtn = document.createElement("button");
    nameBtn.textContent = list;
    nameBtn.onclick = () => {
      localStorage.setItem("currentList", list);
      window.location.href = "list.html";
    };

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";
    delBtn.onclick = () => {
      delete allLists[list];
      localStorage.setItem("todo-lists", JSON.stringify(allLists));
      renderLists();
    };

    li.appendChild(nameBtn);
    li.appendChild(delBtn);
    listContainer.appendChild(li);
  });
}

renderLists();

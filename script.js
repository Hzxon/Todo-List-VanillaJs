const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

inputBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("Empty Task!");
  } else {
    const li = document.createElement("li");
    li.textContent = inputBox.value.trim();
    listContainer.appendChild(li);

    const span = document.createElement("span");
    span.textContent = "\u00d7";
    span.className = "delete";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  const saved = localStorage.getItem("data");
  listContainer.innerHTML = saved || "";
}

showData();

import addTask from "./addTask";
import tasks from "./tasks";
// Selector for Adding Task

const title = document.getElementById("add-title");
const addBtn = document.getElementById("add-btn");
const startBtn = document.getElementById("start");
const time = document.getElementById("add-time");
const date = document.getElementById("add-date");

setInterval(() => {
  time.innerHTML = new Date().toLocaleString();
}, 1000);

addBtn.addEventListener("click", function () {
  let titleValue = title.value;
  addTask(titleValue);
});

// startTimer(1);

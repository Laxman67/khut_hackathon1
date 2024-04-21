import tasks from "./tasks";

let taskContainer = document.getElementById("tasks-container");

for (let i = 0; i < tasks.length; i++) {
  let task = tasks[i];

  taskContainer.innerHTML += `<div id="task" data-id =${task.id}>
    <input class="title" value="${task.title}"  />
    <span class="time">${task.hour}:${task.minute}:${task.second}</span>
    <span class="date">${task.date} </span>
    <div class="btn">
        <button id="start" class="start">Start</button>
        <button class="stop">Stop</button>
        <button class="reset">Reset</button>
    </div>
    </div>`;
}

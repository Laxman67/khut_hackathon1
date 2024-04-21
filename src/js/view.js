import tasks from "./tasks";

console.log("fro biew ");
console.log(tasks);

let taskContainer = document.getElementById("tasks-container");

for (let i = 0; i < tasks.length; i++) {
  let task = tasks[i];
  taskContainer.innerHTML += `<div id="task" data-id =${task.id}>
    <input class="title" value="${task.title}" disabled />
    <span class="time">${task.hour}:${task.minute}:${task.second}</span>
    <span class="date">${task.date} </span>
    <div class="btn">
        <button class="start">Start</button>
        <button class="stop">Stop</button>
        <button class="reset">Reset</button>
    </div>
    </div>`;
}

// function renderTasks() {
//   let template = function (title, date, hour, second, minute) {
//     let taskContainer = document.getElementById("task-container");

//     taskContainer.innerHTML += ` <div id="task">
//     <input class="title" value="${title}" disabled />
//     <span class="time">${hour}:${minute}:${second}</span>
//     <span class="date">${date}</span>
//     <div class="btn">
//         <button class="start">Start</button>
//         <button class="stop">Stop</button>
//         <button class="reset">Reset</button>
//     </div>
//     </div>`;
//   };

//   tasks.forEach((task) =>
//     template(task.title, task.date, task.hour, task.second, task.minute)
//   );
// }

// renderTasks();

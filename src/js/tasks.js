// Setting initial Tasks

localStorage.setItem(
  "1",
  JSON.stringify({
    id: 1,
    title: "Shopping for marriage Anniversry",
    date: new Date(),
    second: 52,
    minute: 59,
    hour: 0,
  })
);

localStorage.setItem(
  "2",
  JSON.stringify({
    id: 2,
    title: "Painting House",
    date: new Date(),
    second: 0,
    minute: 0,
    hour: 0,
  })
);

let tasks = [];

// Pushing  into tasks
for (let i = 1; i < localStorage.length; i++) {
  tasks.push(JSON.parse(localStorage.getItem(i)));
}

console.log(` from taks ${tasks}`);

export default tasks;

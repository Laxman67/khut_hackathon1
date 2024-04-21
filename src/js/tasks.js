// Setting initial Tasks

localStorage.setItem(
  1,
  JSON.stringify({
    id: 1,
    title: "Creating Bakend Application Email,Alert",
    date: new Date("21 March 2024").toLocaleDateString(),
    second: 52,
    minute: 59,
    hour: 0,
  })
);

localStorage.setItem(
  2,
  JSON.stringify({
    id: 2,
    title: "Blueprint of ChatGPT",
    date: new Date("3 April 2024").toLocaleDateString(),
    second: 0,
    minute: 0,
    hour: 0,
  })
);

let tasks = [];

// Getting and Pushing  into tasks
for (let i = 1; i <= localStorage.length; i++) {
  tasks.push(JSON.parse(localStorage.getItem(i)));
}

// exporing using ES
export default tasks;

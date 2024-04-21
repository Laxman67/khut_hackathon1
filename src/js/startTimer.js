import tasks from "./tasks";

function startTimer(id) {
  let tasktoUpdate = tasks.filter((task) => task.id == id);

  let second = tasktoUpdate[0].second;
  let minute = tasktoUpdate[0].minute;
  let hour = tasktoUpdate[0].hour;

  setInterval(() => {
    if (second > 59) {
      second = 0;
      minute += 1;
      if (minute > 59) {
        minute = 0;
        hour += 1;
      }
    }

    second += 1;

    tasks.map((task) => {
      if (task.id == id) {
        localStorage.setItem(
          id,
          JSON.stringify({
            ...task,
            second: second,
            minute: minute,
            hour: hour,
          })
        );
      }
    });

    console.log(` ${hour}:${minute}: ${second.toString().padStart(2, "0")}`);
  }, 1000);
}

export default startTimer;

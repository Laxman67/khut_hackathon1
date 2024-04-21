function addTask(title) {
  // Lenght of LocalStorage
  let lengthOfStorage = localStorage.length;

  // Set new Item
  localStorage.setItem(
    lengthOfStorage + 1, //key

    JSON.stringify({
      //value that should be stringified
      id: lengthOfStorage,
      title: title,
      date: new Date(),
      second: 0,
      minute: 0,
      hour: 0,
    })
  );
}

export default addTask;

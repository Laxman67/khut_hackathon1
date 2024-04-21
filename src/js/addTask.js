function addTask(title) {
  if (title === "") {
    alert("Enter Title before adding ");
    return;
  } else {
    // Lenght of LocalStorage
    let lengthOfStorage = localStorage.length + 1;

    // Set new Item
    localStorage.setItem(
      lengthOfStorage, //key

      JSON.stringify({
        //value that should be stringified
        id: lengthOfStorage,
        title: title,
        date: new Date().toLocaleDateString(),
        second: 0,
        minute: 0,
        hour: 0,
      })
    );
  }
}

export default addTask;

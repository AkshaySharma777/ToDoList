function currentDateAndTime() {
  var dateOutput = document.getElementById("date");
  var date = new Date();
  const n = date.toDateString();
  const time = date.toLocaleTimeString();
  dateOutput.innerHTML = `${n} <br> ${time}`;
  let interval = setInterval("currentDateAndTime()", 1000);
}
currentDateAndTime();

var counter = 0;
var newTask = document.getElementById("newTask");
newTask.addEventListener("click", () => {
  let background = document.getElementById("background");
  let item = document.createElement("div");
  item.classList.add("list");
  item.dataset.taskId = counter++;

  let tickBox = document.createElement("input");
  tickBox.setAttribute("type", "checkbox");
  tickBox.classList.add("check");

  let h1 = document.createElement("h1");
  h1.innerHTML = "Add new task";
  h1.className = "test";


  let buttonsHolder = document.createElement("div");

  let editButton = document.createElement("button");
  editButton.setAttribute("id", "edit");
  editButton.innerHTML = "<i class='fa-solid fa-pen'></i>";

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<i class='fa-solid fa-trash-can'></i>";

  buttonsHolder.append(editButton, deleteButton);
  item.append(tickBox, h1, buttonsHolder);
  background.append(item);
   
  tickBox.addEventListener('change', () => {
    let task = document.querySelector(`[data-task-id="${item.dataset.taskId}"]`);
    let checkbox = task.querySelector('.check');
    let testing = task.querySelector('.test');

    if(checkbox.checked) {
        testing.classList.add('strikeThrough');
    }
    else {
        testing.classList.remove('strikeThrough');
    }

  });

  editButton.addEventListener('click', () => {
    if (h1.contentEditable === 'true') {
        h1.contentEditable = 'false';
        editButton.innerHTML = "<i class='fa-solid fa-pen'></i>";
    } else {
        h1.contentEditable = 'true';
        editButton.innerHTML = "<i class='fa-solid fa-circle-check fa-beat'></i>";
    }

});

deleteButton.addEventListener('click', () => {
    item.remove();
});

})



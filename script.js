const taskForm = document.querySelector("#taskForm");

taskForm.addEventListener("submit", ontaskFormSubmit);

function ontaskFormSubmit(event) {
  event.preventDefault();

  const taskList = document.querySelector(".tasks");
  const taskInput = taskForm.querySelector("input");

  if (!taskInput.value) {
    alert("Complete!");
    return;
  }

  const newItem = document.createElement("li");
  newItem.innerText = taskInput.value;
  newItem.classList.add("task");

  newItem.addEventListener("click", () => {
    newItem.remove();
  });

  taskList.append(newItem);

  taskInput.value = "";
}

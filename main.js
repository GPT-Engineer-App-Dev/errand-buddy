document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("new-task").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
  loadTasks();
});

function addTask() {
  const taskInput = document.getElementById("new-task");
  const task = taskInput.value.trim();
  if (task !== "") {
    const taskList = document.getElementById("task-list");
    const li = document.createElement("li");
    li.textContent = task;
    li.className = "mb-2";
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.className = "text-red-500 ml-2";
    deleteBtn.onclick = function () {
      this.parentNode.remove();
      saveTasks();
    };
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
    saveTasks();
  }
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#task-list li").forEach(function (taskItem) {
    tasks.push(taskItem.textContent.slice(0, -1)); // Remove the delete icon text
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.forEach(function (task) {
    const taskList = document.getElementById("task-list");
    const li = document.createElement("li");
    li.textContent = task;
    li.className = "mb-2";
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.className = "text-red-500 ml-2";
    deleteBtn.onclick = function () {
      this.parentNode.remove();
      saveTasks();
    };
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// app.js

let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task !== "") {
        tasks.push(task);
        taskInput.value = "";
        alert("Task added successfully!");
    } else {
        alert("Please enter a valid task!");
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = "No tasks available.";
    } else {
        tasks.forEach((task, index) => {
            taskList.innerHTML += `<p>${index + 1}. ${task}</p>`;
        });
    }
}

function removeTask() {
    const taskList = document.getElementById('taskList');
    const taskIndex = prompt("Enter the task number to remove:");

    if (taskIndex !== null && taskIndex !== "") {
        const index = parseInt(taskIndex) - 1;

        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, 1);
            alert("Task removed successfully!");
        } else {
            alert("Invalid task number!");
        }
    }
}

function quitApp() {
    alert("Quitting Task Application. Goodbye!");
    // Additional cleanup or exit logic can be added here if needed.
}

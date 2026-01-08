//Temporarily store to-dos
let todos = [];

// Function to add a new task
function addanewtask() {
    const taskInput = document.getElementById('todo-input');
    const dateInput = document.getElementById('todo-date');

    if (!taskInput.value === '' || !dateInput.value === '') {
        alert('Please fill in both the task and date fields.');
        return;
    } else {
        const newTask = {
            task: taskInput.value,
            date: dateInput.value,
        };
        todos.push(newTask);

        rendertasks();
       
        // Clear input fields
        taskInput.value = '';
        dateInput.value = '';

    }
}

// Function Render Tasks
function rendertasks() {
    const todoList = document.getElementById('todo-list');

    // Clear existing tasks
    todoList.innerHTML = '';
    // Render each task
    todos.forEach((todo, _) => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">${todo.task} <span class="text-gray-500">${todo.date}</span></p>
        </li>`;
    });
}

// Function to clear all tasks
function clearalltasks() {
    todos = [];
    rendertasks();
}

// Function to Filter Task by Status
function filtertask() {}

// Function to Filter Task by Date
function filtertask() {}
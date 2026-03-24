// Array of tasks
const tasks = [];

// References to necessary HTML elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Event listeners for submission of the task
addBtn.addEventListener('click', function(e) {
	e.preventDefault();
	
	addTask();
});

// Function to add the task to the list
function addTask() {
	const taskRecord = taskInput.value.trim();
	const task = {description: taskRecord, completed: false};
	tasks.push(task);
	
	renderList();
}

// Function to mark the task as completed
function completedTask(index) {
	tasks[index].completed = !tasks[index].completed;

	renderList();
}

// Function to delete the task
function deleteTask(index) {
	tasks.splice(index, 1);
	
	renderList();
}

// Function to render and display the list
function renderList() {
taskList.innerHTML = '';
tasks.sort((a, b) => a.completed - b.completed);
tasks.forEach((task) => {
				const taskItem = document.createElement('li');
				taskItem.classList.add('task-item');
				if(task.completed) {
					taskItem.classList.add('completed');
				}


				const taskDescription = document.createElement('span');
				taskDescription.textContent = task.description;

				const taskCheck = document.createElement('input');
				taskCheck.type = 'checkbox';
				taskCheck.addEventListener('click', () => completedTask(tasks.indexOf(task)));
				taskCheck.checked = task.completed;

				const taskDelete = document.createElement('button');
				taskDelete.textContent = 'delete';
				taskDelete.addEventListener('click', () => deleteTask(tasks.indexOf(task)));


				taskItem.appendChild(taskCheck);
				taskItem.appendChild(taskDescription);
				taskItem.appendChild(taskDelete);
				taskList.appendChild(taskItem);
});
}
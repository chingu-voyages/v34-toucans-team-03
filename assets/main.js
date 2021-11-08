
// Day construction
let today = document.getElementById('current-date')

function dateFormerter(date) {
	let n = date[2]>3?`${date[2]}th`: `${date[2]}`
	let m = `${date[0]} ${n} ${date[1]} ${date[3]}`;

	return m
}

let currentDate = new Date().toString().split(" ");

today.textContent = dateFormerter(currentDate);

// adding new task
const todayNewTaskBtn = document.querySelector('#today-new-task-btn');
const todayNewTaskInput = document.querySelector('#today-new-task-input');

todayNewTaskBtn.addEventListener('click', ()=>{
	let newTask = todayNewTaskInput.value;
	inserter(newElement(newTask));
	todayNewTaskInput.value = '';
})

function newElement(task){
	let newLeble = document.createElement('label');
	newLeble.className = 'custom1';
	newLeble.setAttribute('for', task.split(" ")[0]);
	

	let labelContent = document.createElement('input');
	labelContent.setAttribute('name', `${task.split(" ")[0]}`);
	labelContent.setAttribute('type', 'checkbox');
	labelContent.className ='me-2'
	let labelContentText = document.createTextNode(task);
	newLeble.appendChild(labelContent);
	newLeble.appendChild(labelContentText);
	console.log(newLeble)
	return newLeble;

}

// inert the element to the dom
function inserter(element){
	let lastLabel = document.getElementById('last-label');
	let container = document.getElementById('current-task-container');

	container.insertBefore(element, lastLabel);
}	
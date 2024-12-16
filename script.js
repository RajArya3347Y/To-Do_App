// all the elements we need
const inputField = document.querySelector("#task-input");
const addBtn = document.querySelector("#add-btn");
const taskList = document.querySelector("#display-list");
let checkboxes = document.querySelectorAll(".checkbox");
let deleteIcons = document.querySelectorAll(".delete-icon");
let editIcons = document.querySelectorAll(".edit-Icon");



//new task function
function newTask(taskName) {
	const newTask = document.createElement("li");
	newTask.innerHTML = `
	<div>
		<input type='checkbox' class='checkbox' form="none"> 
		<p>${taskName}</p>
	</div> 
	<div class="icon-buttons">
		<i class="fa-solid fa-pen-to-square edit-icon"></i>
		<i class="fa-solid fa-trash delete-icon"></i>
	</div>
	`;
	return newTask;
}


// functions that are used
function addTask(value) {
	if (value != "") {
		taskList.prepend(newTask(value));
		inputField.value = "";
		reassignCheckboxes();
		reassignDeleteIcons();
		reassignEditIcons();
	}

}

function reassignCheckboxes(){
	checkboxes = document.querySelectorAll('.checkbox');
    
    // Add event listeners to each checkbox
    checkboxes.forEach((checkbox) => {
		let isDone = false;
        checkbox.addEventListener("change", (event) => {
			isDone = !isDone;

			if(isDone === true){
				checkbox.parentElement.lastElementChild.style.textDecoration = "line-through";
			}
			else{
				checkbox.parentElement.lastElementChild.style.textDecoration = "none";
			}
        });
    });
}

function reassignEditIcons(){
	editIcons = document.querySelectorAll(".edit-icon");

	//event listeners to the icons
	editIcons.forEach((editIcon) => {
		let taskName = editIcon.closest("li").querySelector("div:first-child");
		editIcon.addEventListener("click", () => {
			
		});
	});
}

function reassignDeleteIcons(){
	deleteIcons = document.querySelectorAll(".delete-icon");

	//Event listeners
	deleteIcons.forEach((deleteIcon) => {
		const parentItem = deleteIcon.closest("li");
		deleteIcon.addEventListener("click", () =>{
			parentItem.remove();
			reassignCheckboxes();
			reassignDeleteIcons();
			reassignEditIcons();
		})
	})
}




//event listeners

	//to add task
addBtn.addEventListener("click", () => {
	addTask(inputField.value);
});

	// to add task with enter key
inputField.addEventListener("keydown",(e) => {
	if(e.key === "Enter"){
		addTask(inputField.value);
	}
});
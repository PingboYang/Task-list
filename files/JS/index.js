const taskManager = new TaskManager();

function addTask(e){

    const newName=document.querySelector('#name')
    const nameError=document.querySelector('#name-error');
    const hasName=requireField(newName,nameError);

    const newDescription=document.querySelector('#description');
    const descriptionError=document.querySelector('#description-error');
    const hasDescription=requireField(newDescription,descriptionError);

    const newAssigned=document.querySelector('#assigned');
    const assignedError=document.querySelector('#assigned-error');
    const hasAssigned=requireField(newAssigned,assignedError);
    
    const newDueDate=document.querySelector('#dueDate');
    const dueDateError=document.querySelector('#dueDate-error');
    const hasDueDate=requireField(newDueDate,dueDateError);

    const isValid = hasName && hasDescription && hasAssigned && hasDueDate;
    if(isValid){
        taskManager.addTask(newName.value, newDescription.value, newAssigned.value, newDueDate.value);

    }
   
    newName.value="";
    newDescription.value="";
    newAssigned.value="";
    newDueDate.value="";

    taskManager.render();

    

}

function requireField(field, errorField){
    const value = field.value;
    console.log(value);
   
    
    if (value) {
        errorField.classList.add("invisible");
        return true;
    } else {

            errorField.classList.remove("invisible");
            return false;
         }
}


const button = document.getElementById('button');
button.onclick = addTask;
console.log("Hello");


console.log(taskManager.tasks);

console.log(taskManager.currentId);


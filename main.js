// setting up var

let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".plus");
let tasksContainer = document.querySelector(".tasks-content");
let noTasksMsg = document.querySelector(".no-tasks-message");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");



// focus on input field

window.onload = function () {
    theInput.focus();
};


// adding task

theAddButton.onclick = function () {

    //if input empty
    if (theInput.value == "") {

        alert("no value")



    }
    else {

        //remove no task message
        noTasksMsg.remove();


        // creat span element
        let mainSpan = document.createElement("span");


        // creat DELETE button 
        let deleteElement = document.createElement("span");

        // creat the mainSpan text
        let text = document.createTextNode(theInput.value);


        // creat the delete-button text
        let deleteText = document.createTextNode("Delete");

        // add text to mainSpan
        mainSpan.appendChild(text);

        // add class to mainSpan
        mainSpan.classList.add("task-box");

        // add text to delete-button
        deleteElement.appendChild(deleteText);

        // add class to delete-button
        deleteElement.className = "delete";

        // add delete-button to mainSpan
        mainSpan.appendChild(deleteElement);

        // add the task to container
        tasksContainer.appendChild(mainSpan);

        // empty the input
        theInput.value = "";

        // focus on input field
        theInput.focus();

        //calculate tasks
        calculateTasks();


    }
};


document.addEventListener("click", function (e) {

    //delete task
    if (e.target.className == "delete") {


        e.target.parentNode.remove();

        // focus on input field
        theInput.focus();

        calculateTasks()

    }

    // finish task
    if (e.target.classList.contains("task-box")) {

        // toggle class finished(css)
        e.target.classList.toggle("finished");

        calculateTasks()
    }


})


// function to calculate tasks
function calculateTasks() {

    // calculate all tasks
    tasksCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length;



    // calculate completed tasks
    tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length;



    // show no tasks message if container is empty
    if (tasksContainer.children.length == 0) {
        tasksContainer.appendChild(noTasksMsg);
    } else {
        noTasksMsg.remove();
    }
}
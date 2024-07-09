let allTasksinHTML = document.getElementById('myList');
let inputBox = document.getElementById('input_Box');

// Load tasks from local storage on initial load
window.onload = function () {
    let tasks = []
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(task => {
        Element(task);
    });
};

inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        let CurrentTask = inputBox.value;
        Element(CurrentTask);
        inputBox.value = '';

        // Save the new task to local storage
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(CurrentTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});

function Element(CurrentTask) {

    let eachTask = document.createElement("li")
    eachTask.appendChild(document.createTextNode(CurrentTask))

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete"
    eachTask.appendChild(deleteButton);

    let editButton = document.createElement("button");
    editButton.innerHTML = "Edit"
    eachTask.appendChild(editButton);

    allTasksinHTML.appendChild(eachTask);

    deleteButton.addEventListener("click", function () {
        this.parentNode.remove();
        updateTasks()
    });

    editButton.addEventListener("click", function () {
        let listItem = this.parentNode;
        let inputField = document.createElement('input');
        inputField.value = CurrentTask;
        listItem.firstChild.replaceWith(inputField);
        inputField.focus();
        inputField.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                listItem.firstChild.replaceWith(document.createTextNode(inputField.value));
                updateTasks()
            }
        });
    });


    function updateTasks() {
        let updatedTasks = [];
        document.querySelectorAll('#myList li').forEach(item => {
            updatedTasks.push(item.firstChild.textContent || item.firstChild.value); // Ensure text content or input value is captured
        });
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

}

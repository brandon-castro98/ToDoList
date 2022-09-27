let idCounter = 0;
const input = document.querySelector('input[type= "text"]');

userInput.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask();
});

let addTask = () => {
    idCounter++;
    let newValue = input.value;

    list.innerHTML += `
    <div class="tasks-container" id='${idCounter}'>
        <label for="input-task">
            <input type="checkbox" name="input-task">
            ${newValue}
            </label>
            <img src="delete.svg" class="delete-icon">
    </div>`;
    input.value = "";
    updateStats();
};

list.addEventListener("click", (event) => {
    if (event.srcElement.nodeName == "INPUT") {
        updateStats();
    } else if (event.srcElement.nodeName == "IMG") {
        deleteTask(event.srcElement.parentNode.id);
    }
});

let updateStats = () => {
    let element = list.querySelectorAll("div");
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML = `<p>Tareas pendientes: ${element.length} Completadas: ${checkbox.length}</p>`;
};

let deleteTask = (id) => {
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
};

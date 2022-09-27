let idCounter = 0;
const input = document.querySelector('input[type= "text"]');

userInput.addEventListener('submit', (event)=> {
    event.preventDefault();
   addTask(); 
});

let addTask = ()=>{
    idCounter++;
    let newValue = input.value;
    
    list.innerHTML += `
    <div class="tasks-container" id='${idCounter}'>
        <label for="input-task">
            <input type="checkbox" name="input-task">
            ${newValue}
            </label>
            <img src="/delete.svg" class="delete-icon">
    </div>`
    input.value = '';
    updateStats();
};

let updateStats = ()=>{
    let element = list.querySelectorAll('div');
    stats.innerHTML = `<p>Tareas pendientes: ${element.length} Completadas: 3</p>`

};
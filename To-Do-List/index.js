let todos = [];

const input = document.getElementById(`taskInput`);
const subbtn = document.getElementById(`submit`);
const todoList = document.getElementById('list');

subbtn.addEventListener(`click`, addTask);

function addTask(){
    const task = {
        name: input.value.trim(),
        status: false,
    };
    if(task.name === '') return ;
    todos.push(task);
    input.value = '';
    renderTodos();
}

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        if (todo.status) {
            li.classList.add('completed');
        }

        const textSpan = document.createElement('span');
        textSpan.textContent = todo.name;
        li.appendChild(textSpan);

        const statusbttn = document.createElement("button");
        statusbttn.textContent = todo.status ? 'Done' : 'Pending'; // Removed emoji for cleaner look
        statusbttn.addEventListener("click", () => {
            changeStatus(index);
        });

        const deletebtn = document.createElement("button");
        deletebtn.textContent = '🗑️';
        deletebtn.addEventListener("click", () => {
            deleteTodo(index);
        });

        const btnContainer = document.createElement('div');
        btnContainer.appendChild(statusbttn);
        btnContainer.appendChild(deletebtn);
        
        li.appendChild(btnContainer);
        todoList.appendChild(li);
    });
}
function deleteTodo(index){
    todos.splice(index, 1);
    renderTodos();
}

function changeStatus(index){
    todos[index].status = !todos[index].status;
    renderTodos();
}
document.addEventListener("keydown", (event) => {
    const key = event.key;
    if(key === "Enter"){
        event.preventDefault();
        addTask();
    }
});
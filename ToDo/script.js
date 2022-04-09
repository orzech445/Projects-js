const form = document.querySelector(".form");
const input = document.getElementById("input");
const todosUL = document.querySelector(".todos");

const todos = JSON.parse(localStorage.getItem("todos-list"));

if (todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    });
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl = document.createElement("li");

        if (todo && todo.completed) {
            todoEl.classList.add("completed");
        }

        todoEl.innerText = todoText;

        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");

            updateLS();
        });

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            todoEl.remove();

            updateLS();
        });

        todosUL.appendChild(todoEl);

        input.value = "";

        updateLS();
    }
}

function updateLS() {
    const todoEls = document.querySelectorAll("li");

    const todoElTab = [];

    todoEls.forEach((el) => {
        todoElTab.push({
            text: el.innerText,
            completed: el.classList.contains("completed"),
        });
    });

    localStorage.setItem("todos-list", JSON.stringify(todoElTab));
}


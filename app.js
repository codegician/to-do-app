window.onload = function () {
  alert("The window has loaded!");
  onReady();
};

function onReady () {
  const ADD_TODO_FORM = document.getElementById("addToDoForm");
  const NEW_TODO_TEXT = document.getElementById("newToDoText");
  const TODO_LIST = document.getElementById("toDoList");

  ADD_TODO_FORM.addEventListener("submit", event => {event.preventDefault();
    let title = NEW_TODO_TEXT.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');

    checkbox.type = "checkbox";

    newLi.textContent = title;
    newLi.appendChild(checkbox);

    TODO_LIST.appendChild(newLi);

    NEW_TODO_TEXT .value = "";
  });
}

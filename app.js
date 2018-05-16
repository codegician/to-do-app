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

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function(event){TODO_LIST.removeChild(this.parentElement)
    });

    checkbox.type = "checkbox";

    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);

    TODO_LIST.appendChild(newLi);

    //Styling
    newLi.className = "mdl-list__item";
    checkbox.className = "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect";
    deleteBtn.className = "mdl-button mdl-js-button";
    deleteBtn.style.padding = '0';

    NEW_TODO_TEXT .value = "";
  });
}


function onReady () {

  //Empty Array
  let toDos = [];

  //State
  function createNewToDo(){
    const NEW_TODO_TEXT = document.getElementById("newToDoText");

    if(!NEW_TODO_TEXT.value){return; }

    toDos.push({
      title: NEW_TODO_TEXT.value,
      complete: false
    });

    NEW_TODO_TEXT.value = "";

    renderTheUI();
  }

  //UI
  function renderTheUI(){
    const TODO_LIST = document.getElementById("toDoList");

    TODO_LIST.textContent = "";

    toDos.forEach(function(toDo){
      const NEW_LI = document.createElement('li');
      const CHECKBOX = document.createElement('input');
      CHECKBOX.type = "checkbox";

      NEW_LI.textContent = toDo.title;
      TODO_LIST.appendChild(NEW_LI);
      NEW_LI.appendChild(CHECKBOX);
    });
  }

  //Event Listener
  const ADD_TODO_FORM = document.getElementById("addToDoForm");
  ADD_TODO_FORM.addEventListener("submit", event =>{
    event.preventDefault();
    createNewToDo();
  })

  renderTheUI();
}

window.onload = function () {
  onReady();
};

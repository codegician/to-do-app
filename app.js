
function onReady () {
  let id = 0;


  let toDos = [];

  if (localStorage.getItem("toDoData")){
    toDos = JSON.parse(localStorage.getItem("toDoData"));
  } else {
    toDos = [];
  }

  //State
  function createNewToDo(){
    const NEW_TODO_TEXT = document.getElementById("newToDoText");

    if(!NEW_TODO_TEXT.value){return; }

    toDos.push({
      title: NEW_TODO_TEXT.value,
      complete: false,
      id: id
    });

    id++;

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
      const DELETE_BTN = document.createElement('button');
      DELETE_BTN.textContent = "Delete!";

      NEW_LI.textContent = toDo.title;

      TODO_LIST.appendChild(NEW_LI);
      NEW_LI.appendChild(CHECKBOX);
      NEW_LI.appendChild(DELETE_BTN);

      DELETE_BTN.addEventListener("click", event => {
        toDos = toDos.filter(function(item){
          return item.id !== toDo.id;
        })
      renderTheUI();
      });

    });

    //Event Listener
    const ADD_TODO_FORM = document.getElementById("addToDoForm");
    ADD_TODO_FORM.addEventListener("submit", event =>{
      event.preventDefault();
      createNewToDo();
    });


    function isComplete(){
      toDos.complete = !toDos.complete;
        return toDos;
    }

    document.createElement('input').onclick = function() {
      isComplete();
    }

    //Storing data to localStorage
    let toDosStr = JSON.stringify(toDos);
    localStorage.setItem("toDoData", toDosStr);

  }
    renderTheUI();
}


window.onload = function () {
  onReady();
};

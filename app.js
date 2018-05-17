
function onReady () {
  let id = 0;


  let toDos = [];
  let toDosStr = JSON.stringify(toDos);


  if (localStorage !== null){
    localStorage.getItem(JSON.parse(toDosStr))
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
    const CHECKBOX = document.createElement('input');
    CHECKBOX.type = "checkbox";
    TODO_LIST.textContent = "";

    toDos.forEach(function(toDo){
      const NEW_LI = document.createElement('li');

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

    function isComplete(){
      toDos.complete = !toDos.complete;
      //console.log(JSON.stringify(toDos))
      return toDos;
    }

    //Event Handler for Checkbox
    CHECKBOX.onclick = function() {
      isComplete();
    }
    localStorage.setItem("toDoStr", toDosStr);
    });
  }
    renderTheUI();
}


window.onload = function () {
  onReady();
};

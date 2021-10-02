function populateTodoList(todos) {
  
  let uList = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  
  todos.forEach((object) => {
    
    let li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = object.task;
    
    let span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";
    
    let iCheck = document.createElement("i");
    iCheck.className = "fa fa-check";
    iCheck.ariaHidden = true;
    
    let iTrash = document.createElement("i");
    iTrash.className = "fa fa-trash";
    iTrash.ariaHidden = true;
    
    span.appendChild(iCheck);
    span.appendChild(iTrash);
    li.appendChild(span);
    uList.appendChild(li);

    iCheck.addEventListener("click", checkUncheck);      

    function checkUncheck() {     
    
      li.style.textDecoration !== "line-through"
     ?  li.style.textDecoration = "line-through"
     :  li.style.textDecoration = "none";
      
    }

    iTrash.addEventListener("click", removeList);

    function removeList() {
      uList.removeChild(li);
    }

  });

  
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  todos.input = document.getElementById("todoInput");
  todos[input.value] = "manger";

  
  
}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}

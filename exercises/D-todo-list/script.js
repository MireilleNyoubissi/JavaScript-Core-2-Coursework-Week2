function todoList(todos) {
  
  let content = document.getElementById("content");
  
  let ul = document.createElement("ul");
  content.appendChild(ul);
  
  todos.forEach((element) => {
    
    let li = document.createElement("li");
    let text = document.createTextNode(element.todo);
    
    li.appendChild(text);
    ul.appendChild(li);
    
    li.addEventListener("click", check);
    
    function removeLineThrough() {
      li.style.textDecoration = "none";
    }
    
    function lineThrough() {
      li.style.textDecoration = "line-through";
    }
    
    function check() {
      if ((li.style.textDecoration = "line-through")) {
        li.addEventListener("click", removeLineThrough);
      } else {
        li.addEventListener("click", lineThrough);
      }
    }     
  });  
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);
/*
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
https://www.w3schools.com/jsref/prop_style_textdecoration.asp
*/


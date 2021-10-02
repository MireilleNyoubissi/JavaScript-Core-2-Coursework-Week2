// let divElement = document.getElementById("content");
// let uList = document.createElement("ul");


// function todoList(todos) {
//   // Write your code here...
//   todos.forEach(item => {
//     let list = document.createElement("li");
//     uList.appendChild(list);

//     list.innerHTML = item.todo; 
//     list.addEventListener("click", modifiedText);

//   })
 
//   divElement.appendChild(uList); 

// }

// function modifiedText(){
//  
    if ((list.style.textDecoration = "line-through")) {
      list.addEventListener("click", removeLineThrough);
    } else {
      list.addEventListener("click", lineThrough);
    }
// }

// function removeText() {
//   this.style.textDecoration = "none";
// }


function todoList(todos) {
  let content = document.getElementById("content");
  let ul = document.createElement("ul");
  content.appendChild(ul);
  todos.forEach((element) => {
    let li = document.createElement("li");
    let text = document.createTextNode(element.todo);
    
    li.addEventListener("click", check);
    function removelinethrough() {
      li.style.textDecoration = "none";
    }
    function linethrough() {
      li.style.textDecoration = "line-through";
    }
    
    function check() {
      if ((li.style.textDecoration = "line-through")) {
        li.addEventListener("click", removelinethrough);
      } else {
        li.addEventListener("click", linethrough);
      }
    }
    li.appendChild(text);
    ul.appendChild(li);
  });
  content.appendChild(ul);
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


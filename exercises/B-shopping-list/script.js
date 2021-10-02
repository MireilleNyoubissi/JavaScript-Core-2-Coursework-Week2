function shoppingList(arrayOfPeople) {
  // Write your code here...
  
  
  arrayOfPeople.forEach(item => {

    let divEl = document.getElementById("content");

    let uList = document.createElement("ul");
    let listEl = document.createElement("li");

    listEl.textContent = item;
    uList.appendChild(listEl);
    divEl.appendChild(uList);

  })
  
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);

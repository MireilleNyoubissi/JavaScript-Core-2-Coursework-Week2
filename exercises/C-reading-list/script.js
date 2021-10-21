function readingList(books) {
  // Write your code here...

  let divElement = document.getElementById("content");
  let uList = document.createElement("ul");
  let h1 = document.createElement("h1");
  h1.textContent = "Book List";
  divElement.appendChild(h1);
  
  


  books.forEach(book => {
    let list = document.createElement("li");
      
    
    book.alreadyRead
      ? (list.style.backgroundColor = "green")
      : (list.style.backgroundColor = "red");    

    let pElement = document.createElement("p");
    pElement.textContent = `${book.title} - ${book.author}`;

 
    

    const image = document.createElement("img");
    image.src = book.src;
    image.style.width = "50%";
    list.style.width = "20%";
    list.style.margin = "20px 0 0 20px";
    list.style.listStyle = "none";
    
    

    
    divElement.appendChild(uList);
    uList.appendChild(list); 
    list.appendChild(pElement); 
    list.appendChild(image);
    
  })
  uList.style.display = "flex";
  uList.style.flexFlow = "row noWrap";
  
}



const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    src: 'https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg',
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    src: 'https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg',
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    src:'https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg',
    alreadyRead: true
  }
];



readingList(books);
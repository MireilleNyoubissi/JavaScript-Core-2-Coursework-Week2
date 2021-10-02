function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(person => {
    
    let h1El = document.createElement("h1");
    let h2El = document.createElement("h2");

    h1El.textContent = person.name;
    h2El.textContent = person.job;

    content.appendChild(h1El);
    content.appendChild(h2El);

  })
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);

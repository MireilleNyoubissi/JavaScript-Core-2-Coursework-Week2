function listOfColours(colours) {
    
  let divElement = document.getElementById("content");
  let selectElement = document.createElement("select");
  let pElement = document.createElement("p");
  divElement.appendChild(selectElement);

    colours.forEach(colour => {
      let option = document.createElement("option");
      option.textContent = colour;
      selectElement.appendChild(option);
    });

  selectElement.addEventListener("click", eventP);

  function eventP(onClick) {
    pElement.textContent = `you have selected: ${onClick.target.value}`;
    pElement.style.color = onClick.target.value;
    divElement.appendChild(pElement);
  }


}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];


listOfColours(colours);

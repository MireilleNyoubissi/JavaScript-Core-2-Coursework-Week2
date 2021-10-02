function buttonClick() {

    let jumbotron = document.getElementsByClassName("jumbotron");
    let blueBtn = document.getElementById("blueBtn");
    let orangeBtn = document.getElementById("orangeBtn");
    let greenBtn = document.getElementById("greenBtn");

    let volunteerBtn = document.getElementsByClassName( "btn btn-secondary btn-lrg"
    );
   let arrVolunteerBtn = Array.from(volunteerBtn);

    
    console.log(volunteerBtn);
    let donateBtn = document.getElementsByClassName("btn btn-primary btn-lrg");
    let arrDonateBtn = Array.from(donateBtn);

    let jumboArr = Array.from(jumbotron);
    jumboArr.forEach((element) => console.log(element));
    

    


   blueBtn.addEventListener("click", blueClicked);

   function blueClicked(){
       jumboArr.forEach(
         (element) => (element.style.backgroundColor = "#588fbd")         
       );
       arrDonateBtn.forEach(
         (element) => (element.style.backgroundColor = "#ffa500")
       );
       arrVolunteerBtn.forEach(
         (element) => {
             element.style.backgroundColor = "black";
             element.style.color = "white";
         }
       );

   }

    orangeBtn.addEventListener("click", orangeClicked);

    function orangeClicked() {
      jumboArr.forEach(
        (element) => (element.style.backgroundColor = "#f0ad4e")
      );
      arrDonateBtn.forEach(
        (element) => (element.style.backgroundColor = "#5751fd")
      );
      arrVolunteerBtn.forEach((element) => {
        element.style.backgroundColor = "#31b0d5";
        element.style.color = "white";
      });
    }

     greenBtn.addEventListener("click", greenClicked);

     function greenClicked() {
       jumboArr.forEach(
         (element) => (element.style.backgroundColor = "#87ca8a")
       );
       arrDonateBtn.forEach(
         (element) => (element.style.backgroundColor = "black")
       );
       arrVolunteerBtn.forEach((element) => {
         element.style.backgroundColor = "#8c9c08";
       });
     }
}


buttonClick();

let submit = document.getElementsByClassName("btn btn-primary");
 let arrSubmitBtn = Array.from(submit);
 arrSubmitBtn.forEach(element => {
     element.addEventListener("click", submitBtn);
 });


function submitBtn() {
    let emailInput = document.getElementById("exampleInputEmail1");
    
    if(emailInput.value.length === 0 || !emailInput.value.includes("@")){
        emailInput.style.backgroundColor = "red";        
    }

    let nameInput = document.getElementById("example-text-input");
    
    if (nameInput.value.length === 0) {
      nameInput.style.backgroundColor = "red";
    }

    let describeInput = document.getElementById("exampleTextarea");
    if (describeInput.value.length === 0) {
        describeInput.style.backgroundColor = "red";
    }

    
    alert("Thank you for filling out the form");
    nameInput.value = "";
    emailInput.value = "";
    describeInput.value = "";
    
      
    event.preventDefault();


}


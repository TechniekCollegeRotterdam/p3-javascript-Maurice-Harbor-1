let button = document.getElementById("signUp");
let container = document.getElementById("container");
let inputName = document.getElementById("fullName");
let inputEmail = document.getElementById("email");
let inputNumber = document.getElementById("phoneNumber");   

let p = document.getElementsByClassName("paragraph")[0];
let title = document.getElementsByClassName("title")[0];

let signInContainer = document.getElementsByClassName("sign-in-container")[0];
let signUpContainer = document.getElementsByClassName("sign-up-container")[0];

const img = document.createElement("img");


button.addEventListener("click", function(e) {
    let value1 = inputName.value1;
    title.innerText = "Welkom " + inputName.value;

    let value2 = inputEmail.value2;
    p.innerHTML = "U heeft een bevestiging ontvangen op: " + inputEmail.value;

    const para = document.createElement("p");
    let value3 = inputNumber.value3;
    para.innerHTML = "Ter verificatie sturen wij een bericht naar: " + inputNumber.value;
    document.getElementsByClassName("overlay-right")[0].appendChild(para);


    signInContainer.style.display = "flex";
    signUpContainer.style.display = "none";

    e.preventDefault();
});





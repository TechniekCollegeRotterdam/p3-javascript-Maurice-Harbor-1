let antwoord = document.getElementById("antwoord");
let getal1 = document.getElementById("getal1");
let getal2 = document.getElementById("getal2");

// calc1
function add() {
    antwoord.innerText = number(getal1.value) + number(getal2.value);
};

function minus() {
    antwoord.innerText = getal1.value - getal2.value;
};


function multiply() {
    antwoord.innerText = getal1.value * getal2.value;
};

function devide() {
    antwoord.innerText = getal1.value / getal2.value;
};
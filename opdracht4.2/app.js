let antwoord = document.getElementById("antwoord");
let getal1 = document.getElementById("getal1");
let getal2 = document.getElementById("getal2");


// calc 2
function add() {
    antwoord.innerText = Number(getal1.value) + Number(getal2.value);
    if(getal1.value <=0  getal2.value <=0) {
        antwoord.innerText = "getal te laag";
    }
};

function minus() {
    antwoord.innerText = getal1.value - getal2.value;
    if(getal1.value <=0  getal2.value <=0) {
        antwoord.innerText = "getal te laag";
    }
};


function multiply() {
    antwoord.innerText = getal1.value * getal2.value;
    if(getal1.value <=0  getal2.value <=0) {
        antwoord.innerText = "getal te laag";
    }
};

function devide() {
    antwoord.innerText = getal1.value / getal2.value;
    if(getal1.value <=0  getal2.value <=0) {
        antwoord.innerText = "getal te laag";
    }
};


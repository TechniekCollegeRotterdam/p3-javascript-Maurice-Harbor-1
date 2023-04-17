let getal = prompt("Hoeveel?");
let budget = 100;

if (getal > budget) {
    document.getElementById("text").innerHTML = "Je hebt genoeg";
    document.getElementById("text").style.color = "green";
}

else {
    document.getElementById("text").innerHTML = "Je hebt te weinig";
    document.getElementById("text").style.color = "red";
}
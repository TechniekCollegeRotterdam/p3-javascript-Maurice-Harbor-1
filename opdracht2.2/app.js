let title = document.getElementById("title");
let button = document.getElementById("button");

document.getElementById("button").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("title").style.color = "gold";
}
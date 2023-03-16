let button = document.getElementById("addToDo")
let input = document.getElementById("inputField")
let container = document.getElementById("toDoContainer")

button.addEventListener("click", function() {
    let value = input.value

    let p = document.createElement("p")
    container.appendChild(p)
    p.innerText = input.value

    input.value = "";

    p.addEventListener("click", function(){
        p.style.textDecoration = "line-through";
    })
    
    p.addEventListener("dblclick", function(){
        container.removeChild(p);
    })
})


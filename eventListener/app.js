let button = document.getElementById("btn");

window.addEventListener("keydown", function(e){
    console.log(e.key)

    if(e.key == 'h'){
        console.log("Kingdom Hearts is the Best Game")
    } else{
        console.log("Wrong Key")
    }
})

window.addEventListener("mousemove", function(e){
    console.log(e.clientX)

    if(e.clientX == 0){
        console.log("to the side, to the side")
    }
})



// let button = document.getElementById("btn");
// let block = document.getElementById("block");

// block.addEventListener("mouseover", function(){
//     block.classList.add("highlight");
// });

// block.addEventListener("mouseleave", function(){
//     block.classList.remove("highlight");
// });

let nav = document.getElementById("nav");

document.body.addEventListener('mousemove', function(e) { 
   
    if(e.clientX == 0){
        nav.classList.add("show-nav");
    }else if(e.clientX == 222){
        nav.classList.add("remove-nav");
    }
});


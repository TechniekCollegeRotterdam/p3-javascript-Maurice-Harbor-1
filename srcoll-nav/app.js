
let lastScrollY = window.scrollY

window.addEventListener('scroll', function(e) {

    if(window.scrollY > lastScrollY){
        nav.classList.add("hide");
    }else {
        nav.classList.remove("hide");
    }
});

console.log(window.scrollY);


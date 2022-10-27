let show = true;
let show1 = true; 
let show2 = true;  

const menuSection = document.querySelector(".cabecalho")
const menuToggle = menuSection.querySelector(".menu-toggle")
const homeSection = document.querySelector(".home")
const logoSection = document.querySelector(".logo-responsive")

menuToggle.addEventListener("click", () => {

    menuSection.classList.toggle("on", show)
    show = !show;

    homeSection.classList.toggle("on", show1)
    show1 = !show2;

    logoSection.classList.toggle("off", show2)
    show2 = !show2;

})
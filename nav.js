const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

const navClass = nav.className;
let active = false;

hamburger.addEventListener("click", () =>{
    active = !active;
    nav.className = active
    ? `${navClass} active`
    : `${navClass} not-active` 
});
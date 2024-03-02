const barDeMenu=document.querySelector("#barre");
const menu=document.querySelector("#menu");
const body=document.querySelector("body");
const moon=document.querySelector("#moon");

barDeMenu.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
});

moon.addEventListener("click", ()=>{
    body.classList.toggle("dark");
  });

var typed = new Typed('#text', {
    strings: ['Developer', 'Designer','Authors'],
    typeSpeed: 150,
    backSpeed:150,
    waitBeforeDelete:2000,
    waitBetweenWords:500,
    deleteSpeed:50,
    loop:true
  });

 
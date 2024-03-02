/*const menuEl=document.querySelector(".nav-item");
const btnEl=document.querySelector(".colscape");

btnEl.addEventListener("click", ()=>{
    menuEl.classList.toggle("none");
    console.log("click")
})*/

const responsive={
    0:{
        items:1
    },
    320:{
        items:1
    },
    500:{
items:2
    },
    960:{
        items:3
    }
}

$(document).ready(function(){
    $(".toggle-collapse").click(function(){
        $(".nav-items").toggle();
        console.log("good");
    })

    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$(".owl-navigation .owl-nav-prev"), $(".owl-navigation .owl-nav-next")],
        responsive:responsive
    });

    $(".move-up span").click(function(){
        $("html,body").animate({
            scrollTop:0
        },1000);
    })

    //aimation

    AOS.init();
})
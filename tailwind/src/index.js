const icons=document.querySelector("#icons");
const menu=document.querySelector("#menu");

icons.addEventListener('click', () =>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
})
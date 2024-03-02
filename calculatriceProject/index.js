const buttonsEl=document.querySelectorAll("button");
const inputEl=document.getElementById("result");

buttonsEl.forEach((items)=>{
    items.addEventListener("click",()=>{
        const valuEl=items.textContent;
        if(valuEl==="C"){
            btnClear();
        }else if(valuEl==="="){
            btnResult();
        }else if(valuEl==="Del"){
            btnDelete()
        }
        else{
            btnCalcul(valuEl);
        }
    })
})



function  btnResult(){
    const calcul= eval(inputEl.value);
    inputEl.value=calcul;
}

function  btnCalcul(valuEl){
    inputEl.value +=valuEl
}

function  btnClear(){
 inputEl.value="";
}

function btnDelete(){
    inputEl.value=inputEl.value.slice(0,-1);
}
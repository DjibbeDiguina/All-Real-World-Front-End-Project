const btnElmt=document.getElementById("btn");
const resultElmt=document.getElementById("bmi-result");
const comment=document.getElementById("weight-condition");



btnElmt.addEventListener("click", (e)=>{
    
    const height=document.getElementById("height").value/100;
    const weight=document.getElementById("weight").value;

    const result= weight/(height*height);

    resultElmt.value=result;
    if (result < 18.5) {
        comment.innerText = "Poids insuffisant" ;
        comment.style.color="yellow"
      } else if (result >= 18.5 && result <= 24.9) {
        comment.innerText = "Poids normal 🏋️‍♀️💪⛹️‍♂️👍💕" ;
        comment.style.color="green"
      } else if (result >= 25 && result <= 29.9) {
        comment.innerText = "Surpoids 😢🧏‍♀️🍗" ;
        comment.style.color="red";
      } else if (result >= 30) {
        comment.innerText = "Obésité 😢🧏‍♀️🍗" ;
        comment.style.color="red";
      }
      

})
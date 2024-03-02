const apiKey="lKrDWikwZrJ7m8K8-Je9sVsbWxzpeW17Jam2ctSvIcE";
const formEl=document.querySelector("form");
const inputEl=document.getElementById("search-input");
const searchResults=document.querySelector(".search-results");
const showMoreEl=document.getElementById("show-more-button");

let valuEl="";
let page=1;


async function checkImg(){
    valuEl=inputEl.value;

    const reponse= await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${valuEl}&client_id=${apiKey}`);
    const data=await reponse.json();
    const dataEl=data.results;
  
    if(page===1){
        searchResults.innerHTML="";
    }
 
    
    const itemEl=dataEl.map((items)=>{

        const searchResultEl=document.createElement("div");
        searchResultEl.classList.add("search-result");
        const imgEl=document.createElement("img");
        imgEl.src=items.urls.raw;
        const linkEl=document.createElement("a");
        linkEl.href=items.links.html;
        linkEl.target="_blank";
        linkEl.textContent=items.alt_description;

        searchResultEl.appendChild(imgEl);
        searchResultEl.appendChild(linkEl);
        searchResults.appendChild( searchResultEl);

        
    })


    page ++;

    if(page>1){
        showMoreEl.style.display="block"
    }
    
  
    
}


formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
   checkImg();
  
});

showMoreEl.addEventListener("click",()=>{
    checkImg();
  
})




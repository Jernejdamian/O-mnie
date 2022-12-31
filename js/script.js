let button = document.querySelector(".button");
let body = document.querySelector(".body");
let fspan = document.querySelector(".fspan");

button.addEventListener("click",()=>{
    body.classList.toggle("changeBody");
    if(fspan.innerText==="WhiteGold"){
        fspan.innerText="BlackGold";
    }else{
        fspan.innerText="BASIC";
    }
})
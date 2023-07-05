
const button=document.querySelector(".card button");
const data=document.querySelector(".card .data");
const country=["India","Pakistan","Bangladesh"];

function showdata(){
    let verifyCountry="";
country.reverse().map((data, index)=>{  
    verifyCountry+=`<h2>${index+1}. ${data}</h2>`
})
data.innerHTML=verifyCountry
}


button.onclick = () => {
   const newCountry=button.previousElementSibling.value ;
    country.push(newCountry);
    showdata()
    button.previousElementSibling.value=""
}

showdata()

const search =
document.getElementById("search");


const cards =
document.querySelectorAll(".card");


search.addEventListener(
"input",
function(){

let text =
search.value.toLowerCase();


cards.forEach(card=>{

let content =
card.innerText.toLowerCase();


if(content.includes(text)){

card.style.display="block";

}

else{

card.style.display="none";

}

});


});
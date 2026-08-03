
const params =
new URLSearchParams(
window.location.search
);


const file =
params.get("file");


const title =
document.getElementById("title");


const content =
document.getElementById("content");



console.log("Ładowany plik:", file);



if(!file){

content.innerHTML =
"Nie podano instrukcji.";

}

else{


fetch(file)


.then(response => {


if(!response.ok){

throw new Error(
"Nie znaleziono pliku: " + file
);

}


return response.text();


})


.then(markdown => {


console.log(
"Treść MD:",
markdown
);



if(typeof marked === "undefined"){

throw new Error(
"Nie załadowano biblioteki Markdown"
);

}



content.innerHTML =
marked.parse(markdown);



title.innerText =
file
.split("/")
.pop()
.replace(".md","")
.replaceAll("-"," ");



})


.catch(error => {


content.innerHTML =
"Błąd: " + error;


});


}

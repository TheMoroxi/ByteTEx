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



fetch(file)

.then(response =>
response.text()
)

.then(markdown => {


content.innerHTML =
marked.parse(markdown);


title.innerText =
file
.split("/")
.pop()
.replace(".md","");


})

.catch(()=>{


content.innerHTML =
"Nie znaleziono instrukcji";


});
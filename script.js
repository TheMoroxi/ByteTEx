fetch("manuals.json")

.then(response => response.json())

.then(manuals => {


const container =
document.getElementById("manuals");


manuals.forEach(manual => {


const card = document.createElement("div");

card.className = "card";

card.dataset.category = manual.category;


card.innerHTML = `

<h3>${manual.title}</h3>

<p>
${manual.description}
</p>

<a href="manual.html?file=${manual.file}">
Czytaj →
</a>

`;


container.appendChild(card);


});


})

.catch(error => {

console.log("Błąd JSON:", error);

});
const search = document.getElementById("search");


search.addEventListener("input", function(){

    const text = this.value.toLowerCase();

    const cards = document.querySelectorAll(".card");


    cards.forEach(card => {

        const content = card.innerText.toLowerCase();


        if(content.includes(text)){

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

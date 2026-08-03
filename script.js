let manuals = [];

const container = document.getElementById("manuals");


// Ładowanie JSON

fetch("manuals.json")

.then(response => response.json())

.then(data => {

    manuals = data;

    loadCards(manuals);


    // sprawdzenie czy jest wyszukiwanie w URL

    const params = new URLSearchParams(window.location.search);

    const searchText = params.get("search");


    if(searchText){

        document.getElementById("search").value = searchText;

        searchCards(searchText);

    }


});



// tworzenie kart

function loadCards(list){


    container.innerHTML = "";


    list.forEach(manual => {


        container.innerHTML += `

        <div class="card" data-category="${manual.category}">

            <h3>${manual.title}</h3>

            <p>${manual.description}</p>

            <a href="manual.html?file=${manual.file}">
            Czytaj →
            </a>

        </div>

        `;


    });


}



// wyszukiwanie

function searchCards(text){


    const cards = document.querySelectorAll(".card");

    text = text.toLowerCase();


    cards.forEach(card=>{


        if(card.innerText.toLowerCase().includes(text)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }


    });


}



// pole wyszukiwania

document.getElementById("search").addEventListener("input", function(){


    let value = this.value;


    history.replaceState(
        null,
        "",
        value ? "?search=" + value : "index.html"
    );


    searchCards(value);


});
function showAll(){

    document.getElementById("search").value="";

    history.replaceState(
        null,
        "",
        "index.html"
    );

    document.querySelectorAll(".card").forEach(card=>{

        card.style.display="block";

    });

}


function filterCategory(category){

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        if(category === "all"){

            card.style.display = "block";

        }
        else if(card.dataset.category === category){

            card.style.display = "block";

        }
        else{

            card.style.display = "none";

        }

    });

}

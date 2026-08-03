let tools=[];


const container=document.getElementById("tools");


fetch("tools.json")

.then(res=>res.json())

.then(data=>{

tools=data;

loadTools();

});



function loadTools(){


container.innerHTML="";


tools.forEach(tool=>{


container.innerHTML+=`

<div class="card">

<h3>${tool.title}</h3>

<p>
${tool.description}
</p>


<small>
Kategoria: ${tool.category}
</small>

<br><br>


<a href="${tool.file}">
Uruchom →
</a>


</div>

`;


});


}

let score = 0;
let tests = 0;


function addResult(name, status, type){

    const box = document.getElementById("results");

    let icon = "⚠️";

    if(type === "ok"){
        icon = "✅";
        score += 5;
    }

    if(type === "bad"){
        icon = "❌";
    }

    tests++;

    box.innerHTML += `
    <div class="result">
        <span>${icon} ${name}</span>
        <span class="${type}">
        ${status}
        </span>
    </div>
    `;

}



async function startScan(){


score = 0;
tests = 0;


document.getElementById("results").innerHTML="";


/* HTTPS */

if(location.protocol === "https:"){

    addResult(
    "HTTPS",
    "Połączenie szyfrowane",
    "ok"
    );

}
else{

    addResult(
    "HTTPS",
    "Brak HTTPS",
    "bad"
    );

}



/* Secure Context */

if(window.isSecureContext){

    addResult(
    "Secure Context",
    "Aktywny",
    "ok"
    );

}
else{

    addResult(
    "Secure Context",
    "Nieaktywny",
    "warn"
    );

}



/* Cookies */

if(navigator.cookieEnabled){

    addResult(
    "Cookies",
    "Włączone",
    "ok"
    );

}
else{

    addResult(
    "Cookies",
    "Wyłączone",
    "warn"
    );

}



/* LocalStorage */

try{

localStorage.setItem(
"test",
"1"
);

localStorage.removeItem(
"test"
);


addResult(
"LocalStorage",
"Działa poprawnie",
"ok"
);


}
catch{

addResult(
"LocalStorage",
"Zablokowane",
"bad"
);

}



/* IndexedDB */


if(window.indexedDB){

addResult(
"IndexedDB",
"Dostępne",
"ok"
);

}
else{

addResult(
"IndexedDB",
"Brak",
"warn"
);

}




/* WebGL */


let canvas=document.createElement("canvas");

let gl =
canvas.getContext("webgl") ||
canvas.getContext("experimental-webgl");


if(gl){

addResult(
"WebGL GPU",
"Dostępne",
"ok"
);

}
else{

addResult(
"WebGL GPU",
"Brak",
"warn"
);

}





/* WebAssembly */


if(window.WebAssembly){

addResult(
"WebAssembly",
"Wspierane",
"ok"
);

}
else{

addResult(
"WebAssembly",
"Brak",
"warn"
);

}




/* Service Worker */


if("serviceWorker" in navigator){

addResult(
"Service Worker",
"Wspierany",
"ok"
);

}
else{

addResult(
"Service Worker",
"Brak",
"warn"
);

}





/* WebRTC */


if(window.RTCPeerConnection){

addResult(
"WebRTC",
"Aktywny",
"warn"
);

}
else{

addResult(
"WebRTC",
"Wyłączony",
"ok"
);

}





/* Clipboard */


if(navigator.clipboard){

addResult(
"Clipboard API",
"Dostępne",
"ok"
);

}
else{

addResult(
"Clipboard API",
"Brak",
"warn"
);

}





/* Bluetooth */


if(navigator.bluetooth){

addResult(
"Bluetooth API",
"Dostępne",
"warn"
);

}
else{

addResult(
"Bluetooth API",
"Brak",
"ok"
);

}





/* USB */


if(navigator.usb){

addResult(
"USB API",
"Dostępne",
"warn"
);

}
else{

addResult(
"USB API",
"Brak",
"ok"
);

}





/* Permissions */


if(navigator.permissions){

addResult(
"Permissions API",
"Dostępne",
"ok"
);

}
else{

addResult(
"Permissions API",
"Brak",
"warn"
);

}




/* Device info */


let gpu="Nieznane";


if(gl){

let debug =
gl.getExtension(
"WEBGL_debug_renderer_info"
);


if(debug){

gpu =
gl.getParameter(
debug.UNMASKED_RENDERER_WEBGL
);

}

}



document.getElementById("device").innerHTML=`

<b>Przeglądarka:</b><br>
${navigator.userAgent}

<br><br>

<b>Rdzenie CPU:</b>
${navigator.hardwareConcurrency || "brak"}

<br><br>

<b>Pamięć RAM:</b>
${navigator.deviceMemory || "brak"} GB

<br><br>

<b>Rozdzielczość:</b>
${screen.width}x${screen.height}

<br><br>

<b>GPU:</b>
${gpu}

`;





/* wynik */


let finalScore =
Math.min(
100,
score
);


document.getElementById("score")
.innerHTML =
finalScore+" / 100";


document.getElementById("scoreBar")
.style.width =
finalScore+"%";

}

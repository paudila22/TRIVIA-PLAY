const respuestaA6 = document.getElementById("respuesta-A6");
const respuestaA6Texto = respuestaA6.value;

function alertaA6 (){
    alert ("Usted selecciono la respuesta:" +" "+ respuestaA6Texto);
}
respuestaA6.addEventListener("click",alertaA6);

const respuestaB6 = document.getElementById("respuesta-B6");
const respuestaB6TextoB6 = respuestaB6.value;

function alertaB6 (){
    alert ("Usted selecciono la respuesta:" +" "+ respuestaB6TextoB6);
}
respuestaB6.addEventListener("click",alertaB6);

const respuestaC6 = document.getElementById("respuesta-C6");
const respuestaC6TextoC6 = respuestaC6.value;

function alertaC6 (){
    alert("Usted selecciono la respuesta:" +" "+ respuestaC6TextoC6);
}
respuestaC6.addEventListener("click",alertaC6);

const respuestaD6 = document.getElementById("respuesta-D6");
const respuestaD6TextoD6 = respuestaD6.value;

function alertaD6 (){
    alert ("Usted selecciono la respuesta:" +" "+ respuestaD6TextoD6);
}
respuestaD6.addEventListener("click",alertaD6);

const acertado = document.getElementById("respuesta-C6")
const acertado1 = acertado.value;
let notaExamen = 0;

function valor(){
    if(acertado1 == "Reggaeton"){
        window.location = "triviaRESULTADOM.html";
        notaExamen++;
        sessionStorage.setItem("Resultado5", notaExamen);
    }
};
acertado.addEventListener("click",valor);

const desacertado = document.getElementById("respuesta-A6")
const desacertadoA = desacertado.value;
let notaExamenA = 0;

function valorA(){
    if(desacertadoA == "Pop"){
        window.location = "triviaRESULTADOM.html";
        notaExamenA;
        sessionStorage.setItem("Resultado5", notaExamenA);
    }
}
desacertado.addEventListener("click",valorA);

const desacertadoB = document.getElementById("respuesta-B6")
const desacertadoB1 = desacertadoB.value;
let notaExamenB = 0;

function valorB(){
    if(desacertadoB1 == "Vallenato"){
        window.location = "triviaRESULTADOM.html";
        notaExamenB;
        sessionStorage.setItem("Resultado5", notaExamenB);
    };
};
desacertadoB.addEventListener("click",valorB);

const desacertadoD = document.getElementById("respuesta-D6")
const desacertadoD1 = desacertadoD.value;
let notaExamenD = 0;

function valorD(){
    if(desacertadoD1 == "Salsa"){
        window.location = "triviaRESULTADOM.html";
        notaExamenD;
        sessionStorage.setItem("Resultado5", notaExamenD);
    };
};
desacertadoD.addEventListener("click",valorD);

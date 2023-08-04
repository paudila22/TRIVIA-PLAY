const respuestaA = document.getElementById("respuesta-A");
const respuestaATexto = respuestaA.value;

function alertaA (){
    alert ("Usted selecciono la respuesta:" +" "+ respuestaATexto);
}
respuestaA.addEventListener("click",alertaA);

const respuestaB = document.getElementById("respuesta-B");
const respuestaBTextoB = respuestaB.value;

function alertaB (){
    alert ("Usted selecciono la respuesta:" +" "+ respuestaBTextoB);
}
respuestaB.addEventListener("click",alertaB);

const respuestaC = document.getElementById("respuesta-C");
const respuestaCTextoC = respuestaC.value;

function alertaC (){
    alert ("Usted selecciono la respuesta:" +" "+ respuestaCTextoC);
}
respuestaC.addEventListener("click",alertaC);

const respuestaD = document.getElementById("respuesta-D");
const respuestaDTextoD = respuestaD.value;

function alertaD (){
    alert ("Usted selecciono la respuesta:" +" "+ respuestaDTextoD);
}
respuestaD.addEventListener("click",alertaD);


const acertado = document.getElementById("respuesta-A")
const acertadoA = acertado.value;
let notaExamen = 0;

function valor(){
    if(acertadoA == "Lechuza"){
        window.location = "trivia(p3).html";
        notaExamen++;
        sessionStorage.setItem("Resultado", notaExamen);
    }
}
acertado.addEventListener("click",valor);

const desacertado = document.getElementById("respuesta-B")
const desacertadoB = desacertado.value;
let notaExamenB = 0;

function valorB(){
    if(desacertadoB == "Búho"){
        window.location = "trivia(p3).html";
        notaExamenB;
        sessionStorage.setItem("Resultado", notaExamenB);
    };
};
desacertado.addEventListener("click",valorB);

const desacertadoC = document.getElementById("respuesta-C")
const desacertadoC1 = desacertadoC.value;
let notaExamenC = 0;

function valorC(){
    if(desacertadoC1 == "Aguila"){
        window.location = "trivia(p3).html";
        notaExamenC;
        sessionStorage.setItem("Resultado", notaExamenC);
    };
};
desacertadoC.addEventListener("click",valorC);

const desacertadoD = document.getElementById("respuesta-D")
const desacertadoD1 = desacertadoD.value;
let notaExamenD = 0;

function valorD(){
    if(desacertadoD1 == "Tecolote"){
        window.location = "trivia(p3).html";
        notaExamenD;
        sessionStorage.setItem("Resultado", notaExamenD);
    };
};
desacertadoD.addEventListener("click",valorD);
















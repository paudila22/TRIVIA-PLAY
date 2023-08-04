const respuestaA1 = document.getElementById("respuesta-A1");
const respuestaA1Texto = respuestaA1.value;

function alertaA1 (){
    alert ("Usted selecciono la respuesta:" + " " + respuestaA1Texto);
}
respuestaA1.addEventListener("click",alertaA1);

const respuestaB1 = document.getElementById("respuesta-B1");
const respuestaB1TextoB1 = respuestaB1.value;

function alertaB1 (){
    alert("Usted selecciono la respuesta:" + " " + respuestaB1TextoB1);
}
respuestaB1.addEventListener("click", alertaB1);

const respuestaC1= document.getElementById("respuesta-C1");
const respuestaC1TextoC1 = respuestaC1.value;

function alertaC1 (){
    alert ("Usted selecciono la respuesta:" + " " + respuestaC1TextoC1);
}
respuestaC1.addEventListener("click",alertaC1);

const respuestaD1 = document.getElementById("respuesta-D1");
const respuestaD1TextoD1 = respuestaD1.value;

function alertaD1 (){
    alert ("Usted selecciono la respuesta:" + " " + respuestaD1TextoD1);
}
respuestaD1.addEventListener("click",alertaD1);


const acertado = document.getElementById("respuesta-D1")
const acertado1 = acertado.value;
let notaExamen = 0;

function valor(){
    if(acertado1 == "El primero"){
        window.location = "trivia(p4).html";
        notaExamen++;
        sessionStorage.setItem("Resultado2", notaExamen);
    }
};
acertado.addEventListener("click",valor);

const desacertado = document.getElementById("respuesta-A1")
const desacertadoA = desacertado.value;
let notaExamenA = 0;

function valorA(){
    if(desacertadoA == "El de los millonarios"){
        window.location = "trivia(p4).html";
        notaExamenA;
        sessionStorage.setItem("Resultado2", notaExamenA);
    }
}
desacertado.addEventListener("click",valorA);

const desacertadoB = document.getElementById("respuesta-B1")
const desacertadoB1 = desacertadoB.value;
let notaExamenB = 0;

function valorB(){
    if(desacertadoB1 == "El que se ensaya"){
        window.location = "trivia(p4).html";
        notaExamenB;
        sessionStorage.setItem("Resultado2", notaExamenB);
    };
};
desacertadoB.addEventListener("click",valorB);

const desacertadoC = document.getElementById("respuesta-C1")
const desacertadoC1 = desacertadoC.value;
let notaExamenC = 0;

function valorC(){
    if(desacertadoC1 == "Ningun plan"){
        window.location = "trivia(p4).html";
        notaExamenC;
        sessionStorage.setItem("Resultado2", notaExamenC);
    };
};
desacertadoC.addEventListener("click",valorC);

const respuestaA5 = document.getElementById("respuesta-A5");
const respuestaA5Texto = respuestaA5.value;

function alertaA5 (){
    alert ("Usted selecciono la respuesta:" +" "+ respuestaA5Texto);
}
respuestaA5.addEventListener("click",alertaA5);

const respuestaB5 = document.getElementById("respuesta-B5");
const respuestaB5TextoB5 = respuestaB5.value;

function alertaB5 (){
    alert ("Usted selecciono la respuesta:" +" "+ respuestaB5TextoB5);
}
respuestaB5.addEventListener("click",alertaB5);

const respuestaC5 = document.getElementById("respuesta-C5");
const respuestaC5TextoC5 = respuestaC5.value;

function alertaC5 (){
    alert("Usted selecciono la respuesta:" +" "+ respuestaC5TextoC5);
}
respuestaC5.addEventListener("click",alertaC5);

const respuestaD5 = document.getElementById("respuesta-D5");
const respuestaD5TextoD5 = respuestaD5.value;

function alertaD5 (){
    alert ("Usted selecciono la respuesta:" +" "+ respuestaD5TextoD5);
}
respuestaD5.addEventListener("click",alertaD5);

const acertado = document.getElementById("respuesta-D5")
const acertado1 = acertado.value;
let notaExamen = 0;

function valor(){
    if(acertado1 == "Shakira"){
        window.location = "trivia(p6).html";
        notaExamen++;
        sessionStorage.setItem("Resultado4", notaExamen);
    }
};
acertado.addEventListener("click",valor);

const desacertado = document.getElementById("respuesta-A5")
const desacertadoA = desacertado.value;
let notaExamenA = 0;

function valorA(){
    if(desacertadoA == "Dua Lipa"){
        window.location = "trivia(p6).html";
        notaExamenA;
        sessionStorage.setItem("Resultado4", notaExamenA);
    }
}
desacertado.addEventListener("click",valorA);

const desacertadoB = document.getElementById("respuesta-B5")
const desacertadoB1 = desacertadoB.value;
let notaExamenB = 0;

function valorB(){
    if(desacertadoB1 == "Karol G"){
        window.location = "trivia(p6).html";
        notaExamenB;
        sessionStorage.setItem("Resultado4", notaExamenB);
    };
};
desacertadoB.addEventListener("click",valorB);

const desacertadoC = document.getElementById("respuesta-C5")
const desacertadoC1 = desacertadoC.value;
let notaExamenC = 0;

function valorC(){
    if(desacertadoC1 == "Adele"){
        window.location = "trivia(p6).html";
        notaExamenC;
        sessionStorage.setItem("Resultado4", notaExamenC);
    };
};
desacertadoC.addEventListener("click",valorC);

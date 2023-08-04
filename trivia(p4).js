const respuestaA3 = document.getElementById("respuesta-A3");
const respuestaA3TextoA3 = respuestaA3.value;

function alertaA3 (){
    alert ("Usted selecciono la respuesta:" + " " + respuestaA3TextoA3);
}
respuestaA3.addEventListener("click",alertaA3);

const respuestaB3 = document.getElementById("respuesta-B3");
const respuestaB3TextoB3 = respuestaB3.value;

function alertaB3() {
    alert ("Usted selecciono la respuesta:" + "  " + respuestaB3TextoB3);
}
respuestaB3.addEventListener("click",alertaB3);

const respuestaC3 = document.getElementById("respuesta-C3");
const respuestaC3TextoC3 = respuestaC3.value;

function alertaC3 (){
    alert("Usted selecciono la respuesta" + "  " + respuestaC3TextoC3);
}
respuestaC3.addEventListener("click",alertaC3);

const respuestaD3 = document.getElementById("respuesta-D3");
const respuestaD3TextoD3 = respuestaD3.value;

function alertaD3 (){
    alert("Usted selecciono la respuesta" + "  " + respuestaD3TextoD3);
}
respuestaD3.addEventListener("click",alertaD3);

const acertado = document.getElementById("respuesta-A3")
const acertado1 = acertado.value;
let notaExamen = 0;

function valor(){
    if(acertado1 == "En su fiesta de graduación de la escuela"){
        window.location = "triviaRESULTADO.html";
        notaExamen++;
        sessionStorage.setItem("Resultado3", notaExamen);
    }
};
acertado.addEventListener("click",valor);

const desacertado = document.getElementById("respuesta-B3")
const desacertadoB = desacertado.value;
let notaExamenB = 0;

function valorB(){
    if(desacertadoB == "En la universidad"){
        window.location = "triviaRESULTADO.html";
        notaExamenB;
        sessionStorage.setItem("Resultado3", notaExamenB);
    };
};
desacertado.addEventListener("click",valorB);

const desacertadoC = document.getElementById("respuesta-C3")
const desacertadoC1 = desacertadoC.value;
let notaExamenC = 0;

function valorC(){
    if(desacertadoC1 == "En una discoteca en Inglaterra"){
        window.location = "triviaRESULTADO.html";
        notaExamenC;
        sessionStorage.setItem("Resultado3", notaExamenC);
    };
};
desacertadoC.addEventListener("click",valorC);

const desacertadoD = document.getElementById("respuesta-D3")
const desacertadoD1 = desacertadoD.value;
let notaExamenD = 0;

function valorD(){
    if(desacertadoD1 == "En el funeral de la madre de Derek"){
        window.location = "triviaRESULTADO.html";
        notaExamenD;
        sessionStorage.setItem("Resultado3", notaExamenD);
    };
};
desacertadoD.addEventListener("click",valorD);

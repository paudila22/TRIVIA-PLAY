function sumaResultados (){
    const Resultado4 = sessionStorage.getItem("Resultado4");
    const resultadoA = parseInt(Resultado4);
    const Resultado5 = sessionStorage.getItem("Resultado5");
    const resultadoB = parseInt(Resultado5);

    const suma= resultadoA + resultadoB;
    console.log(suma)
    const puntajeFinal = document.getElementsByClassName("PUNTAJE");
    puntajeFinal[0].innerHTML= `PUNTAJE ${suma}/2`;  
}
console.log (sumaResultados());

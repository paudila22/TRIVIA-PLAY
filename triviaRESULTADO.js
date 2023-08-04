function sumaResultados (){
    const resultado = sessionStorage.getItem("Resultado");
    const resultadoA = parseInt(resultado);
    const resultado2 = sessionStorage.getItem("Resultado2");
    const resultadoB = parseInt(resultado2);
    const resultado3 = sessionStorage.getItem("Resultado3");
    const resultadoC = parseInt(resultado3);

    const suma= resultadoA + resultadoB + resultadoC;
    console.log(suma)
    const puntajeFinal = document.getElementsByClassName("PUNTAJE");
    puntajeFinal[0].innerHTML= `PUNTAJE ${suma}/3`;  
}
console.log (sumaResultados());

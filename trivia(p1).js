function saludoPersona (){
    console.log ("saludoPersona");
    const nombreImp =localStorage.getItem("nombreUsuario");
    const tituloP = document.getElementsByClassName("Bienvenida");

    if(nombreImp !==""){
        const cambio = tituloP[0].innerHTML= '¡HOLA'+ " " +  nombreImp +"!";
    }
};
saludoPersona();

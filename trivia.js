function guardarNombre (){
    console.log ("guardarNombre");
    const ingresarNombre = document.getElementById("nombre_user");
    const nombreU = ingresarNombre.value;
    
    if(nombreU !== ""){
        localStorage.setItem("nombreUsuario",nombreU);
        alert("Se ha guardado Usuario:" + " " + nombreU);
    }
}
const init = ()=> {
    const botonGuardar = document.getElementById("iniciar");
    console.log (botonGuardar);
    botonGuardar.addEventListener("click", guardarNombre);
};
init();

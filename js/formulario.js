
var formulario = document.getElementsByName('Formulario')[0],
elementos = formulario.elements,
boton = document.getElementsById('btn');

var validarNombre = function(e){
    if (formulario.nombre.value == 0) {
        alert("completa el campo nombre");
        e.preventDefault();
    }
};

var validarEdad = function(e){
    if (formulario.edad.value == 0) {
        alert("completa el campo edad");
        e.preventDefault();
    }
};


var validarDireccion = function(e){
    if (formulario.direccion.value == 0) {
        alert("completa el campo direccion");
        e.preventDefault();
    }
};

var validarCiudad = function(e){
    if (formulario.ciudad.value == 0) {
        alert("completa el campo ciudad");
        e.preventDefault();
    }
};

var ValidarRadio = function(e){
    if (formulario.sexo[0].checked == true || formulario.sexo[1],checked == true) {

    } else {
        alert("Completa el campo sexo");
        e,preventDefault()
    }
};

var ValidarCheckbox = function(e){
    if (formulario.terminos.checked == false)  {
        alert("Acepta los Terminos");
        e,preventDefault()
    }
};

var validar = function(e){
    validarNombre(e);
    validarEdad(e);
    validarDireccion(e);
    validarCiudad(e);
    ValidarRadio(e);
    ValidarCheckbox(e);
};

formulario.addEventListener("submit", validar);




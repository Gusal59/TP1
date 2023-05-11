alert("Javascript")
(function(){
    var formulario = document.getElementById('formulario');

    var validarNombre = function(){
        if (formulario.nombre.value == 0) {
            alert("Ingresa tu nombre")
        }
    };

    var validar = function(){
        validarNombre()
    };

    formulario.addEventListener("submit" , validar);
}());
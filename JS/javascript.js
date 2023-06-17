// alert("Javascript")
window.addEventListener('load', ()=> {
    const formu = document.querySelector('#formulario')
    const mail = document.getElementById('mail')
    const nombre = document.getElementById('nombre')
    const comen = document.getElementById('comentario')

    formu.addEventListener('submit', (e)=> {
        e.preventDefault()
        validaCampos()
    })

    const validaCampos = ()=> {
        const nombreValor = nombre.value
        const mailValor = mail.value
        const comenValor = comentario.value
        // console.log(nombreValor)
        // console.log(mailValor)

        // valida el ingreso del nombre
        if(!nombreValor) {
            validaFalla(nombre, 'Ingrese su nombre')
        }else {
            validaOk(nombre)
        }
        
        // valida el ingreso del email y que sea un formato válido
        // if(!mailValor) {
        //     validaFalla(mail, 'Ingrese su email')
        // }else if(!validaEmail(mailValor)) {
        //     validaFalla(mail, 'Ingrese con email con formato valido')
        // }else {
        //     validaOk(mail)
        // }
        // valida que no esté en blanco el email
        if(!mailValor) {
            validaFalla(mail, 'Ingrese su email')
        }else {
            validaOk(mail)
        }

        // valida el ingreso del comentario
        if(!comenValor) {
            validaFalla(comentario, 'Ingrese un comentario')
        }else {
            validaOk(comentario)
        }

    }
    const validaFalla = (input, msje) => {
        const formuControl = input.parentElement
        const aviso = formuControl.querySelector('p')
        aviso.innerText = msje

        formuControl.className = 'form-control falla'

    }
    const validaOk = (input, msje) => {
        const formuControl = input.parentElement

        formuControl.className = 'form-control ok'
    }
    const validaEmail = (mail) => {
        return /^w+@[a-zA-Z_]+?.[a-zA-Z] {2,3}$/.test(mail);
    }
})




// const sexo = document.formulario.opcSexo;
// const sexo = document.querySelector('input[name="opcSexo"]:checked').value;
//function ValidaDatos(){
    
    // if email != (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)){
    //    alert("Ingrese una dirección de email válida")
    //    return false;
    // }

    // alert("Sexo elegido: "sexo.value)
    // return false;

//     if (txtNombre.value == ""){
//         alert("Ingrese su nombre")
//         return false;
//     }
//     return true;
// };
let Registro = document.querySelector (".register")
let Email = document.querySelector("#email")
let Password = document.querySelector("#password")
let RepetirPassword = document.querySelector("#repetir-password")
let Terminos = document.querySelector (".register-accion")
let errorRegistro = document.querySelector ("#error-register")

Registro.addEventListener("submit", function(event){
    event.preventDefault()
    if (Email.value == ""){
        errorRegistro.innerText = "El email es obligatorio"
    }
    else if (Password.value == ""){
        errorRegistro.innerText = "La contraseña es obligatoria"
    }
    else if (Password.value.length < 6){
        errorRegistro.innerText = "La contraseña debe de tener al menos 6 caracteres"
    }
    else if (Password.value != RepetirPassword.value){
        errorRegistro.innerText = "Las contraseñas debe de coincidir"
    }
    else if (Terminos.checked == false){
        errorRegistro.innerText = "Debes de aceptar los terminos y condiciones"
    }
    else{
        Registro.submit()
    }
})
let login = document.querySelector(".login")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let mensajelogin = document.querySelector(".errorlogin")

login.addEventListener("submit", function(event) {
    event.preventDefault()

    if (email.value == "") {
        mensajelogin.innerText = "El email es obligatorio"
    }

    else if (password.value == "") {
    mensajelogin.innerText = "La contraseña es obligatoria"
    }

    else if (password.value.length < 6) {
        mensajelogin.innerText = "La contraseña debe tener al menos 6 caracteres"
    }

    else {
        localStorage.setItem("email", email.value)
        window.location.href = "./index.html"
    }
})
console.log("saludo.js");
let login = document.querySelector("#login")
let register = document.querySelector("#register")
let bienvenida = document.querySelector("#bienvenido")
let logout = document.querySelector("#logout")

let emailusuario = localStorage.getItem("email")

if (emailusuario != null) {
    login.style.display = "none"
    register.style.display = "none"
    bienvenida.innerText = "Bienvenido " + emailusuario
    logout.innerHTML = '<a class ="menu-principal" href="#">Logout</a>'
}

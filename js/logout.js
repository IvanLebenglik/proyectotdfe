console.log("logout.js");
let logoutt = document.querySelector("#logout")
let loginn = document.querySelector("#login")
let registerr = document.querySelector("#register")
let bienvenidaa = document.querySelector("#bienvenido")

logoutt.addEventListener("click", function(event) {
    event.preventDefault()

    localStorage.removeItem("email")
    logoutt.style.display = "none"
    bienvenidaa.style.display = "none"
    loginn.style.display = "block"
    registerr.style.display = "block"
})
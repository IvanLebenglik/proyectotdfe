let itemLogin = document.querySelector(".item-login");
let itemRegister = document.querySelector(".item-register");
let itemBienvenida = document.querySelector(".item-bienvenida");
let itemLogout = document.querySelector(".item-logout");

let emailUsuario = localStorage.getItem("email");

if (emailUsuario != null) {
    itemLogin.style.display = "none";
    itemRegister.style.display = "none";
    itemBienvenida.innerText = "Bienvenido: " + emailUsuario;
} else {
    itemBienvenida.style.display = "none";
    itemLogout.style.display = "none";
}

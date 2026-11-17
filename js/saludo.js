console.log("saludo.js");
let emailGuardado = localStorage.getItem("email");
let menu = document.querySelector(".menu-principal ul");

if (emailGuardado && menu) {
    let enlaces = menu.querySelectorAll("a");

    enlaces.forEach(function (enlace) {
        let texto = enlace.textContent.trim().toLowerCase();

        if (texto === "login" || texto === "register" || texto === "registro") {
            enlace.parentElement.remove();
        }
    });

    let itemBienvenida = document.createElement("li");
    itemBienvenida.textContent = "Bienvenido: " + emailGuardado;
    itemBienvenida.classList.add("usuario-bienvenida");

    let itemLogout = document.createElement("li");
    let enlaceLogout = document.createElement("a");

    enlaceLogout.textContent = "logout";
    enlaceLogout.href = "./login.html";
    enlaceLogout.classList.add("logout");

    enlaceLogout.addEventListener("click", function () {
        localStorage.removeItem("email");
    });

    itemLogout.appendChild(enlaceLogout);
    menu.appendChild(itemBienvenida);
    menu.appendChild(itemLogout);
}

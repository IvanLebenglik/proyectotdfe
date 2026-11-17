console.log("logout.js");

let enlaceLogout = document.querySelector("a.logout");

if (enlaceLogout) {
    enlaceLogout.addEventListener("click", function (event) {
        event.preventDefault();

        localStorage.removeItem("email");

        let mensajeBienvenida = document.querySelector(".usuario-bienvenida");
        let itemLogout = enlaceLogout.parentElement;

        if (mensajeBienvenida) {
            mensajeBienvenida.remove();
        }

        if (itemLogout) {
            itemLogout.remove();
        }

        let menu = document.querySelector(".menu-principal ul");

        if (menu) {
            let itemLogin = document.createElement("li");
            let enlaceLogin = document.createElement("a");
            enlaceLogin.textContent = "Login";
            enlaceLogin.href = "./login.html";
            itemLogin.appendChild(enlaceLogin);

            let itemRegister = document.createElement("li");
            let enlaceRegister = document.createElement("a");
            enlaceRegister.textContent = "Register";
            enlaceRegister.href = "./register.html";
            itemRegister.appendChild(enlaceRegister);

            menu.appendChild(itemLogin);
            menu.appendChild(itemRegister);
        }
    });
}

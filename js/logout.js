let linkLogout = document.querySelector(".item-logout a");

linkLogout.addEventListener("click", function (event) {
    event.preventDefault();

    localStorage.removeItem("email");
    itemBienvenida.style.display = "none";
    itemLogout.style.display = "none";
    itemLogin.style.display = "block";
    itemRegister.style.display = "block";
});

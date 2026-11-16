console.log("login.js")

let formulario = document.querySelector(".login");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

email.addEventListener("blur", function () {
  console.log("dentro del email con blur");

  if (email.value == "") {
    alert("Este campo es obligatorio");
  }
});

password.addEventListener("blur", function () {
  console.log("dentro del password con blur");

  if (password.value == "") {
    alert("Este campo es obligatorio");
  }
});

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("dentro del eventListener");

  if (email.value == "") {
    console.log("Este campo es obligatorio");
    alert("Este campo es obligatorio");
    return;
  }

  if (password.value == "") {
    console.log("Este campo es obligatorio");
    alert("Este campo es obligatorio");
    return;
  }

  if (password.value.length < 6) {
    console.log("La contraseña debe tener al menos 6 caracteres");
    alert("La contraseña debe tener al menos 6 caracteres");
    return;
  }

  localStorage.setItem("email", email.value);
  this.submit();
});

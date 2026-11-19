let menuCategorias = document.querySelector(".menu-categorias");

fetch("https://dummyjson.com/products/categories")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            menuCategorias.innerHTML += `<li><a href="./category.html?categoria=${data[i].slug}">${data[i].name}</a></li>`;
        }
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });

let listaCelulares = document.querySelector(".celulares .grilla-home");
let listaAccesorios = document.querySelector(".accesorios .grilla-home");

fetch("https://dummyjson.com/products/category/smartphones")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let productos = data.products;

        for (let i = 0; i < productos.length; i++) {
            listaCelulares.innerHTML += `
                <article class="producto">
                    <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
                    <h3>${productos[i].title}</h3>
                    <p class="descripcion">${productos[i].description}</p>
                    <p class="precio">$ ${productos[i].price}</p>
                    <a class="ver-detalle" href="./product.html?id=${productos[i].id}">Ver detalle</a>
                </article>`;
        }
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });

fetch("https://dummyjson.com/products/category/mobile-accessories")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let productos = data.products;

        for (let i = 0; i < productos.length; i++) {
            listaAccesorios.innerHTML += `
                <article class="producto">
                    <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
                    <h3>${productos[i].title}</h3>
                    <p class="descripcion">${productos[i].description}</p>
                    <p class="precio">$ ${productos[i].price}</p>
                    <a class="ver-detalle" href="./product.html?id=${productos[i].id}">Ver detalle</a>
                </article>`;
        }
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });

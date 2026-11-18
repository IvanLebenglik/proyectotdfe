let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get('busqueda');

let titulo = document.querySelector('.resultados h1');
let lista = document.querySelector('.grilla-productos');
let sinResultados = document.querySelector('.sin-resultados');

titulo.innerText = `Resultados de búsqueda para: ${busqueda}`;

fetch(`https://dummyjson.com/products/search?q=${busqueda}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let productos = data.products;

        if (productos.length == 0) {
            sinResultados.innerText = `No hay resultados para el término: ${busqueda}`;
        } else {
            for (let i = 0; i < productos.length; i++) {
                lista.innerHTML += `
                    <article class="producto">
                        <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
                        <h3>${productos[i].title}</h3>
                        <p class="descripcion">${productos[i].description}</p>
                        <p class="precio">$ ${productos[i].price}</p>
                        <a class="ver-detalle" href="./product.html?id=${productos[i].id}">Ver detalle</a>
                    </article>`;
            }
        }
    })
    .catch(function (error) {
        console.log('El error es: ' + error);
    });
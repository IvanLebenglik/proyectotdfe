let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get('categoria');

let titulo = document.querySelector('.categoria h1');
let lista = document.querySelector('.grilla-productos');

titulo.innerText = `Productos de ${categoria}`;

fetch(`https://dummyjson.com/products/category/${categoria}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let productos = data.products;

        if (productos.length == 0) {
            lista.innerHTML = `<p>No hay productos para: ${categoria}</p>`;
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
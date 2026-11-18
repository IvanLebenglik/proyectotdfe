let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');

let imagen = document.querySelector('.detalle-producto img');
let titulo = document.querySelector('.info-producto h1');
let marca = document.querySelector('.marca');
let categoria = document.querySelector('.categoria-producto');
let descripcion = document.querySelector('.descripcion');
let precio = document.querySelector('.precio');
let stock = document.querySelector('.stock');
let tags = document.querySelector('.tags');
let reviews = document.querySelector('.reviews');

fetch(`https://dummyjson.com/products/${id}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        imagen.src = data.thumbnail;
        imagen.alt = data.title;
        titulo.innerText = data.title;
        marca.innerText = `Marca: ${data.brand}`;
        categoria.innerHTML = `Categoría: <a href="./category.html?categoria=${data.category}">${data.category}</a>`;
        descripcion.innerText = data.description;
        precio.innerText = `$ ${data.price}`;
        stock.innerText = `Stock: ${data.stock}`;

        for (let i = 0; i < data.tags.length && i < 3; i++) {
            tags.innerHTML += `<li>${data.tags[i]}</li>`;
        }

        for (let i = 0; i < data.reviews.length; i++) {
            reviews.innerHTML += `
                <article class="review">
                    <h3>${data.reviews[i].reviewerName}</h3>
                    <p class="rating">Rating: ${data.reviews[i].rating}</p>
                    <p class="comentario">${data.reviews[i].comment}</p>
                    <p class="fecha">${data.reviews[i].date}</p>
                </article>`;
        }
    })
    .catch(function (error) {
        console.log('El error es: ' + error);
    });
// array de productos
const productos = [
    {
        "id": 1,
        "nombre": "Torta de Margaritas",
        "descripcion": "La torta puede ser de 12 a 20 porciones. El bizcocho como el relleno es a pedido del cliente. Puede colocarse una dedicatoria, esto tiene un adicional de $2.",
        "precio": 150,
        "imagen": "../img/margaritas.jpg"
    },
    {
        "id": 2,
        "nombre": "Torta arcoiris",
        "descripcion": "La torta puede ser de 12 a 20 porciones. El bizcocho como el relleno es a pedido del cliente. La decoración se hace con Buttercream. Puede colocarse una dedicatoria, esto tiene un adicional de $2.",
        "precio": 100,
        "imagen": "../img/calado-costado.png"
    },
    {
        "id": 3,
        "nombre": "Torta Butterfly",
        "descripcion": "La torta puede ser de 20 a 25 porciones. El bizcocho como el relleno es a pedido del cliente. La decoración se hace con Buttercream. Puede colocarse una dedicatoria, esto tiene un adicional de $2.",
        "precio": 200,
        "imagen": "../img/torta-rosada-mariposas.jpg"
    },
    {
        "id": 4,
        "nombre": "Torta Elvis",
        "descripcion": "La torta puede ser de 20 a 25 porciones. El bizcocho como el relleno es a pedido del cliente. La decoración se hace con Buttercream. Puede colocarse una dedicatoria, esto tiene un adicional de $2.",
        "precio": 200,
        "imagen": "../img/torta-cuy.jpg"
    },
    {
        "id": 5,
        "nombre": "Molde de galletas - Abecedario",
        "descripcion": "Juego de molde para realizar galletas con forma de letras.",
        "precio": 10,
        "imagen": "../img/molde-galletas.jpg"
    },
    {
        "id": 6,
        "nombre": "Torta ChocolateLover",
        "descripcion": "La torta puede ser de 12 a 20 porciones. El bizcocho como el relleno es a pedido del cliente. La decoración se hace con frosting. Puede colocarse una dedicatoria, esto tiene un adicional de $2.",
        "precio": 200,
        "imagen": "../img/chocolate-lover.jpg"
    },
];

// funcion para mostrar los productos
const mostrarProductos = () => {
    const contenedorProductos = document.querySelector('.productos');
    contenedorProductos.innerHTML = '';

    productos.forEach(producto => {
        const productoHTML = `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="info-producto">
                    <h3>${producto.nombre}</h3>
                    <p class="body-producto">${producto.descripcion}</p>
                    <div class="precio-carro">
                        <p class="precio">Desde $${producto.precio}</p>
                        <button onclick="agregarAlcarrito('${producto.nombre}', ${producto.precio})" class="agregar-carrito boton-compra">Añadir al Carrito</button>
                    </div>
                </div>
            </div>
        `;
        contenedorProductos.innerHTML += productoHTML;
    });
};

// se llama a la funcion para mostrar los productos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
});

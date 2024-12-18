// variable global para almacenar los productos seleccionados
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// función para añadir productos al carrito
const agregarAlcarrito = (nombre, precio) => {
    // agregar el producto como un objeto al carrito
    carrito.push({ nombre, precio });

    // Guarda el contenido del carrito en el almacenamiento local
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // actualizar el contador visual del carrito
    actualizarContador();

    // mostrar una alerta de confirmación
    alert(`Agregaste: ${nombre} al carrito`);
}

// función para actualizar el contador del carrito
const actualizarContador = () => {
    // cambiamos el contenido del HTML con el ID contador-carrito
    document.getElementById("contador-carrito").textContent = carrito.length;
}

// función para cargar el contenido del carrito al iniciar la página
const cargarCarrito = () => {
    // actualizar el contador del carrito
    actualizarContador();
}

// llama a la función para cargar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', cargarCarrito);

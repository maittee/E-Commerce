// variable global para almacenar los productos seleccionados
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// función para añadir productos al carrito
const agregarAlcarrito = (nombre, precio) => {
    const productoExistente = carrito.find(item => item.nombre === nombre);

    // si el producto ya existe, aumentar la cantidad
    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }

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
    const total = carrito.reduce((contador, item) => contador + item.cantidad, 0);
    document.getElementById("contador-carrito").textContent = total;
}

// función para cargar el contenido del carrito al iniciar la página
const cargarCarrito = () => {
    // actualizar el contador del carrito
    actualizarContador();
}

// Llama a la función para cargar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', cargarCarrito);

// Recuperar el carrito del almacenamiento local
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Muestra los productos en el carrito
const mostrarCarrito = () => {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";

  if (carrito.length === 0) {
    lista.innerHTML = '<p id="msj-carrito-vacio">Tu carrito está vacío</p>';
    actualizarResumen();
    return;
  }

  carrito.forEach((item, indice) => {
    const producto = document.createElement("article");

    producto.classList.add("producto-carrito");
    producto.innerHTML = `
            <h4>${item.nombre}</h4>
            <p class="precio">Precio unitario: $${item.precio}</p>
            <div class="cantidad">
                <button onclick="agregarUnidad(${indice})" class="botones-carrito boton-agregar"
                ${
                  item.cantidad >= 3 ? " disabled" : ""
                }>+</button>
                <p>Cantidad: ${item.cantidad} </p>    
                <button onclick="disminuirUnidad(${indice})" class="botones-carrito boton-disminuir">-</button>
            </div>
            <button onclick="eliminarDelCarrito(${indice})" class="botones-carrito boton-eliminar">Eliminar</button>
        `;
    lista.appendChild(producto);
  });
  actualizarResumen();
};

// Actualiza el resumen del carrito
const actualizarResumen = () => {
  const totalProductos = document.getElementById("total-productos");
  const importeTotal = document.getElementById("importe-total");
  const botonCompra = document.querySelector(
    "button[onclick='realizarCompra()']"
  );

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );
  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  totalProductos.textContent = cantidadTotal;
  importeTotal.textContent = total.toFixed(2);

  // si el carrito esta vacio, desactivar boton de compra
  if (carrito.length === 0) {
    botonCompra.disabled = true;
  } else {
    botonCompra.disabled = false;
  }
  const resumenCarrito = document.getElementById("resumen-carrito");
  resumenCarrito.appendChild(botonCompra);
};

// función para agregar una unidad de un producto existente en el carrito
const agregarUnidad = (indice) => {
  // limito la cantidad a 3 por producto
  if (carrito[indice].cantidad < 3) {
    carrito[indice].cantidad += 1;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  }
};

// función para disminuir una unidad de un producto existente en el carrito
const disminuirUnidad = (indice) => {
  if (carrito[indice].cantidad > 1) {
    carrito[indice].cantidad -= 1;
  } else {
    carrito.splice(indice, 1);
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
};

// función para eliminar un producto del carrito
const eliminarDelCarrito = (indice) => {
  carrito.splice(indice, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
};

// función para simular la compra
const realizarCompra = () => {
  alert("Compra realizada con éxito");
  localStorage.removeItem("carrito");
  window.location.href = "../index.html";
};

// guardar la URL de la pagina anterior en local storage
document.addEventListener("DOMContentLoaded", () => {
  const previousURL = document.referrer;
  localStorage.setItem("previousURL", previousURL);
  mostrarCarrito();
});

// funcion para redirigir a la pagina anterior
const volverPaginaAnterior = () => {
  const previousURL = localStorage.getItem("previousURL");
  if (previousURL && !previousURL.includes("carrito.html")) {
    window.location.href = previousURL;
  } else {
    window.location.href = "../index.html";
    // redirigir al inicio si no hay una URL anterior
  }
};

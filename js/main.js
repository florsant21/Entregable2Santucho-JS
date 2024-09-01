document.querySelector('#formularioCompra').addEventListener('submit', function(e) {
    e.preventDefault();

    let nombreCliente = document.querySelector('#nombreCliente').value;
    let nombreProducto = document.querySelector('#producto').value;

    if (!nombreCliente || !nombreProducto) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    agregarAlCarrito(nombreProducto);
    alert("Gracias " + nombreCliente + " por tu compra. Has adquirido tu " + nombreProducto + ".");

    document.querySelector('#formularioCompra').reset();
});

function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarVistaCarrito();
}

function actualizarVistaCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let cartList = document.querySelector('#cart');
    cartList.innerHTML = '';

    carrito.forEach((producto, index) => {
        let listItem = document.createElement('li');
        listItem.textContent = producto;
        cartList.appendChild(listItem);
    });
}

actualizarVistaCarrito();
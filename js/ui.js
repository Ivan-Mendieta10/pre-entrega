export const actualizarContador = (carrito) => {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    contador.textContent = `🛒${carrito.length}`;
  }
};

export const mostrarMensaje = (texto) => {
  alert(texto);
};

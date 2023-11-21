window.addEventListener('load', inicio);

let comprados = 0;

function inicio(){
	carrito = new Carrito;
	document.getElementById("compras").innerHTML = `${comprados}`
  document.getElementById("guitarra2").addEventListener("click", comprarArticulo);
}

function comprarArticulo(){
	comprados++
	document.getElementById("compras").innerHTML = `${comprados}`
	let articulo = new Articulo("CP1-HSS", 1400);
	carrito.agregarACarrito(articulo);
  alert("Articulo añadido al carrito");

	carrito.mostrarCarrito();
}
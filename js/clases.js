class Carrito {
    constructor(){
        this.carrito = [];
    }

    agregarACarrito(articulo){
        this.carrito.push(articulo);
    }
    
    mostrarCarrito(){
        let carrito = this.carrito;
        // Put the object into storage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Retrieve the object from storage
        var retrievedObject = localStorage.getItem('carrito');

        console.log('retrievedObject: ', JSON.parse(retrievedObject));
    }
}

class Articulo {
    constructor(titulo, precio) {
        this.titulo = titulo;
        this.precio = precio;
    }
}


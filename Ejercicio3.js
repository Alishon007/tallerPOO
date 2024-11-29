//Ejercicio 2: Inventario de Productos
// Define una clase Producto con atributos como nombre, precio y cantidadEnStock. Luego crea una clase Electrodomestico que herede de Producto y agregue un atributo adicional marca. Implementa un arreglo para almacenar varios productos y un método que liste aquellos que tienen una cantidad en stock menor a 10.

class Producto {
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
class Electrodomestico extends Producto{
    constructor(nombre, precio, cantidad, marca){
        super(nombre, precio, cantidad);
        this.marca = marca;
    }
    info(){
        return `${this.nombre} ${this.precio} ${this.cantidad} ${this.marca}`
    }
}
class Almacen{
    constructor(nombreAlmacen){
        this.nombreAlmacen = nombreAlmacen;
        this.almacen = []
    }
    info(){
        return this.nombreAlmacen
    }
    almacenarProducto(producto){
        if(producto instanceof Electrodomestico){
            this.almacen.push(producto);
            console.log('se agrego correctamente el producto')
        }
        else{
            console.log('No se logro agregar el prodocto')
        }
    }
    listarProductos(){
        return this.almacen.filter(producto => producto.cantidad < 10);
        
    }
}


let almacen1

// document.querySelector('#nombre').textContent = almacen1.nombre;
// document.querySelector('#especie').textContent = almacen1.especie;

document.querySelector('#guardar').addEventListener('click', function (){
    let nombreAlmacen = document.querySelector('#nombreAlmacen').value;

    if (!almacen1){
    almacen1 = new Almacen(nombreAlmacen)
    }

    let nombreInput = document.querySelector('#nombre').value;
    let precioInput = document.querySelector('#precio').value;
    let cantidadInput = document.querySelector('#cantidad').value;
    let marcaInput= document.querySelector('#marca').value;

    let producto1 = new Electrodomestico(nombreInput, precioInput, cantidadInput, marcaInput)

    almacen1.almacenarProducto(producto1)
 
})

document.querySelector('#mostrar').addEventListener('click', function(){
    let listadoProductos = document.querySelector('#listadoProductos');
    listadoProductos.innerHTML = '';
    let miListado = almacen1.listarProductos();

    miListado.forEach(function(producto){
        let lista = document.createElement('li');
        lista.textContent = `${producto.info()} pertenece al almacen ${almacen1.nombreAlmacen}`;
        listadoProductos.appendChild(lista)
        });
      
    })


// const prodocto1 = new Electrodomestico('Lavadora', '$300000', 18, 'Lg');
// const prodocto2 = new Electrodomestico('Tostadora', '$92000', 7, 'Samsung');
// const prodocto3 = new Electrodomestico('Televisor', '$2300000', 8, 'Lg');
// const prodocto4 = new Electrodomestico('Estufa', '$700000', 12, 'Lenovo');

// const almacen1 = new Almacen;

// almacen1.almacenarProducto(prodocto1);
// almacen1.almacenarProducto(prodocto2);
// almacen1.almacenarProducto(prodocto3);
// almacen1.almacenarProducto(prodocto4);

// console.log('------------------')
// almacen1.listarProductos();

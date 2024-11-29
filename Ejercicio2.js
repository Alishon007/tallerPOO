// Ejercicio 1: Zoológico
// Crea una clase base llamada Animal con atributos como nombre y especie. Luego, crea clases derivadas como Leon, Elefante y Tigre que hereden de Animal. Cada clase derivada debe tener un método específico (por ejemplo, rugir() para Leon). Utiliza un arreglo para almacenar varios animales y crea un método para recorrerlos y hacer que cada uno ejecute su acción específica.
class Animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }
}

class Leon extends Animal {
    rugir() {
        return `${this.nombre} el ${this.especie} está rugiendo`;
    }
}

class Elefante extends Animal {
    retumbar() {
        return `${this.nombre} el ${this.especie} está retumbando`;
    }
}

class Tigre extends Animal {
    cazar() {
        return `${this.nombre} el ${this.especie} está cazando`;
    }
}

class Almacen {
    constructor() {
        this.almacen = [];
    }

    agregarAnimal(animal) {
        if (animal instanceof Leon || animal instanceof Elefante || animal instanceof Tigre) {
            this.almacen.push(animal);
            console.log('Animal agregado');
        } else {
            console.log('No se puede agregar');
        }
    }
    // listar() {
    //     this.almacen.forEach(animal => {
    //         animal.mostrarInformacion();
    //     });
    //     return this.almacen;
    // }

    listarAnimales() {
       return this.almacen;
    }
}

let almacen1 = new Almacen();
document.querySelector('#nombre').textContent = almacen1.nombre;
// document.querySelector('#especie').textContent = almacen1.especie;

document.querySelector('#guardar').addEventListener('click', function (){
    let nombreInput = document.querySelector('#nombre').value;
    let especieInput = document.querySelector('#especie').value;

    let animal1;

    if(especieInput === 'Leon'){
        animal1 = new Leon(nombreInput, especieInput)
    }else if (especieInput === 'Elefante'){
        animal1 = new Elefante(nombreInput, especieInput)
    }else if(especieInput === 'Tigre'){
        animal1 = new Tigre(nombreInput, especieInput)
    }
    almacen1.agregarAnimal(animal1)
})

document.querySelector('#mostrar').addEventListener('click', function(){
    let listadoZoo = document.querySelector('#listadoZoo');
    listadoZoo.innerHTML = '';
    let miZoo = almacen1.listarAnimales();

    miZoo.forEach(function(animal){
        let lista = document.createElement('li');
    
            if (animal instanceof Leon) {
                lista.textContent = animal.rugir();
            } else if (animal instanceof Elefante) {
                lista.textContent = animal.retumbar();
            } else if (animal instanceof Tigre) {
                lista.textContent = animal.cazar();
            }
            listadoZoo.appendChild(lista)
        });
      
    })

// const animal1 = new Leon('Simba', 'león');
// const animal2 = new Elefante('Dumbo', 'elefante');
// const animal3 = new Tigre('Tigresa', 'tigre');

// const almacen1 = new Almacen();

// almacen1.agregarAnimal(animal1);
// almacen1.agregarAnimal(animal2);
// almacen1.agregarAnimal(animal3);

// console.log('-----------------------');
// almacen1.listarAnimales();
// console.log('-----------------------');

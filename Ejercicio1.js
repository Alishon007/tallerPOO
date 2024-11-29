//  Gestión de Estudiantes
// Crea una clase Persona con atributos básicos como nombre, edad y un método saludar(). Luego crea una clase Estudiante que herede de Persona y agregue un atributo calificaciones (un arreglo). Añade métodos para agregar una calificación y calcular el promedio del estudiante.

class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
         this.edad = edad;
    }
    saludar(){
        alert(`Hola ${this.nombre}`)
    }
}
class Estudiante extends Persona{
    constructor(nombre, edad){
        super(nombre, edad);
        this.notas = [];
    }
    agregarNota(nota){
        this.notas.push(nota)
    }
    promedio(){
        let suma = 0;
        this.notas.forEach(nota => {
            suma += nota
        })
        let promedio = suma / this.notas.length
        return promedio;
    }
    info(){
        return `El estudiante ${this.nombre}, con notas: ${this.notas} tiene un promedio de: ${this.promedio()}`
    }
    
}

document.querySelector('#generar').addEventListener('click', function() {
    let cantidadCasillas = document.querySelector('#numeroNotas').value;
    let casillas = document.querySelector('#casillas');
    casillas.innerHTML = ''; 

    for (let i = 1; i <= cantidadCasillas; i++) { 
        let label = document.createElement('label');
        label.textContent = `Nota ${i}: `
        let input = document.createElement('input');
        input.placeholder = `Nota ${i}`;
        input.id = `input-${i}`;
        casillas.appendChild(label);
        casillas.appendChild(input);
    }
    let buttonGuardar = document.createElement('button');
    buttonGuardar.id = 'promedio';
    buttonGuardar.textContent = 'Promedio';
    casillas.appendChild(buttonGuardar);
});

// document.querySelector('#promedio').addEventListener('click', function(){
//     let nombre = document.querySelector('#nombre').value;
//     let edad = document.querySelector('#edad').value;
//     let cantidadCasillas = document.querySelector('#numeroNotas').value;

//     for(i = 1; i <= cantidadCasillas.length; i++){
//         let nota = document.querySelector(`#input-${i}`).value;
//         estudiante1.agregarNota(nota)
//     }
//     console.log(estudiante1.notas)
// })

document.querySelector('#casillas').addEventListener('click', function(event) {
    let nombre = document.querySelector('#nombre').value;
    let edad = document.querySelector('#edad').value;
    let estudiante1 = new Estudiante(nombre,edad);

    if (event.target && event.target.id === 'promedio') {
        
        let cantidadCasillas = parseInt(document.querySelector('#numeroNotas').value);
       
        
        for (let i = 1; i <= cantidadCasillas; i++) {
            let nota = parseFloat(document.querySelector(`#input-${i}`).value);
            estudiante1.agregarNota(nota);
        }
        
        console.log(estudiante1.notas);
        console.log(estudiante1.promedio());
        let info = document.querySelector('#info');
        info.textContent = estudiante1.info()
        console.log(estudiante1.nombre)

    }
});

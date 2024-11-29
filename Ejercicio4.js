// Ejercicio 3: Sistema de Empleados
//Crea una clase Empleado con atributos como nombre y sueldo. Luego, crea clases derivadas como EmpleadoTiempoCompleto y EmpleadoMedioTiempo. Cada tipo de empleado tendrá un método para calcular el sueldo total en función de las horas trabajadas. Utiliza un arreglo para almacenar diferentes tipos de empleados y muestra sus sueldos.
class Empleado {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
class EmpleadoTiempoCompleto extends Empleado{
    constructor(nombre, apellido, numeroHoras){
        super(nombre, apellido);
        this.numeroHoras = numeroHoras;
    }
    sueldo(){
        let sueldo = this.numeroHoras * 5500;
        return `El empleado ${this.nombre} ${this.apellido} tiene un sueldo de: ${sueldo}`;
    }
}
class EmpleadoMedioTiempo extends Empleado{
    constructor(nombre, apellido, numeroHoras){
        super(nombre, apellido);
        this.numeroHoras = numeroHoras;
    }
    sueldo(){
        let sueldo = this.numeroHoras * 5500;
        return `El empleado ${this.nombre} ${this.apellido} tiene un sueldo de: ${sueldo} por la cantidad de ${this.numeroHoras} horas trabajadas.`;
    }
}
class Almacen{
    constructor(){
        this.almacen = []
    }
    agregarEmpleado(empleado){
        if(empleado instanceof EmpleadoTiempoCompleto || empleado instanceof EmpleadoMedioTiempo){
            this.almacen.push(empleado);
            console.log('se agrego correctamente el empleado')
        }else{
            console.log('No se logro agregar el empleado')
        }
    }
    listarEmpleados(){
        return this.almacen;
    }
}

let almacen1 = new Almacen();

document.querySelector('#guardar').addEventListener('click', function (){
    let nombreInput = document.querySelector('#nombre').value;
    let apellidoInput = document.querySelector('#apellido').value;
    let empleadoInput = document.querySelector('#empleado').value;
    let horasInput = document.querySelector('#horas').value; 

    let empleado;

    if(empleadoInput === 'EmpleadoTiempoCompleto'){
        empleado = new EmpleadoTiempoCompleto(nombreInput, apellidoInput, horasInput)
    }else if(empleadoInput === 'EmpleadoMedioTiempo'){
        empleado = new EmpleadoMedioTiempo(nombreInput, apellidoInput, horasInput)
    }
    almacen1.agregarEmpleado(empleado);
})

document.querySelector('#mostrar').addEventListener('click', function(){
    let listadoEmpleados = document.querySelector('#listadoEmpleados');
    listadoEmpleados.innerHTML = '';
    let miListado = almacen1.listarEmpleados();

    miListado.forEach(function (empleado){
        let lista = document.createElement('li');
        if (empleado instanceof EmpleadoMedioTiempo) {
            lista.textContent = empleado.sueldo();
         } else if(empleado instanceof EmpleadoTiempoCompleto){
            lista.textContent = empleado.sueldo();
         }
         listadoEmpleados.appendChild(lista);
    })
})

// const empleado1 = new EmpleadoMedioTiempo('Alison', 'Martinez', 4);
// const empleado2 = new EmpleadoMedioTiempo('Laura', 'Lopez', 3);
// const empleado3 = new EmpleadoTiempoCompleto('Diego', 'Hernandez', 8);
// const empleado4 = new EmpleadoTiempoCompleto('Elena', 'Diaz', 8);

// const almacen1 = new Almacen;

// almacen1.agregarEmpleado(empleado1);
// almacen1.agregarEmpleado(empleado2);
// almacen1.agregarEmpleado(empleado3);
// almacen1.agregarEmpleado(empleado4);

// console.log('----------------------')

// almacen1.listarEmpleados();
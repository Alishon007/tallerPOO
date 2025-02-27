class Estudiante {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.nota = [];
    }

    agregarNota(nota) {
        this.nota.push(nota);
        return `Nota agregada!`;
    }

    promedioEstudiante() {
        let notaFinal = 0;
        this.nota.forEach((nota) => {
            notaFinal += nota;
        });
        const promedio = this.nota.length ? notaFinal / this.nota.length : 0;
        return promedio;
    }

    mostrarInformacion(){
        return `nombre: ${this.nombre}, nota final: ${this.promedioEstudiante()}`;
    }
}

class Curso {
    constructor(nombreCurso) {
        this.nombreCurso = nombreCurso;
        this.listaEstudiante = [];  
    }

    agregarEstudiante(estudiante) {
        this.listaEstudiante.push(estudiante);
    }

    promedioTotal() {
        let totalNotas = 0;
        let totalEstudiantes = this.listaEstudiante.length;

        this.listaEstudiante.forEach((estudiante) => {
            totalNotas += estudiante.promedioEstudiante();
        });
        return totalEstudiantes > 0 ? totalNotas / totalEstudiantes : 0;
    }
}

class CursoOnline extends Curso {
    constructor(nombreCurso) {
        super(nombreCurso);
    }
}

class CursoPresencial extends Curso {
    constructor(nombreCurso) {
        super(nombreCurso);
    }
}

let content = document.querySelector('#accion');
let cursoPresencial = new CursoPresencial('ADSO-Presencial');
let cursoOnline = new CursoOnline('ADSO-Online');

let check = document.querySelector('#check');
let checkOn = false;

check.addEventListener("change", function () {
    checkOn = check.checked;
    document.querySelector("#checkText").textContent = checkOn ? "Curso Presencial" : "Curso Online";
});

function guardarEstudiante() {
    let nombre = document.querySelector('#nombreEstudiante').value;
    let edad = document.querySelector('#edadEstudiante').value;
    let estudiante = new Estudiante(nombre, edad);
    
    if (checkOn) {
        cursoPresencial.agregarEstudiante(estudiante);
    } else {
        cursoOnline.agregarEstudiante(estudiante);
    }

    document.querySelector('#nombreEstudiante').value = '';
    document.querySelector('#edadEstudiante').value = '';
    alert(`Estudiante guardado correctamente`);
}

function agregarEstudiantes() {
    content.innerHTML = `
         <label for='nombreEstudiante'>Ingresa el nombre del estudiante</label><br>
        <input type='text' id='nombreEstudiante'><br>
        <label for='edadEstudiante'>Ingresa la edad del estudiante</label><br>
        <input type='text' id='edadEstudiante'><br><br>
        
        <button onclick="guardarEstudiante()">Guardar estudiante</button>
        `;
}

function agregrarNotas() {
    content.innerHTML = `
        <label for='buscarEstudiante'>Ingresa el nombre del estudiante:</label><br><br>
        <input type='text' id='buscarEstudiante'>
        <button onclick='buscarEstudiante()'>Buscar</button>`;
}

function buscarEstudiante() {
    let nombreBuscar = document.querySelector('#buscarEstudiante').value;
    let estudianteEncontrado = checkOn
        ? cursoPresencial.listaEstudiante.find(est => est.nombre === nombreBuscar)
        : cursoOnline.listaEstudiante.find(est => est.nombre === nombreBuscar);

    if (estudianteEncontrado) {
        content.innerHTML = `
            <label for='nota'>Ingrese la nota</label><br>
            <input type='text' id='nota'><br>
            <button onclick="guardarNota('${nombreBuscar}')">Guardar</button>`;
    } else {
        alert('Estudiante no encontrado');
    }
}

function guardarNota(nombreBuscar) {
    let nota = parseFloat(document.querySelector('#nota').value);
    let estudianteEncontrado = checkOn
        ? cursoPresencial.listaEstudiante.find(est => est.nombre === nombreBuscar)
        : cursoOnline.listaEstudiante.find(est => est.nombre === nombreBuscar);

    if (estudianteEncontrado) {
        if (!isNaN(nota) && nota >= 0 && nota <= 10) {
            estudianteEncontrado.agregarNota(nota);
            alert(`Nota guardada para ${estudianteEncontrado.nombre}: ${nota}`);
            document.querySelector('#nota').value = "";
        } else {
            alert('Ingresa una nota válida entre 0 y 10.');
        }
    } else {
        alert('Estudiante no encontrado');
    }
}

document.querySelector('#accionListar').addEventListener('click', function() {
    let content = document.querySelector('#accion');
    content.innerHTML = '';  
    let cursoActual = checkOn ? cursoPresencial : cursoOnline;  

    
    cursoActual.listaEstudiante.forEach(function(estudiante) {
        let h2 = document.createElement('h3');
        let li = document.createElement('li');
        h2.textContent =cursoActual.nombreCurso;
        li.textContent = estudiante.mostrarInformacion();
        content.appendChild(h2);
        content.appendChild(li);
    });

  
    let promedioTotal = cursoActual.promedioTotal();
    let liPromedio = document.createElement('li');
    liPromedio.textContent = `Promedio total del curso: ${promedioTotal.toFixed(2)}`;
    content.appendChild(liPromedio);
});

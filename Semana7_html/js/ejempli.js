// Arreglo inicial de estudiantes

let estudiante={ nombre: "Sofía", asignatura: "Literatura", promedio: 8.0 }
let estudiantes = [
    { nombre: "Ana", asignatura: "Matemáticas", promedio: 8.5 },
    { nombre: "Luis", asignatura: "Historia", promedio: 7.8 },
    { nombre: "Marta", asignatura: "Física", promedio: 9.1 },
    { nombre: "Carlos", asignatura: "Química", promedio: 7.5 },
    estudiante
];

// Función para ingresar un nuevo estudiante
function agregarEstudiante(nombre, asignatura, promedio) {
    //estudiantes.push({ nombre:nombre, asignatura:asignatura, promedio:promedio });
    estudiantes.push({nombre, asignatura, promedio});
}
agregarEstudiante("Jorge", "Inglés", 8.7);
// Función para presentar todos los estudiantes
function presentarEstudiante(estudiante) {
    console.log("---- Estudiante ----");
    console.log(estudiante);
    estudiante.nombre="Juan";
    console.log(estudiante.nombre[0]);
    nombre = estudiante.nombre;
    for (let i = 0; i < nombre.length; i++) {
        console.log(nombre[i]);
    }
    console.log(`${estudiante.nombre}, ${estudiante.asignatura}, ${estudiante.promedio}`);
}
presentarEstudiante(estudiante);

function presentarEstudiantes() {
    let estudiante={};
    for (let i = 0; i < estudiantes.length; i++) {
        estudiante=estudiantes[i];
        console.log(`${i + 1}. Nombre: ${estudiante.nombre}, Asignatura: ${estudiante.asignatura}, Promedio: ${estudiante.promedio}`);
    }
}

// Función para buscar un estudiante por nombre
function buscarEstudiante(estudiantes,nombre) {
    let estudiante={},cc=0;
    for (let i = 0; i < estudiantes.length; i++) {
        estudiante=estudiantes[i];
        if (estudiante.nombre === nombre) {
            cc++
        }  
    }
    return enc
}

// Ejemplo de uso
debugger
presentarEstudiantes();
// console.log("---- Agregando nuevo estudiante ----");
// agregarEstudiante("Pedro", "Biología", 8.3);
// presentarEstudiantes();
// console.log("---- Buscando estudiante 'Marta' ----");
buscarEstudiante("Marta");
/*3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una 
tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista 
debe poder ser eliminado con un botón creado para ese fin. 
*/
// let listaTareas = []
// let tareas = '',

// 
// //usar delete  o splice para eliminar una tarea de la lista 

let formulario = document.getElementById('formulario');
let tareaInput = document.getElementById('tareaInput');
let listaTareas = document.getElementById('listaTareas');
let tareas = [];

formulario.addEventListener('submit', agregarTarea);

function agregarTarea(evento) {
    evento.preventDefault();
    let tarea = tareaInput.value;
    if (tarea !== '') {
        tareas.push(tarea);
        mostrarTareas();
        tareaInput.value = '';
    }
}

function mostrarTareas() {
    let contenidoLista = '';
    for (let i = 0; i < tareas.length; i++) {
        contenidoLista += `<li>${tareas[i]} <button onclick="eliminarTarea(${i})">Eliminar</button></li>`;
    }
    listaTareas.innerHTML = contenidoLista;
}

function eliminarTarea(indice) {
    tareas.splice(indice, 1);
    mostrarTareas();
}
// eliminarTarea(` class="bg-dark text-light"`)
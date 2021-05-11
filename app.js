let tareas = require('./src/funcionesDeTareas');
let process = require('process');
let titulo = process.argv[3];
let estado = process.argv[4];
let filtrarEstado = process.argv[3];

switch (process.argv[2]) {
    case 'crear':
        tareas.crear(titulo,estado);
        break;
    case 'listar':
        tareas.listar(titulo,estado)
        break;
    case 'borrar':
        if (titulo !==undefined) {
            tareas.borrar(titulo)
        } else{
            console.log('Ingrese un titulo para borrar')
        }
        break;
    case 'deshacer':
        tareas.deshacer(titulo,estado)
        break;
    case 'filtrar':
        tareas.filtrarPorEstado(filtrarEstado)
        break;
    default:
        console.log('*******************************************************************************')
        console.log('Ingrese una tarea existente "crear" - "listar" - "deshacer" - "borrar - filtrar"')
        console.log('*******************************************************************************')

        break;
}
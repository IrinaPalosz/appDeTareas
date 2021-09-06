
// let fs = require('fs');

// var tareas2 = fs.readFileSync("./tareas.json")

// tareas2 = JSON.parse(tareas2);
//let tareas2 = require('./funcionesDeTareas');
//let fs = require('fs')

const { filtrarPorEstado } = require("./funcionesDeTareas");
let funcionesDeTareas = require("./funcionesDeTareas");
let listado = process.argv;

switch (listado[2]) {
    case "listar": 
         funcionesDeTareas.listarTareas();
        break;
    case "crear" :
        let creando = {
            Titulo : process.argv[3],
            Estado : "pendiente",
        };
        funcionesDeTareas.guardarTareas(creando);
        console.log("♥ Haz creado tu nueva tarea ♥")
        break;
    case "filtrar" :
        var estado = process.argv[3];
        let proceso = funcionesDeTareas.filtrarPorEstado();
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción");
        break;    
    default:
        console.log("No entiendo qué quieres hacer");
        break;
}


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
        var nombreFiltro = process.argv[3]
        let filtro = funcionesDeTareas.filtrarPorEstado;
        let filtrando = filtro().filter(function(params) {
            return nombreFiltro == params.Estado
            
        })
        let poniendoLindo = filtrando.forEach((item) => {
            console.log("♦ Tarea en estado: " + item.Estado +" --> " + item.Titulo)
            
        });
        
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción");
        break;    
    default:
        console.log("No entiendo qué quieres hacer");
        break;
}


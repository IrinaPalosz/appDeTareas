const fs = require('fs');

//funcion listar
function listar(){
    
    let tareas = fs.readFileSync("./tareas.json");

    let tareas2 = JSON.parse(tareas);

    tareas2.forEach((item,index)=> {
        console.log((index + 1) +") " + item.Titulo +" " + item.Estado );
    });


};
 function escribirJson(arrayDeTareas){

 let stringTareas2 = JSON.stringify(arrayDeTareas)
 fs.writeFileSync("./tareas.json", stringTareas2)


}; 

function guardarTarea(tarea) {
    let tareas = fs.readFileSync("./tareas.json");
    let tareas2 = JSON.parse(tareas);
    tareas2.push(tarea);
    escribirJson(tareas2);
   
};

function leerPorEstado(estado){
    let lista = listar();
    
}

module.exports = {
    listarTareas : listar,
    crearTareas : escribirJson,
    guardarTareas : guardarTarea,
    filtrarPorEstado : leerPorEstado
};
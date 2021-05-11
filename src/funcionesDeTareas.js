let fs = require('fs');
const tareas = JSON.parse(fs.readFileSync('./src/tareas.json'))
module.exports = {
    cartel:function(tarea) {
        console.log('***************************************')
        console.log(`    ${tarea} REALIZADO CON EXITO.`)
        console.log('***************************************')
        console.log('Escriba "listar" para ver los cambios.')
        console.log('***************************************')
    },
   crear:function(titulo,estado = 'pendiente'){//agrego informacion al json parseado
       let nuevaTarea={ //con los parametros creo una nueva tarea
           titulo,
           estado
       }
       tareas.push(nuevaTarea) // le agrego una nueva tarea
       this.escribirJSON(tareas);
       this.cartel('GUARDADO');

   },
   listar : function () {
          tareas.forEach(e => {
            console.log(`
            Titulo: ${e.titulo}.
            Estado: ${e.estado}.
            `) 
        });     
   },
   borrar : function (borrar) { //funcion para borrar, filtra el parametro recibido y actualiza el JSON
       let json = JSON.parse(fs.readFileSync('./src/tareas.json'))
       json = tareas.filter(tarea => tarea.titulo !== borrar)
       //guardamos los archivos sobreescritos de tareas sin el titulo filtrado
       this.escribirJSON(json);
       this.cartel('BORRAR');
    
   },
   escribirJSON: function (tareas) {
    fs.writeFileSync('./src/tareas.json', JSON.stringify(tareas),'utf-8')
   },
   deshacer: function () {
       tareas.pop();
       this.escribirJSON(tareas);
       this.cartel('DESHACER');
   },
   filtrarPorEstado:function(estado) {
    let json = JSON.parse(fs.readFileSync('./src/tareas.json'))
       json = tareas.filter(tarea => tarea.estado === estado)
       //guardamos los archivos sobreescritos de tareas con el estado filtrado
       json.forEach(e=>{
        console.log(`
            Titulo: ${e.titulo}
            Estado: ${e.estado} 
            `);
       })
       this.cartel('DATOS FILTRADOS');
       
   }
}
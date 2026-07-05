import { Tarea } from "./tarea.js";

export class Tareas {
    _listado = {};
    
    get listadoarray(){
        const listado =[];
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key];
            listado.push( tarea);
        });
        return listado;
    }

    constructor(){
        this._listado = {};

    }

    CargarTareasFromArray( tareas= []){
        tareas.forEach( tarea =>{
            this._listado[tarea.id] = tarea; 
        })
        
    }
    CrearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id]=tarea;

    }
    
    listadotareas(){
        this.listadoarray.forEach((tarea,id,) => {
            const idx = `${id+1}.`.green;
            const estado = (tarea.completadoen)
                            ?'completado'.green
                            :'Pendiente'.red;
                            
            console.log(`\n ${idx} ${tarea.desc} : : ${estado}`);
        })
    }
    Listacompletadas(completadas=true){
        this.listadoarray.forEach((tarea,id,) => {
            const idx = `${id+1}.`.green;
            const estado = (tarea.completadoen)
                            ?'completado'.green
                            :'Pendiente'.red;
            if (completadas) {
                if (tarea.completadoen) {
                    console.log(`\n ${idx} ${tarea.desc} : : ${tarea.completadoen}`);
                }
            } else {
                if (!tarea.completadoen) {
                    console.log(`\n ${idx} ${tarea.desc} : : ${estado}`);
                }
            }
        })
    }
    BorrarTarea(id){
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    togglecompletadas(ids =[]){
        ids.forEach( id => {

            const tarea = this._listado[id];
            if ( !tarea.completadoen ) {
                tarea.completadoen = new Date().toISOString()
            }

        });

        this.listadoarray.forEach( tarea => {

            if ( !ids.includes(tarea.id) ) {
                this._listado[tarea.id].completadoen = null;
            }

        });
    }
}

import 'colors';
import { 
    InquirerMenu,
    InquirerPause,
    leerimput,
    ListarTareasBorrar,
    ConfirmarBorrar,
    ListarTareasActualizar } from './helpers/inquierer.js';
import { Tarea } from './models/tarea.js';
import { Tareas } from './models/tareas.js';
import { SaveBD, ReadBD } from './helpers/SaveFile.js';

const main = async() => {
    console.log('Iniciando proceso...');

    let opt = '';
    const tareas = new Tareas();
    const tareadb = ReadBD()
    if (tareadb){
        tareas.CargarTareasFromArray(tareadb);
    }
    do{
        opt = await InquirerMenu();
        switch (opt) {
            case 1:
                const desc = await leerimput('descripcion de la tarea:');
                if (desc !== null) {
                    tareas.CrearTarea(desc);
                    SaveBD( tareas.listadoarray);
                }
            break;
            case 2 :
                tareas.listadotareas();
                break;
            case 3 :
                tareas.Listacompletadas(true);
                break;
            case 4 :
                tareas.Listacompletadas(false);
            break;
            case 5 :
                const ids = await ListarTareasActualizar( tareas.listadoarray);
                tareas.togglecompletadas( ids );
                SaveBD( tareas.listadoarray);
            break;
            case 6 :
                const id = await ListarTareasBorrar( tareas.listadoarray);
                if (id !== 0){
                    const ok = await ConfirmarBorrar('¿Esta seguro?');
                    if (ok){
                        tareas.BorrarTarea(id);
                        SaveBD( tareas.listadoarray);
                        console.log('Tarea Borrada exitosamente');
                    }
                }
            break;
        }
        if ( opt !==0)  await InquirerPause();
    } while(opt !== 0);
    console.clear();
};

main();

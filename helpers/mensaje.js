import readline from 'readline';
import 'colors';

const MostrarMenu = () =>{
    return new Promise(resolve => {

        console.clear();
        console.log('==========================='.green);
        console.log('  Selecciona una opcion'.green);
        console.log('===========================\n'.green);

        console.log(`${'1.'.green} Crear Tarea`);
        console.log(`${'2.'.green} Listar Tarea`);
        console.log(`${'3.'.green} Listar Tarea Completada`);
        console.log(`${'4.'.green} Listar Tarea Pendiente`);
        console.log(`${'5.'.green} Completar Tareas(s)`);
        console.log(`${'6.'.green} Borrar Tarea`);
        console.log(`${'0.'.green} Salir\n`);

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Seleccionar una opcion : ',(option) =>{
            rl.close();
            resolve(option)
        });
    })
}

const pausa = () =>{
    return new Promise(resolve =>{
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(`\n Presione ${'Enter'.red} para continuar`,(option) =>{
            rl.close();
            resolve();
        }); 
    })    
}

export {
    MostrarMenu,
    pausa
};

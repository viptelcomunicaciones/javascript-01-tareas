import inquirer from 'inquirer';
import colors from 'colors';

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

const MenuOptions = [
    {
        type: 'list',
        name:'opcion',
        message: 'Que deseas hacer',
        pageSize: 10,
        loop: false,
        choices: [
            {
                value :1,
                name:`${'1.'.red} ${'Crear Tarea'.verbose}`
            },
            {
                value :2,
                name:`${'2.'.red} ${'Listar Tarea'.verbose}`
            },
            {
                value :3,
                name:`${'3.'.red} ${'Listar Tarea Completada'.verbose}`
            },
            {
                value :4,
                name:`${'4.'.red} ${'Listar Tarea Pendiente'.verbose}`
            },
            {
                value :5,
                name:`${'5.'.red} ${'Completar Tareas(s)'.verbose}`
            },
            {
                value :6,
                name:`${'6.'.red} ${'Borrar Tarea'.verbose}`
            },
            {
                value :0,
                name:`${'0.'.red} ${'Salir'.verbose}\n`
            },   
        ],
    },
    
];


const pause = [
    {
    type: 'input',
    name: 'pause',
    message: `\n Presione ${'Enter'.red} para continuar`,
    default() {
        return 'Doe';
        }
    }
]


const InquirerMenu = async() =>{
    console.clear();
    console.log('==========================='.green);
    console.log('  Selecciona una opcion'.white);
    console.log('===========================\n'.green);

    const opt = await inquirer.prompt(MenuOptions);
    return opt.opcion;

    
} 

const InquirerPause = async() =>{
    const pausa = await inquirer.prompt(pause)
}

const leerimput = async(message)=>{

    const tarea = [
    {
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
    if (value.length ===0) {
        return 'Por favor ingrese un valor';
            }
        return true;
        }
    }
]
    console.log(`\nIngrese ${'0'.green} para cancelar y volver al menú\n`.help);
    const tareaimput = await inquirer.prompt(tarea);
    
    if (tareaimput.desc === '0') {
        return null;
    }
    
    return tareaimput.desc;
}

const ListarTareasBorrar = async(tareas = []) =>{
    const choices = tareas.map( (tarea, id) => {

        const idx = `${id + 1}.`.green;

        return {
            value: tarea.id,
            name:  `${ idx } ${ tarea.desc }`
        }
    });

    choices.push({
        value:0,
        name:`${'0.'.green} ${'Cancelar'.verbose}\n`
    });

    const Tareas = [
    {
        type: 'list',
        name:'opciontareas',
        message: 'Escoje la tarea',
        loop: false,
        choices
    },
    
    ];

    const id = await inquirer.prompt(Tareas);
    return id['opciontareas'];
}

const ConfirmarBorrar =async(mensaje) =>{

    const confirmacion =[
        {
            type: 'confirm',
            name:'ok',
            message:mensaje
        }
    ];
    const id = await inquirer.prompt(confirmacion);
    return id['ok'];
}

const ListarTareasActualizar = async(tareas = []) =>{
    const choices = tareas.map( (tarea, id) => {

        const idx = `${id + 1}.`.green;

        return {
            value: tarea.id,
            name:  `${ idx } ${ tarea.desc }`,
            checked:(tarea.completadoen)?true : false
        }
    });

    const Tarea = [
    {
        type: 'checkbox',
        name:'idstareas',
        message: 'Seleccione las tarea',
        loop: false,
        choices
    },
    
    ];

    const id = await inquirer.prompt(Tarea);
    return id['idstareas'];
}
export {
    InquirerMenu,
    InquirerPause,
    leerimput,
    ListarTareasBorrar,
    ConfirmarBorrar,
    ListarTareasActualizar
};

import inquirer from 'inquirer';

import colors from 'colors';

const preguntas = [{
    type: 'list',
    name: 'opcionmenu',
    message: '¿Qué desea hacer?',
    choices: [{
            value: '1',
            name: `${'1.'.green}Crear tarea`
        },
        {
            value: '2',
            name: `${'2.'.green}Listar tareas`
        },
        {
            value: '3',
            name: `${'3.'.green}Listar tareas completadas`
        },
        {
            value: '4',
            name: `${'4.'.green}Listar tareas pendientes`
        },
        {
            value: '5',
            name: `${'5.'.green}Completar tareas`
        },
        {
            value: '6',
            name: `${'6.'.green}Borrar tarea`
        },
        {
            value: '0',
            name: `${'0.'.green}Salir`
        }
    ]
}];

const inquirerMenu = async() => {

    //console.clear();
    console.log('======================'.rainbow);
    console.log('Seleccione una opción.'.yellow);
    console.log('======================\n'.rainbow);

    const { opcionmenu } = await inquirer.prompt(preguntas);
    return opcionmenu;

}



const inquirerPausa = async() => {

    const pausa = [{
        type: 'input',
        name: 'key',
        message: `Presione ${'ENTER'.green} para continuar`
    }];

    await inquirer.prompt(pausa);


}

const leerTarea = async(message) => {

    const pregunta = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value.length === 0) {
                return 'Ingrese una tarea.'
            }
            return true;
        }
    }];

    const { desc } = await inquirer.prompt(pregunta);
    return desc;
}


export { inquirerMenu, inquirerPausa, leerTarea };
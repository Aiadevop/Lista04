//const { inquirerMenu } = require('./helpers/inquirer').default;
//const { mostrarMenu, pausa } = require('./helpers/mensajes');

import colors from 'colors';

import { inquirerMenu, inquirerPausa } from './helpers/inquirer.js';
//import { pausa } from './helpers/inquirer.js';
import { Tarea } from './models/tarea.js'
import { Tareas } from './models/tareas.js';



console.clear();

const main = async() => {

    console.log("Hola Mundo.".red);
    let opt = '';

    do {
        // opt = await inquirerMenu();
        // console.log('Ha seleccionado la opción', { opt });

        const tareas = new Tareas();
        const tarea = new Tarea("Comprar comida.");
        // console.log(tarea);    

        tareas._listado[tarea.id] = tarea;
        console.log(tareas);

        if (opt != '0') await inquirerPausa();

    } while (opt !== '0');

    //pausa();
}

main();
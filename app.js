import colors from 'colors';

import { inquirerMenu, inquirerPausa } from './helpers/inquirer.js';
import { Tarea } from './models/tarea.js'
import { Tareas } from './models/tareas.js';

console.clear();

const main = async() => {

    console.log("Hola Mundo.".green);
    let opt = '';
    const tareas = new Tareas();

    do {
        opt = await inquirerMenu();
        console.log('Ha seleccionado la opción', { opt });


        await inquirerPausa();

    } while (opt !== '0');


}

main();
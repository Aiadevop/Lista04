import { guardarDB } from './helpers/guardarArchivo.js';
import { inquirerMenu, inquirerPausa, leerTarea } from './helpers/inquirer.js';
import { Tarea } from './models/tarea.js'
import { Tareas } from './models/tareas.js';

console.clear();

const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    do {

        opt = await inquirerMenu();
        switch (opt) {

            case '1':
                const desc = await leerTarea('Descripción de la tarea: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                console.log(tareas.listadoArr);
                break;

            case '0':

                break;

            default:
                break;
        }

        guardarDB(tareas.listadoArr);

        await inquirerPausa();

    } while (opt !== '0');


}

main();
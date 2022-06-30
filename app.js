import { guardarDB, leerDB } from './helpers/guardarArchivo.js';
import {
    inquirerMenu,
    inquirerPausa,
    leerTarea,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} from './helpers/inquirer.js';
import { Tarea } from './models/tarea.js'
import { Tareas } from './models/tareas.js';

const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasdelArray(tareasDB);
    }

    //await inquirerPausa();

    do {

        opt = await inquirerMenu();
        switch (opt) {

            case '1':
                const desc = await leerTarea('Descripción de la tarea: ');
                tareas.crearTarea(desc);
                break;
            case '2':

                tareas.listadoCompleto();
                break;
            case '3': // listar completadas
                tareas.listarPendientesCompletadas(true);
                break;

            case '4': // listar pendientes
                tareas.listarPendientesCompletadas(false);
                break;

            case '5': //completado | pendiente

                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.convertirTareasenCompletadas(ids);
                break;

            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== '0') {
                    const ok = await confirmar('¿Desea borrar la tarea?')
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada.');
                    }
                }
                break;

            case '0':

                break;

            default:
                break;
        }

        guardarDB(tareas.listadoArr);
        //Comento la base de datos para que no se borre lo que he escrito en ella.

        await inquirerPausa();

    } while (opt !== '0');


}

main();
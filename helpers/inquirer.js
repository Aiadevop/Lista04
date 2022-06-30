//Inquire nos vale para dar formato a las salidas, hacer listas(list)
// hacer confirmaciones de preguntas (confirm), con map desglosar clases
// con (input) permite ingresar valores y con inquirer.prompt se da la salida por pantalla.

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

const listadoTareasBorrar = async(tareas = []) => {

    const choices = tareas.map((tarea, i) => { //map descompone la tarea en sus hijos
        //permitiendonos mostrarlas con el return después como queramos.
        const idx = `${i+1}.`.green;
        return { //muestra las tareas de 1 en 1 por eso hay que meterlas en la list de preguntas.
            //msg: 'Hola' Si pusieramos esto mostraría hola en cada hueco de la tarea.
            value: tarea.id,
            name: `${idx} ${tarea.descripcion}`
        }
    });

    //Para añadir al inicio una opción de salirse sin borrar.
    choices.unshift({
        value: '0',
        name: '0.'.green + ' Salir sin borrar tarea.'
    });

    const preguntas = {
        type: 'list',
        name: 'id',
        message: 'Borrar',
        choices

    }
    const { id } = await inquirer.prompt(preguntas);
    return id;
}

//Preguntar si está seguro si quiere borrar.

const confirmar = async(message) => {

    const question = [{
        type: 'confirm',
        name: 'ok',
        message
    }];

    const { ok } = await inquirer.prompt(question);
    return ok;

}

const mostrarListadoChecklist = async(tareas = []) => {

    const choices = tareas.map((tarea, i) => {
        const idx = `${i+1}.`.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.descripcion}`,
            checked: (tarea.completadoEn) ? true : false
                //Marca un check en la tarea si está completada si no, no lo marca.
        }
    });

    const pregunta = {
        type: 'checkbox',
        name: 'ids', //El checkbox devuelve un arreglo con todos los ids seleccionados. 
        message: 'Selecciones',
        choices

    }
    const { ids } = await inquirer.prompt(pregunta);
    return ids;
}



export { inquirerMenu, inquirerPausa, leerTarea, listadoTareasBorrar, confirmar, mostrarListadoChecklist };
import { inquirerMenu } from './helpers/inquirer.js';
//import { Tareas } from './models/tareas.js';
require('colors');

const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async() => {

    console.log("Hola Laura y Darío.".red);
    let opt = '';


    do {
        opt = await inquirerMenu();
        console.log({ opt });


    } while (opt !== '0') await pausa();


}

main();
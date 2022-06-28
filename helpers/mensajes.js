require('colors');

const mostrarMenu = () => {

    return new Promise(resolve => {
        //console.clear();
        console.log('======================'.rainbow);
        console.log('Seleccione una opción.'.yellow);
        console.log('======================\n'.rainbow);

        console.log(`${'1.'.green}Crear tarea`);
        console.log(`${'2.'.green}Listar tareas`);
        console.log(`${'3.'.green}Listar tareas completadas`);
        console.log(`${'4.'.green}Listar tareas pendientes`);
        console.log(`${'5.'.green}Completar tareas`);
        console.log(`${'6.'.green}Borrar tarea`);
        console.log(`${'0.'.green}Salir\n`);

        /*Equivalente al Scanner de Java para meter datos por consola. */

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opción: ', (opt) => {
            //console.log(opt);
            readline.close();
            resolve(opt);
        })
    });
}

const pausa = () => {

    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {;
            readline.close();
            resolve();
        })
    });


}

module.exports = {
    mostrarMenu,
    pausa
};
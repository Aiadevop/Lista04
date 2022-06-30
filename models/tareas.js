import { Tarea } from "./tarea.js";

class Tareas {

    _listado = {};

    get listadoArr() { //convertimos el objeto en un método.

        const listado = [];
        Object.keys(this._listado).forEach(i => {
                const tarea = this._listado[i];
                listado.push(tarea);
            }) //Extrae cada una de las posiciones de _listado, que es un objecto..
        return listado;

    }

    constructor() {
        this._listado = {};
    }

    cargarTareasdelArray(tareas = []) {

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })

    }

    crearTarea(descripcion = '') {
        const tarea = new Tarea(descripcion);
        this._listado[tarea.id] = tarea;

    }

    listadoCompleto() {
        //1.Recolectar piedras :: Completa. verde | Pendiente. rojo
        console.log();
        this.listadoArr.forEach((tarea, i) => {
            const idx = `${i+1}`.green;
            const { descripcion, completadoEn } = tarea; //desestructuramos las partes con las que queremos trabajar.
            const estado = (completadoEn) //si completado existe
                ? //entonces->
                'Completado'.green : //y si no.
                'Pendiente'.red;

            console.log(`${idx}.${descripcion} :: ${estado}`);
        });
    }

    listarPendientesCompletadas(completadas = true) {
        console.log();
        let contador = 0;
        this.listadoArr.forEach((tarea, i) => {

            const { descripcion, completadoEn } = tarea;
            const estado = (completadoEn) //si completadoEn existe
                ? //entonces->
                'Completado'.green : //y si no.
                'Pendiente'.red;
            if (completadas) {
                if (completadoEn) {
                    contador += 1
                    console.log(`${contador}.${descripcion} :: ${estado}`);
                }
            } else if (!completadoEn) {
                contador += 1
                console.log(`${contador}.${descripcion} :: ${estado}`);
            }

        });
    }

    borrarTarea(id = '') { //le decimos que el id es un String es opcional
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    convertirTareasenCompletadas(ids = []) {
        ids.forEach(id => {
            const tarea = this._listado[id]; //si trabajo con un objeto puedo ir
            //directamente a la propiedad que me interesa, en un arreglo no.
            if (!tarea.completadoEn) { //distinto de null
                tarea.completadoEn = new Date().toISOString() //guardamos la fecha en que la completamos.
            }
        });
        this.listadoArr.forEach(tarea => {

            if (!ids.includes(tarea.id)) {
                //Si no existe el id, hay que limpiar la tarea.
                this._listado[tarea.id].completadoEn = null;
            }
        })
    }
}


export { Tareas };
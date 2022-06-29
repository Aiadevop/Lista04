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

    crearTarea(descripcion) {
        const tarea = new Tarea(descripcion);
        this._listado[tarea.id] = tarea;

    }
}

export { Tareas };
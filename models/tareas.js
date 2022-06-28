import { Tarea } from "./tarea.js";

class Tareas {

    _listado = {};

    constructor() {
        this._listado = {};
    }

    crearTarea(descripcion) {
        const tarea = new Tarea(descripcion);
        this._listado[tarea.id] = tarea;

    }
}

export { Tareas };
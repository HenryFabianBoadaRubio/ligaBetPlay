import { connect } from "../../helpers/db/connect.js";

export class estadistica_equipo extends connect {
    static instanceEstadistica_equipo;
    db;
    collection;
    constructor() {
        if (estadistica_equipo.instanceEstadistica_equipo) {
            return estadistica_equipo.instanceEstadistica_equipo;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('estadistica_equipo');
        estadistica_equipo.instanceEstadistica_equipo = this;
    }
    /**
     * Método destructor para liberar recursos y evitar fugas de memoria.
     * Borra las referencias estáticas de instancia tanto de la clase actual como de la clase padre (connect).
     *
     * @returns {void}
     */
    destructor(){
        estadistica_equipo.instanceEstadistica_equipo = undefined;
        connect.instanceConnect = undefined;
    }
}

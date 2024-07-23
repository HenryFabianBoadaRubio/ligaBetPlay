import { connect } from "../../helpers/db/connect.js";

export class estadistica_partido extends connect {
    static instanceEstadistica_partido;
    db;
    collection;
    constructor() {
        if (estadistica_partido.instanceEstadistica_partido) {
            return estadistica_partido.instanceEstadistica_partido;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('estadistica_partido');
        estadistica_partido.instanceEstadistica_partido = this;
    }
    /**
    * Método destructor para liberar recursos y evitar fugas de memoria.
    * Este método borra las referencias estáticas de instancia tanto de la clase actual como de la clase padre (connect).
    *
    * @returns {void}
    */
    destructor(){
        estadistica_partido.instanceEstadistica_partido = undefined;
        connect.instanceConnect = undefined;
    }
}

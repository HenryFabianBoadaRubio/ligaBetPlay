import { connect } from "../../helpers/db/connect.js";

export class estadistica_temporada extends connect {
    static instanceEstadistica_temporada;
    db;
    collection;
    constructor() {
        if (estadistica_temporada.instanceEstadistica_temporada) {
            return estadistica_temporada.instanceEstadistica_temporada;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('estadistica_temporada');
        estadistica_temporada.instanceEstadistica_temporada = this;
    }
    /**
     * Método destructor para liberar recursos y evitar fugas de memoria.
     * Este método borra las referencias estáticas de instancia tanto de la clase actual como de la clase padre (connect).
     *
     * @returns {void}
     */
    destructor(){
        estadistica_temporada.instanceEstadistica_temporada = undefined;
        connect.instanceConnect = undefined;
    }
}

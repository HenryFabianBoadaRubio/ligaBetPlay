import { connect } from "../../helpers/db/connect.js";

export class estadistica_jugador extends connect {
    static instanceEstadistica_jugador;
    db;
    collection;
    constructor() {
        if (estadistica_jugador.instanceEstadistica_jugador) {
            return estadistica_jugador.instanceEstadistica_jugador;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('estadistica_jugador');
        estadistica_jugador.instanceEstadistica_jugador = this;
    }
    /**
     * Método destructor para liberar recursos y evitar fugas de memoria.
     * Este método borra las referencias estáticas de instancia tanto de la clase actual como de la clase padre (connect).
     *
     * @returns {void}
     */
    destructor(){
        estadistica_jugador.instanceEstadistica_jugador = undefined;
        connect.instanceConnect = undefined;
    }
}

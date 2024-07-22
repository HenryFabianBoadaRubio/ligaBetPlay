import { connect } from "../../helpers/db/connect.js";

export class jugador extends connect {
    static instanceJugador;
    db;
    collection;
    constructor() {
        if (jugador.instanceJugador) {
            return jugador.instanceJugador;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('jugador');
        jugador.instanceJugador = this;
    }
    destructor(){
        jugador.instanceJugador = undefined;
        connect.instanceConnect = undefined;
    }
}

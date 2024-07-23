import { connect } from "../../helpers/db/connect.js";

export class estadio extends connect {
    static instanceEstadio;
    db;
    collection;
    constructor() {
        if (estadio.instanceEstadio) {
            return estadio.instanceEstadio;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('estadio');
        estadio.instanceEstadio = this;
    }
    destructor(){
        estadio.instanceEstadio = undefined;
        connect.instanceConnect = undefined;
    }
}

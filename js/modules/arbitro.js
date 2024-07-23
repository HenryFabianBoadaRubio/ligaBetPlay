import { connect } from "../../helpers/db/connect.js";

// 8. Gestion de arbitros

export class arbitro extends connect {
    static instanceArbitro;
    db;
    collection;
    constructor() {
        if (arbitro.instanceArbitro) {
            return arbitro.instanceArbitro;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('arbitro');
        arbitro.instanceArbitro = this;
    }
    destructor(){
        arbitro.instanceArbitro = undefined;
        connect.instanceConnect = undefined;
    }
}

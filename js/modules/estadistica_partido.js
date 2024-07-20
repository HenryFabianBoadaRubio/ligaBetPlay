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
    destructor(){
        estadistica_partido.instanceEstadistica_partido = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

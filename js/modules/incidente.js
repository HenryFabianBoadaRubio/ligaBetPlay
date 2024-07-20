import { connect } from "../../helpers/db/connect.js";

export class incidente extends connect {
    static instanceIncidente;
    db;
    collection;
    constructor() {
        if (incidente.instanceIncidente) {
            return incidente.instanceIncidente;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('incidente');
        incidente.instanceIncidente = this;
    }
    destructor(){
        incidente.instanceIncidente = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

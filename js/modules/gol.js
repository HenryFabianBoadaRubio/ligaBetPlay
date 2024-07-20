import { connect } from "../../helpers/db/connect.js";

export class gol extends connect {
    static instanceGol;
    db;
    collection;
    constructor() {
        if (gol.instanceGol) {
            return gol.instanceGol;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('gol');
        gol.instanceGol = this;
    }
    destructor(){
        gol.instanceGol = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

import { connect } from "../../helpers/db/connect.js";

export class premio extends connect {
    static instancePremio;
    db;
    collection;
    constructor() {
        if (premio.instancePremio) {
            return premio.instancePremio;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('premio');
        premio.instancePremio = this;
    }
    destructor(){
        premio.instancePremio = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

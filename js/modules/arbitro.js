import { connect } from "../../helpers/db/connect.js";

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
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

import { connect } from "../../helpers/db/connect.js";

export class informe extends connect {
    static instanceInforme;
    db;
    collection;
    constructor() {
        if (informe.instanceInforme) {
            return informe.instanceInforme;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('informe');
        informe.instanceInforme = this;
    }
    destructor(){
        informe.instanceInforme = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

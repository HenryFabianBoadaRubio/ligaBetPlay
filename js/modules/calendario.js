import { connect } from "../../helpers/db/connect.js";

export class calendario extends connect {
    static instanceCalendario;
    db;
    collection;
    constructor() {
        if (calendario.instanceCalendario) {
            return calendario.instanceCalendario;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('calendario');
        calendario.instanceCalendario = this;
    }
    destructor(){
        calendario.instanceCalendario = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

import { connect } from "../../helpers/db/connect.js";

export class rendimiento extends connect {
    static instanceRendimiento;
    db;
    collection;
    constructor() {
        if (rendimiento.instanceRendimiento) {
            return rendimiento.instanceRendimiento;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('rendimiento');
        rendimiento.instanceRendimiento = this;
    }
    destructor(){
        rendimiento.instanceRendimiento = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

import { connect } from "../../helpers/db/connect.js";

export class sancion extends connect {
    static instanceSancion;
    db;
    collection;
    constructor() {
        if (sancion.instanceSancion) {
            return sancion.instanceSancion;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('sancion');
        sancion.instanceSancion = this;
    }
    destructor(){
        sancion.instanceSancion = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

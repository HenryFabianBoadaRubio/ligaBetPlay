import { connect } from "../../helpers/db/connect.js";

export class comunicacion extends connect {
    static instanceComunicacion;
    db;
    collection;
    constructor() {
        if (comunicacion.instanceComunicacion) {
            return comunicacion.instanceComunicacion;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('comunicacion');
        comunicacion.instanceComunicacion = this;
    }
    destructor(){
        comunicacion.instanceComunicacion = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

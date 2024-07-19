import { connect } from "../../helpers/db/connect.js";

export class actividad extends connect {
    static instanceActividad;
    db;
    collection;
    constructor() {
        if (actividad.instanceActividad) {
            return actividad.instanceActividad;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('actividad');
        actividad.instanceActividad = this;
    }
    destructor(){
        actividad.instanceActividad = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

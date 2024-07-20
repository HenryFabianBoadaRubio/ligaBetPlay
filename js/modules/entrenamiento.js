import { connect } from "../../helpers/db/connect.js";

export class entrenamiento extends connect {
    static instanceEntrenamiento;
    db;
    collection;
    constructor() {
        if (entrenamiento.instanceEntrenamiento) {
            return entrenamiento.instanceEntrenamiento;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('entrenamiento');
        entrenamiento.instanceEntrenamiento = this;
    }
    destructor(){
        entrenamiento.instanceEntrenamiento = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

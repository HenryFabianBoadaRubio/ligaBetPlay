import { connect } from "../../helpers/db/connect.js";

export class entrenador extends connect {
    static instanceEntrenador;
    db;
    collection;
    constructor() {
        if (entrenador.instanceEntrenador) {
            return entrenador.instanceEntrenador;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('entrenador');
        entrenador.instanceEntrenador = this;
    }
    destructor(){
        entrenador.instanceEntrenador = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

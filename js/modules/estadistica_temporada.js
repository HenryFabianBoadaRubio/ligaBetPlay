import { connect } from "../../helpers/db/connect.js";

export class estadistica_temporada extends connect {
    static instanceEstadistica_temporada;
    db;
    collection;
    constructor() {
        if (estadistica_temporada.instanceEstadistica_temporada) {
            return estadistica_temporada.instanceEstadistica_temporada;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('estadistica_temporada');
        estadistica_temporada.instanceEstadistica_temporada = this;
    }
    destructor(){
        estadistica_temporada.instanceEstadistica_temporada = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

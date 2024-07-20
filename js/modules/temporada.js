import { connect } from "../../helpers/db/connect.js";

export class temporada extends connect {
    static instanceTemporada;
    db;
    collection;
    constructor() {
        if (temporada.instanceTemporada) {
            return temporada.instanceTemporada;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('temporada');
        temporada.instanceTemporada = this;
    }
    destructor(){
        temporada.instanceTemporada = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

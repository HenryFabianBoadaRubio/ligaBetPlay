import { connect } from "../../helpers/db/connect.js";

export class convocatoria extends connect {
    static instanceConvocatoria;
    db;
    collection;
    constructor() {
        if (convocatoria.instanceConvocatoria) {
            return convocatoria.instanceConvocatoria;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('convocatoria');
        convocatoria.instanceConvocatoria = this;
    }
    destructor(){
        convocatoria.instanceConvocatoria = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

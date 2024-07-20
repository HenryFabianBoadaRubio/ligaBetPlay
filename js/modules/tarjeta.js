import { connect } from "../../helpers/db/connect.js";

export class tarjeta extends connect {
    static instanceTarjeta;
    db;
    collection;
    constructor() {
        if (tarjeta.instanceTarjeta) {
            return tarjeta.instanceTarjeta;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('tarjeta');
        tarjeta.instanceTarjeta = this;
    }
    destructor(){
        tarjeta.instanceTarjeta = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

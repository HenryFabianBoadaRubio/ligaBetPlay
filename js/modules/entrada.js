import { connect } from "../../helpers/db/connect.js";

export class entrada extends connect {
    static instanceEntrada;
    db;
    collection;
    constructor() {
        if (entrada.instanceEntrada) {
            return entrada.instanceEntrada;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('entrada');
        entrada.instanceEntrada = this;
    }
    destructor(){
        entrada.instanceEntrada = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

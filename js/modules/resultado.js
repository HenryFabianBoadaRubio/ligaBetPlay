import { connect } from "../../helpers/db/connect.js";

export class resultado extends connect {
    static instanceResultado;
    db;
    collection;
    constructor() {
        if (resultado.instanceResultado) {
            return resultado.instanceResultado;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('resultado');
        resultado.instanceResultado = this;
    }
    destructor(){
        resultado.instanceResultado = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

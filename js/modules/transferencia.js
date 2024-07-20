import { connect } from "../../helpers/db/connect.js";

export class transferencia extends connect {
    static instanceTransferencia;
    db;
    collection;
    constructor() {
        if (transferencia.instanceTransferencia) {
            return transferencia.instanceTransferencia;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('transferencia');
        transferencia.instanceTransferencia = this;
    }
    destructor(){
        transferencia.instanceTransferencia = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

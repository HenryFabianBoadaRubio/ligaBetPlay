import { connect } from "../../helpers/db/connect.js";

export class partido extends connect {
    static instancePartido;
    db;
    collection;
    constructor() {
        if (partido.instancePartido) {
            return partido.instancePartido;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('partido');
        partido.instancePartido = this;
    }
    destructor(){
        partido.instancePartido = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

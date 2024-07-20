import { connect } from "../../helpers/db/connect.js";

export class patrocinador extends connect {
    static instancePatrocinador;
    db;
    collection;
    constructor() {
        if (patrocinador.instancePatrocinador) {
            return patrocinador.instancePatrocinador;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('patrocinador');
        patrocinador.instancePatrocinador = this;
    }
    destructor(){
        patrocinador.instancePatrocinador = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

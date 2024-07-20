import { connect } from "../../helpers/db/connect.js";

export class equipo extends connect {
    static instanceEquipo;
    db;
    collection;
    constructor() {
        if (equipo.instanceEquipo) {
            return equipo.instanceEquipo;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('equipo');
        equipo.instanceEquipo = this;
    }
    destructor(){
        equipo.instanceEquipo = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

import { connect } from "../../helpers/db/connect.js";

export class estadistica_equipo extends connect {
    static instanceEstadistica_equipo;
    db;
    collection;
    constructor() {
        if (estadistica_equipo.instanceEstadistica_equipo) {
            return estadistica_equipo.instanceEstadistica_equipo;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('estadistica_equipo');
        estadistica_equipo.instanceEstadistica_equipo = this;
    }
    destructor(){
        estadistica_equipo.instanceEstadistica_equipo = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

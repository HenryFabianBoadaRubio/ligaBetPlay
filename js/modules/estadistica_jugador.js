import { connect } from "../../helpers/db/connect.js";

export class estadistica_jugador extends connect {
    static instanceEstadistica_jugador;
    db;
    collection;
    constructor() {
        if (estadistica_jugador.instanceEstadistica_jugador) {
            return estadistica_jugador.instanceEstadistica_jugador;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('estadistica_jugador');
        estadistica_jugador.instanceEstadistica_jugador = this;
    }
    destructor(){
        estadistica_jugador.instanceEstadistica_jugador = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

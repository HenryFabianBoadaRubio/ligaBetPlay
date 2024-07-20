import { connect } from "../../helpers/db/connect.js";

export class equipamiento extends connect {
    static instanceEquipamiento;
    db;
    collection;
    constructor() {
        if (equipamiento.instanceEquipamiento) {
            return equipamiento.instanceEquipamiento;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('equipamiento');
        equipamiento.instanceEquipamiento = this;
    }
    destructor(){
        equipamiento.instanceEquipamiento = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

import { connect } from "../../helpers/db/connect.js";

export class lesion extends connect {
    static instanceLesion;
    db;
    collection;
    constructor() {
        if (lesion.instanceLesion) {
            return lesion.instanceLesion;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('lesion');
        lesion.instanceLesion = this;
    }
    destructor(){
        lesion.instanceLesion = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
}

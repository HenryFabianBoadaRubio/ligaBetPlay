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

    async registerEquipment({id_equipo,tipo,cantidad,fecha_adquisicion}){
        let res;
        try {
            //verificar la existencia del equipo.
            const equipoExist=await this.db.collection('equipo').findOne({_id:new ObjectId(id_equipo)})
            if(!equipoExist){
                return{
                    error: "Not found",
                    message: "El equipo no existe"
                }
            }


            //registrar el equipamiento.
            const nuevoEquipamiento= {
                id_equipo: new ObjectId(id_equipo),
                tipo: tipo,
                cantidad: cantidad,
                fecha_adquisicion: new Date(fecha_adquisicion)
            }
        } catch (error) {
            
        }
    }
}

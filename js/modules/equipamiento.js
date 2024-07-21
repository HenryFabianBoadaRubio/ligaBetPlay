import { connect } from "../../helpers/db/connect.js";
import { ObjectId } from "mongodb";

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
             
            //validar el formato de la fecha que vamos a ingresar. cumpliendo AA-MM-DD
            const regex = /^\d{4}-\d{2}-\d{2}$/;
            if (!regex.test(fecha_adquisicion)) {
                return {
                    error: "Not valid",
                    message: "Formato de fecha incorrecto, debe ser AA-MM-DD"
                };
            }

            //verificar si el equipamiento ya existe para el equipo.
            const equipamientoExist=await this.db.collection('equipamiento').findOne({id_equipo:new ObjectId(id_equipo), tipo: tipo})
            if(equipamientoExist){
                return{
                    error: "Not valid",
                    message: "El equipamiento ya existe para el equipo"
                }
            }
            //registrar el equipamiento.
            let nuevoEquipamiento= {
                id_equipo: new ObjectId(id_equipo),
                tipo: tipo,
                cantidad: cantidad,
                fecha_adquisicion: new Date(fecha_adquisicion)
            }

            //registrar el equipamiento.
            res= await this.collection.insertOne(nuevoEquipamiento);
            return {
                message: "Equipamiento registrado correctamente",
                data: res.ops
            };

        } catch (error) {
            return { error: "Error", message: error.message,details: error.errInfo};
            
        }
    }
}

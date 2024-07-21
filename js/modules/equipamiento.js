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
        /**
     * Registra un nuevo equipamiento para un equipo específico.
     *
     * @param {Object} params - Los parámetros necesarios para registrar el equipamiento.
     * @param {string} params.id_equipo - El id del equipo.
     * @param {string} params.tipo - El tipo del equipamiento.
     * @param {number} params.cantidad - La cantidad de equipamientos a registrar.
     * @param {string} params.fecha_adquisicion - La fecha de adquisición del equipamiento en formato AA-MM-DD.
     *
     * @returns {Object} - Objeto con mensaje y datos en caso de éxito o error.
     * @returns {Object.error} - Indica si hubo un error durante el proceso.
     * @returns {Object.message} - Mensaje descriptivo del resultado del proceso.
     * @returns {Object.data} - Datos relacionados con el resultado del proceso (en caso de éxito).
     * @returns {Object.details} - Detalles adicionales del error (en caso de error).
     */
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
        /**
     * Elimina un equipamiento específico de un equipo.
     *
     * @param {Object} params - Parámetros necesarios para eliminar el equipamiento.
     * @param {string} params.id_equipo - El id del equipo.
     * @param {string} params.tipo - El tipo del equipamiento.
     *
     * @returns {Object} - Objeto con mensaje y datos en caso de éxito o error.
     * @returns {Object.error} - Indica si hubo un error durante el proceso.
     * @returns {Object.message} - Mensaje descriptivo del resultado del proceso.
     * @returns {Object.data} - Datos relacionados con el resultado del proceso (en caso de éxito).
     * @returns {Object.details} - Detalles adicionales del error (en caso de error).
     */
    async deleteEquipment({id_equipo, tipo}){
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

            //verificar la existencia del equipamiento.
            const equipamientoExist=await this.db.collection('equipamiento').findOne({id_equipo:new ObjectId(id_equipo), tipo: tipo})
            if(!equipamientoExist){
                return{
                    error: "Not found",
                    message: "El equipamiento no existe para el equipo"
                }
            }

            //eliminar el equipamiento.
            res= await this.collection.deleteOne({id_equipo:new ObjectId(id_equipo), tipo: tipo});
            return {
                message:"equipamiento eliminado correctamente",
                data: res
             }   
        } catch (error) {
            console.log(error);
            
            return { error: "Error", message: error.message,details: error.errInfo};
            
        }
    }
    /**
     * Actualiza un equipamiento específico de un equipo en la base de datos.
     *
     * @param {Object} params - Parámetros necesarios para actualizar el equipamiento.
     * @param {string} params.id_equipo - El id del equipo.
     * @param {string} params.tipo - El tipo del equipamiento.
     * @param {number} params.cantidad - La nueva cantidad de equipamientos.
     * @param {string} params.Fecha_adquisicion - La nueva fecha de adquisición del equipamiento en formato AA-MM-DD.
     *
     * @returns {Object} - Objeto con mensaje y datos en caso de éxito o error.
     * @returns {Object.error} - Indica si hubo un error durante el proceso.
     * @returns {Object.message} - Mensaje descriptivo del resultado del proceso.
     * @returns {Object.data} - Datos relacionados con el resultado del proceso (en caso de éxito).
     * @returns {Object.details} - Detalles adicionales del error (en caso de error).
     */
    async updateEquipment({id_equipo, tipo, cantidad, Fecha_adquisicion}){
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
            if (!regex.test(Fecha_adquisicion)) {
                return {
                    error: "Not valid",
                    message: "Formato de fecha incorrecto, debe ser AA-MM-DD"
                };
            }
            let data={
                tipo: tipo,
                cantidad: cantidad,
                Fecha_adquisicion: new Date(Fecha_adquisicion)
            }
            res=await this.collection.updateOne({id_equipo:new ObjectId(id_equipo)},{$set:data})
            return{
                message: "Equipamiento actualizado correctamente",
                data: res
            }
        } catch (error) {
            return { error: "Error", message: error.message,details: error.errInfo};
            
        }

    }}
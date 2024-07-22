import { connect } from "../../helpers/db/connect.js";
import { ObjectId } from "mongodb";

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

        /**
     * Registra un nuevo patrocinador en la base de datos.
     *
     * @param {Object} datosPatrocinador - Los datos del patrocinador a registrar.
     * @param {string} datosPatrocinador.nombre - El nombre del patrocinador.
     * @param {string} datosPatrocinador.tipo - El tipo de patrocinador.
     * @param {number} datosPatrocinador.monto - El monto del patrocinador.
     * @param {string} datosPatrocinador.fechaInicio - La fecha de inicio del patrocinador (formato AA-MM-DD).
     * @param {string} datosPatrocinador.fechaFin - La fecha de fin del patrocinador (formato AA-MM-DD).
     *
     * @returns {Object} - Objeto con mensaje y datos en caso de éxito o error.
     * @returns {Object.error} - Indica si hubo un error.
     * @returns {Object.message} - Mensaje de éxito o error.
     * @returns {Object.data} - Datos adicionales en caso de éxito (id del patrocinador registrado).
     * @returns {Object.data.ejemploFormatoCorrecto} - Ejemplo de formato de fecha correcto.
     * @returns {Object.details} - Detalles del error en caso de error.
     */
    async registerSponsor({nombre,tipo,monto,fechaInicio,fechaFin}){
        let res;
        try {
            //Verificar el formato de fechas que sea AA-MM-DD
            const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
            if (!dateRegex.test(fechaInicio) ||!dateRegex.test(fechaFin)) {
                return{
                    error: "Error",
                    message: "Formato de fecha incorrecto. Debe ser AA-MM-DD",
                    data: {
                        ejemploFormatoCorrecto: "2024-07-21"
                    }
                }
            }

             //Validar que la fecha de fin sea posterior a la fecha de inicio
             const start = new Date(fechaInicio);
             const end = new Date(fechaFin);
 
             if (end <= start) {
                 return{
                     error: "Error",
                     message: "La fecha de fin debe ser posterior a la fecha de inicio",
                 }
             }

            //Validar que el monto sea un número mayor a cero
            if (typeof monto!== 'number' || monto <= 0) {
                return{
                    error: "Error",
                    message: "El monto debe ser un número mayor a cero",
                }
            }

           //registrar nuevo patrocinador
            res = await this.collection.insertOne({
                nombre:nombre,
                tipo:tipo,
                monto:monto,
                fechaInicio:new Date(fechaInicio),
                fechaFin:new Date(fechaFin)
                });
            return {
                message: "Patrocinador registrado correctamente",
                data: res.insertedId
            }


        } catch (error) {
            return { error: "Error", message: error.message,details: error.errInfo};
            
        }
    }
        /**
     * Elimina un patrocinador de la base de datos.
     *
     * @param {string} id - El id del patrocinador a eliminar.
     *
     * @returns {Object} - Objeto con mensaje y datos en caso de éxito o error.
     * @returns {Object.error} - Indica si hubo un error.
     * @returns {Object.message} - Mensaje de éxito o error.
     * @returns {Object.data} - Datos adicionales en caso de éxito (número de patrocinadores eliminados).
     * @returns {Object.details} - Detalles del error en caso de error.
     */
    async deleteSponsor(id){
        let res;
        try {
            //Verificar que el patrocinador que se quiere eliminar exista.
            const patrocinador = await this.collection.findOne({_id: new ObjectId(id)});
            if (!patrocinador) {
                return{
                    error: "Error",
                    message: "No se encontró el patrocinador con el id: " + id
                }
            }
            
            //eliminar patrocinador
            res = await this.collection.deleteOne({_id: new ObjectId(id)});
            return {
                message: "Patrocinador eliminado correctamente",
                data: res.deletedCount
            }
        } catch (error) {
            return { error: "Error", message: error.message, details: error.errInfo};
            
        }
    }
        /**
     * Actualiza un patrocinador en la base de datos.
     *
     * @param {string} id - El id del patrocinador a actualizar.
     * @param {Object} datosPatrocinador - Los nuevos datos del patrocinador.
     * @param {string} datosPatrocinador.nombre - El nuevo nombre del patrocinador.
     * @param {string} datosPatrocinador.tipo - El nuevo tipo de patrocinador.
     * @param {number} datosPatrocinador.monto - El nuevo monto del patrocinador.
     * @param {string} datosPatrocinador.fechaInicio - La nueva fecha de inicio del patrocinador (formato AA-MM-DD).
     * @param {string} datosPatrocinador.fechaFin - La nueva fecha de fin del patrocinador (formato AA-MM-DD).
     *
     * @returns {Object} - Objeto con mensaje y datos en caso de éxito o error.
     * @returns {Object.error} - Indica si hubo un error.
     * @returns {Object.message} - Mensaje de éxito o error.
     * @returns {Object.data} - Datos adicionales en caso de éxito (resultado de la operación de actualización).
     * @returns {Object.details} - Detalles del error en caso de error.
     */
    async updateSponsor(id,{nombre,tipo,monto,fechaInicio,fechaFin}){
        let res;
        try {

            //verificar la existencia del patrocinador
            const patrocinadorExist = await this.db.collection('patrocinador').findOne({_id: new ObjectId(id)});
            if (!patrocinadorExist) {
                return{
                    error: "Error",
                    message: "No se encontró el patrocinador con el id: " + id
                }
            }

    
            
            //Verificar el formato de fechas que sea AA-MM-DD
            const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
            if (!dateRegex.test(fechaInicio) ||!dateRegex.test(fechaFin)) {
                return{
                    error: "Error",
                    message: "Formato de fecha incorrecto. Debe ser AA-MM-DD",
                    data: {
                        ejemploFormatoCorrecto: "2024-07-21"
                    }
                }
            }

             //Validar que la fecha de fin sea posterior a la fecha de inicio
             const start = new Date(fechaInicio);
             const end = new Date(fechaFin);
             if (end <= start) {
                return{
                    error: "Error",
                    message: "La fecha de fin debe ser posterior a la fecha de inicio",
                }
            }

             //Validar que el monto sea un número mayor a cero
             if (typeof monto!== 'number' || monto <= 0) {
                return{
                    error: "Error",
                    message: "El monto debe ser un número mayor a cero",
                }
            }

            //Actualizar patrocinador
            res = await this.collection.updateOne({_id: new ObjectId(id)},{$set: {
                nombre: nombre,
                tipo: tipo,
                monto: monto,
                fechaInicio: new Date(fechaInicio),
                fechaFin: new Date(fechaFin)
            }});
            return{
                message: "Patrocinador actualizado correctamente",
                data: res
            }

        } catch (error) {
            return { error: "Error", message: error.message,details: error.errInfo};
             
        }

    }

}

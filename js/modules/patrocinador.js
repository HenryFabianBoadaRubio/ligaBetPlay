import { connect } from "../../helpers/db/connect.js";
import { ObjectId } from "mongodb";

// 11. Gestión de patrocinadores

export class PatrocinadorGestion extends connect {
    static instancePatrocinadorGestion;
    db;
    collection;

    constructor() {
        super();
        if (PatrocinadorGestion.instancePatrocinadorGestion) {
            return PatrocinadorGestion.instancePatrocinadorGestion;
        }
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('patrocinador');
        PatrocinadorGestion.instancePatrocinadorGestion = this;
    }

    destructor() {
        PatrocinadorGestion.instancePatrocinadorGestion = undefined;
        super.destructor();
    }

    /**
     * Registra un nuevo patrocinador en la base de datos.
     *
     * @param {Object} datos - Los datos del patrocinador a registrar.
     * @param {string} datos._id - El identificador único para el patrocinador. Si no se proporciona, se generará un nuevo ObjectId.
     * @param {string} datos.nombre - El nombre del patrocinador.
     * @param {string} datos.tipo - El tipo del patrocinador.
     * @param {number} datos.monto - El monto del patrocinio.
     * @param {Date} datos.fechaInicio - La fecha de inicio del patrocinio.
     * @param {Date} datos.fechaFin - La fecha de fin del patrocinio.
     *
     * @returns {Object} - Un objeto que contiene el resultado de la operación.
     * @returns {string} resultado.mensaje - Un mensaje que indica el éxito o fracaso de la operación.
     * @returns {Object} resultado.datos - Los datos del patrocinador si la operación fue exitosa.
     * @returns {Object} resultado.error - Un objeto de error si la operación falló.
     * @returns {string} resultado.error.error - El tipo de error.
     * @returns {string} resultado.error.mensaje - El mensaje de error.
     * @returns {Object} resultado.error.detalles - Detalles adicionales del error.
     */
    async registerSponsor({ _id, nombre, tipo, monto, fechaInicio, fechaFin }) {
        try {
            const sponsorExist = await this.collection.findOne({ nombre: {$regex: new RegExp(`^${nombre}$`, 'i')} });
            if (sponsorExist) {
                return {
                    error: "No válido",
                    mensaje: "El patrocinador ya existe"
                };
            }

            const res = await this.collection.insertOne({
                _id: _id ? new ObjectId(_id) : new ObjectId(),
                nombre,
                tipo,
                monto,
                fechaInicio: new Date(fechaInicio),
                fechaFin: new Date(fechaFin)
            });
            return {
                mensaje: "Patrocinador registrado correctamente",
                datos: res.ops
            };
        } catch (error) {
            return { error: "Error", mensaje: error.message, detalles: error.errInfo };
        }
    }

    /**
     * Actualiza los datos de un patrocinador en la base de datos.
     *
     * @param {string} id - El identificador único del patrocinador a actualizar.
     * @param {Object} data - Los nuevos datos del patrocinador.
     * @param {string} [data.nombre] - El nuevo nombre del patrocinador.
     * @param {string} [data.tipo] - El nuevo tipo del patrocinador.
     * @param {number} [data.monto] - El nuevo monto del patrocinio.
     * @param {Date} [data.fechaInicio] - La nueva fecha de inicio del patrocinio.
     * @param {Date} [data.fechaFin] - La nueva fecha de fin del patrocinio.
     *
     * @returns {Promise} - Una promesa que resuelve con un objeto que contiene el resultado de la operación.
     * @returns {string} result.message - Un mensaje que indica el éxito o fracaso de la operación.
     * @returns {Object} result.data - Los detalles de la operación de actualización.
     * @returns {Object} result.error - Un objeto de error si la operación falló.
     * @returns {string} result.error.error - El tipo de error.
     * @returns {string} result.error.message - El mensaje de error.
     * @returns {Object} result.error.details - Detalles adicionales del error.
     */
    async updateSponsor(id, data) {
        try {
            const updateData = { ...data };
            if (data.fechaInicio) {
                updateData.fechaInicio = new Date(data.fechaInicio);
            }
            if (data.fechaFin) {
                updateData.fechaFin = new Date(data.fechaFin);
            }
            const res = await this.collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });
            return {
                message: "Patrocinador actualizado correctamente",
                data: res
            };
        } catch (error) {
            return { error: "Error", message: error.message, details: error.errInfo };
        }
    }

    /**
     * Elimina un patrocinador de la base de datos por su identificador único.
     *
     * @param {string} id - El identificador único del patrocinador a eliminar.
     *
     * @returns {Promise} - Una promesa que resuelve con un objeto que contiene el resultado de la operación.
     * @returns {string} result.message - Un mensaje que indica el éxito o fracaso de la operación.
     * @returns {Object} result.data - Los detalles de la operación de eliminación.
     * @returns {Object} result.error - Un objeto de error si la operación falló.
     * @returns {string} result.error.error - El tipo de error.
     * @returns {string} result.error.message - El mensaje de error.
     * @returns {Object} result.error.details - Detalles adicionales del error.
     */
    async deleteSponsor(id) {
        try {
            const res = await this.collection.deleteOne({ _id: new ObjectId(id) });
            return {
                message: "Patrocinador eliminado correctamente",
                data: res
            };
        } catch (error) {
            return { error: "Error", message: error.message, details: error.errInfo };
        }
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

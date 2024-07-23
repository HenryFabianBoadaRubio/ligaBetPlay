import { connect } from "../../helpers/db/connect.js";
import { ObjectId } from 'mongodb';

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
}

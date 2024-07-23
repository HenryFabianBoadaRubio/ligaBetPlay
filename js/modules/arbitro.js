import { connect } from "../../helpers/db/connect.js";
import { ObjectId } from 'mongodb';

// 8. Gestion de arbitros

export class ArbitroGestion extends connect {
    static instanceArbitroGestion;
    db;
    collection;

    constructor() {
        super();
        if (ArbitroGestion.instanceArbitroGestion) {
            return ArbitroGestion.instanceArbitroGestion;
        }
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('arbitro');
        ArbitroGestion.instanceArbitroGestion = this;
    }

    destructor() {
        ArbitroGestion.instanceArbitroGestion = undefined;
        super.destructor();
    }

    /**
     * Registra un nuevo árbitro en la base de datos.
     *
     * @param {Object} datos - Los datos del árbitro a registrar.
     * @param {string} datos._id - El identificador único para el árbitro. Si no se proporciona, se generará un nuevo ObjectId.
     * @param {string} datos.id - El identificador único para el árbitro.
     * @param {string} datos.nombre - El nombre del árbitro.
     * @param {number} datos.edad - La edad del árbitro.
     * @param {string} datos.nacionalidad - La nacionalidad del árbitro.
     * @param {number} datos.experiencia - Los años de experiencia del árbitro.
     * @param {string} datos.especialidad - La especialidad del árbitro.
     *
     * @returns {Object} - Un objeto que contiene el resultado de la operación.
     * @returns {string} resultado.mensaje - Un mensaje que indica el éxito o fracaso de la operación.
     * @returns {Object} resultado.datos - Los datos del árbitro si la operación fue exitosa.
     * @returns {Object} resultado.error - Un objeto de error si la operación falló.
     * @returns {string} resultado.error.error - El tipo de error.
     * @returns {string} resultado.error.mensaje - El mensaje de error.
     * @returns {Object} resultado.error.detalles - Detalles adicionales del error.
     */
    async registerReferee({ _id, id, nombre, edad, nacionalidad, experiencia, especialidad }) {
        try {
            const refereeExist = await this.collection.findOne({ id: new ObjectId(id) });
            if (refereeExist) {
                return {
                    error: "No válido",
                    mensaje: "El árbitro ya existe"
                };
            }

            const res = await this.collection.insertOne({
                _id: _id ? new ObjectId(_id) : new ObjectId(),
                id: new ObjectId(id),
                nombre,
                edad,
                nacionalidad,
                experiencia,
                especialidad
            });
            return {
                mensaje: "Árbitro registrado correctamente",
                datos: res.ops
            };
        } catch (error) {
            return { error: "Error", mensaje: error.message, detalles: error.errInfo };
        }
    }

    /**
     * Actualiza los datos de un árbitro en la base de datos.
     *
     * @param {string} id - El identificador único del árbitro a actualizar.
     * @param {Object} data - Los nuevos datos del árbitro.
     * @param {string} [data.id] - El nuevo identificador único para el árbitro.
     * @param {string} [data.nombre] - El nuevo nombre del árbitro.
     * @param {number} [data.edad] - La nueva edad del árbitro.
     * @param {string} [data.nacionalidad] - La nueva nacionalidad del árbitro.
     * @param {number} [data.experiencia] - Los nuevos años de experiencia del árbitro.
     * @param {string} [data.especialidad] - La nueva especialidad del árbitro.
     *
     * @returns {Promise} - Una promesa que resuelve con un objeto que contiene el resultado de la operación.
     * @returns {string} result.message - Un mensaje que indica el éxito o fracaso de la operación.
     * @returns {Object} result.data - Los detalles de la operación de actualización.
     * @returns {Object} result.error - Un objeto de error si la operación falló.
     * @returns {string} result.error.error - El tipo de error.
     * @returns {string} result.error.message - El mensaje de error.
     * @returns {Object} result.error.details - Detalles adicionales del error.
     */
    async updateReferee(id, data) {
        try {
            const updateData = { ...data };
            if (data.id) {
                updateData.id = new ObjectId(data.id);
            }
            const res = await this.collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });
            return {
                message: "Árbitro actualizado correctamente",
                data: res
            };
        } catch (error) {
            return { error: "Error", message: error.message, details: error.errInfo };
        }
    }

    /**
     * Elimina un árbitro de la base de datos por su identificador único.
     *
     * @param {string} id - El identificador único del árbitro a eliminar.
     *
     * @returns {Promise} - Una promesa que resuelve con un objeto que contiene el resultado de la operación.
     * @returns {string} result.message - Un mensaje que indica el éxito o fracaso de la operación.
     * @returns {Object} result.data - Los detalles de la operación de eliminación.
     * @returns {Object} result.error - Un objeto de error si la operación falló.
     * @returns {string} result.error.error - El tipo de error.
     * @returns {string} result.error.message - El mensaje de error.
     * @returns {Object} result.error.details - Detalles adicionales del error.
     */
    async deleteReferee(id) {
        try {
            const res = await this.collection.deleteOne({ _id: new ObjectId(id) });
            return {
                message: "Árbitro eliminado correctamente",
                data: res
            };
        } catch (error) {
            return { error: "Error", message: error.message, details: error.errInfo };
        }
    }
}
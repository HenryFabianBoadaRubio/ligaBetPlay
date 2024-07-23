import { connect } from "../../helpers/db/connect.js";
import { ObjectId } from "mongodb";

// 9. Gestion de estadios

export class EstadioGestion extends connect {
    static instanceEstadioGestion;
    db;
    collection;

    constructor() {
        super();
        if (EstadioGestion.instanceEstadioGestion) {
            return EstadioGestion.instanceEstadioGestion;
        }
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('estadio');
        EstadioGestion.instanceEstadioGestion = this;
    }

    destructor() {
        EstadioGestion.instanceEstadioGestion = undefined;
        super.destructor();
    }

    /**
     * Registra un nuevo estadio en la base de datos.
     *
     * @param {Object} datos - Los datos del estadio a registrar.
     * @param {string} datos._id - El identificador único para el estadio. Si no se proporciona, se generará un nuevo ObjectId.
     * @param {string} datos.nombre - El nombre del estadio.
     * @param {string} datos.ciudad - La ciudad donde se encuentra el estadio.
     * @param {number} datos.capacidad - La capacidad del estadio.
     *
     * @returns {Object} - Un objeto que contiene el resultado de la operación.
     * @returns {string} resultado.mensaje - Un mensaje que indica el éxito o fracaso de la operación.
     * @returns {Object} resultado.datos - Los datos del estadio si la operación fue exitosa.
     * @returns {Object} resultado.error - Un objeto de error si la operación falló.
     * @returns {string} resultado.error.error - El tipo de error.
     * @returns {string} resultado.error.mensaje - El mensaje de error.
     * @returns {Object} resultado.error.detalles - Detalles adicionales del error.
     */
    async registerStadium({ _id, nombre, ubicacion, capacidad }) {
        try {
            const stadiumExist = await this.collection.findOne({ nombre: {$regex: new RegExp(`^${nombre}$`, 'i')} });
            if (stadiumExist) {
                return {
                    error: "No válido",
                    mensaje: "El estadio ya existe"
                };
            }

            const res = await this.collection.insertOne({
                _id: _id ? new ObjectId(_id) : new ObjectId(),
                nombre,
                ubicacion,
                capacidad
            });
            return {
                mensaje: "Estadio registrado correctamente",
                datos: res.ops
            };
        } catch (error) {
            return { error: "Error", mensaje: error.message, detalles: error.errInfo };
        }
    }

    /**
     * Actualiza los datos de un estadio en la base de datos.
     *
     * @param {string} id - El identificador único del estadio a actualizar.
     * @param {Object} data - Los nuevos datos del estadio.
     * @param {string} [data.nombre] - El nuevo nombre del estadio.
     * @param {string} [data.ciudad] - La nueva ciudad donde se encuentra el estadio.
     * @param {number} [data.capacidad] - La nueva capacidad del estadio.
     *
     * @returns {Promise} - Una promesa que resuelve con un objeto que contiene el resultado de la operación.
     * @returns {string} result.message - Un mensaje que indica el éxito o fracaso de la operación.
     * @returns {Object} result.data - Los detalles de la operación de actualización.
     * @returns {Object} result.error - Un objeto de error si la operación falló.
     * @returns {string} result.error.error - El tipo de error.
     * @returns {string} result.error.message - El mensaje de error.
     * @returns {Object} result.error.details - Detalles adicionales del error.
     */
    async updateStadium(id, data) {
        try {
            const res = await this.collection.updateOne({ _id: new ObjectId(id) }, { $set: data });
            return {
                message: "Estadio actualizado correctamente",
                data: res
            };
        } catch (error) {
            return { error: "Error", message: error.message, details: error.errInfo };
        }
    }

    /**
     * Elimina un estadio de la base de datos por su identificador único.
     *
     * @param {string} id - El identificador único del estadio a eliminar.
     *
     * @returns {Promise} - Una promesa que resuelve con un objeto que contiene el resultado de la operación.
     * @returns {string} result.message - Un mensaje que indica el éxito o fracaso de la operación.
     * @returns {Object} result.data - Los detalles de la operación de eliminación.
     * @returns {Object} result.error - Un objeto de error si la operación falló.
     * @returns {string} result.error.error - El tipo de error.
     * @returns {string} result.error.message - El mensaje de error.
     * @returns {Object} result.error.details - Detalles adicionales del error.
     */
    async deleteStadium(id) {
        try {
            const res = await this.collection.deleteOne({ _id: new ObjectId(id) });
            return {
                message: "Estadio eliminado correctamente",
                data: res
            };
        } catch (error) {
            return { error: "Error", message: error.message, details: error.errInfo };
        }
    }
}
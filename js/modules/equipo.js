import { ObjectId } from 'mongodb';
import { connect } from '../../helpers/db/connect.js';


// 1. Gestion de equipos

export class equipo extends connect {
    static instanceEquipo;
    db;
    collection;
    constructor() {
        if (equipo.instanceEquipo) {
            return equipo.instanceEquipo;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('equipo');
        equipo.instanceEquipo = this;
    }
    destructor(){
        equipo.instanceEquipo = undefined;
        connect.instanceConnect = undefined;
    }

    /**
 * Registers a new team in the database.
 *
 * @param {Object} data - The team data to be registered.
 * @param {string} data._id - The unique identifier of the team. If not provided, a new ObjectId will be generated.
 * @param {string} data.nombre - The name of the team.
 * @param {string} data.ciudad - The city where the team is based.
 * @param {string} data.id_estadio - The unique identifier of the team's stadium.
 * @param {string} data.id_entrenador - The unique identifier of the team's coach.
 * @param {Array<string>} data.id_jugadores - The unique identifiers of the team's players.
 * @param {Array<string>} data.id_partido - The unique identifiers of the team's matches.
 *
 * @returns {Object} - An object containing the result of the operation.
 * @returns {string} result.message - A message indicating the success or failure of the operation.
 * @returns {Object} result.data - The data of the registered team (if successful).
 * @returns {Object} result.error - An error object (if an error occurred).
 * @returns {string} result.error.message - The error message.
 * @returns {Object} result.error.details - Additional error details.
 */
    async registerTeam({ _id, nombre, ciudad, id_estadio, id_entrenador, id_jugadores, id_partido }) {
        let res;
        try {
            // Verificar que el equipo no exista
            const teamExist = await this.collection.findOne({ nombre: {$regex: new RegExp(`^${nombre}$`, 'i')} });
            if (teamExist) {
                return {
                    error: "Not valid",
                    message: "El equipo ya existe"
                };
            }

            // Inserción del equipo
            res = await this.collection.insertOne({
                _id: _id ? new ObjectId(_id) : new ObjectId(),
                nombre,
                ciudad,
                id_estadio: new ObjectId(id_estadio),
                id_entrenador: new ObjectId(id_entrenador),
                id_jugadores: id_jugadores.map(jugador => new ObjectId(jugador)),
                id_partido: id_partido.map(partido => new ObjectId(partido))
            });
            return {
                message: "Equipo registrado correctamente",
                data: res.ops
            };
        } catch (error) {
            return { error: "Error", message: error.message, details: error.errInfo };
        }
    }

    /**
 * Updates an existing team in the database.
 *
 * @param {string} id - The unique identifier of the team to be updated.
 * @param {Object} data - The updated team data.
 * @param {string} [data.nombre] - The new name of the team.
 * @param {string} [data.ciudad] - The new city where the team is based.
 * @param {string} [data.id_estadio] - The new unique identifier of the team's stadium.
 * @param {string} [data.id_entrenador] - The new unique identifier of the team's coach.
 * @param {Array<string>} [data.id_jugadores] - The new unique identifiers of the team's players.
 * @param {Array<string>} [data.id_partido] - The new unique identifiers of the team's matches.
 *
 * @returns {Object} - An object containing the result of the operation.
 * @returns {string} result.message - A message indicating the success or failure of the operation.
 * @returns {Object} result.data - The result of the MongoDB update operation.
 * @returns {Object} result.error - An error object (if an error occurred).
 * @returns {string} result.error.message - The error message.
 * @returns {Object} result.error.details - Additional error details.
 */
    async updateTeam(id, data){
        let res;
        try {
            const updateData = { ...data };
            if (data.id_estadio) {
                updateData.id_estadio = new ObjectId(data.id_estadio);
            }
            if (data.id_entrenador) {
                updateData.id_entrenador = new ObjectId(data.id_entrenador);
            }
            if (data.id_jugadores) {
                updateData.id_jugadores = data.id_jugadores.map(jugador => new ObjectId(jugador));
            }
            if (data.id_partido) {
                updateData.id_partido = data.id_partido.map(partido => new ObjectId(partido));
            }

            res = await this.collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });
            return {
                message: "Equipo actualizado correctamente",
                data: res
            };
        } catch (error) {
            return { error: "Error", message: error.message, details: error.errInfo };
        }
    }
    /**
 * Deletes an existing team from the database.
 *
 * @param {string} id - The unique identifier of the team to be deleted.
 *
 * @returns {Object} - An object containing the result of the operation.
 * @returns {string} result.message - A message indicating the success or failure of the operation.
 * @returns {Object} result.data - The result of the MongoDB delete operation.
 * @returns {Object} result.error - An error object (if an error occurred).
 * @returns {string} result.error.message - The error message.
 * @returns {Object} result.error.details - Additional error details.
 */
    async deleteTeam(id){
        let res;
        try {
            res = await this.collection.deleteOne({ _id: new ObjectId(id) });
            return {
                message: "Equipo eliminado correctamente",
                data: res
            };
        } catch (error) {
            return { error: "Error", message: error.message, details: error.errInfo };
        }
    }
}
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
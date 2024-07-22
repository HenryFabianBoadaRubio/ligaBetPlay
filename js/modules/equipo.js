import { ObjectId } from 'mongodb';
import { connect } from '../../helpers/db/connect.js';


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

    async registerTeam({ nombre, ciudad, id_estadio, id_entrenador, id_jugadores, id_partido }) {
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
}
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

    destructor() {
        equipo.instanceEquipo = undefined;
        connect.instanceConnect = undefined;
    }

    async validarEquipo(nombre) {
        await this.conexion.connect();
        const equipoExistente = await this.collection.findOne({ nombre: nombre });
        await this.conexion.close();
        return equipoExistente;
    }

}


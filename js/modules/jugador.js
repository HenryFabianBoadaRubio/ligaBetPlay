import { ObjectId } from 'mongodb';
import { connect } from '../../helpers/db/connect.js';

export class jugador extends connect {
    static instanceJugador;
    db;
    collection;

    constructor() {
        if (jugador.instanceJugador) {
            return jugador.instanceJugador;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('jugador');
        jugador.instanceJugador = this;
    }

    destructor() {
        jugador.instanceJugador = undefined;
        connect.instanceConnect = undefined;
    }

    async registrarJugador(jugadorData) {
        await this.conexion.connect();
        const jugadorExistente = await this.collection.findOne({ nombre: {$regex: new RegExp(`^${jugadorData.nombre}$`, i)}});
        if (jugadorExistente) {
            await this.conexion.close();
            throw new Error("El jugador ya existe");
        }

        const nuevoJugador = {
            _id: new ObjectId(jugadorData._id),
            nombre: jugadorData.nombre,
            edad: jugadorData.edad,
            posicion: jugadorData.posicion,
            nacionalidad: jugadorData.nacionalidad,
            numeroCamiseta: jugadorData.numeroCamiseta,
            id_equipo: new ObjectId(jugadorData.id_equipo),
            id_lesion: jugadorData.id_lesion.map(id => new ObjectId(id)),
            id_rendimiento: jugadorData.id_rendimiento.map(id => new ObjectId(id)),
        };

        const resultado = await this.collection.insertOne(nuevoJugador);
        await this.conexion.close();
        return resultado.insertedId;
    }

    async editarJugador(id, jugadorData) {
        await this.conexion.connect();
        const resultado = await this.collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: {
                nombre: jugadorData.nombre,
                edad: jugadorData.edad,
                posicion: jugadorData.posicion,
                nacionalidad: jugadorData.nacionalidad,
                numeroCamiseta: jugadorData.numeroCamiseta,
                id_equipo: new ObjectId(jugadorData.id_equipo),
                id_lesion: jugadorData.id_lesion.map(id => new ObjectId(id)),
                id_rendimiento: jugadorData.id_rendimiento.map(id => new ObjectId(id))
            } }
        );
        await this.conexion.close();
        return resultado.modifiedCount;
    }

    async eliminarJugador(id) {
        await this.conexion.connect();
        const resultado = await this.collection.deleteOne({ _id: new ObjectId(id) });
        await this.conexion.close();
        return resultado.deletedCount;
    }
}
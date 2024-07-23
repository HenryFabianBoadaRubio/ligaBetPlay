import { ObjectId } from 'mongodb';
import { connect } from '../../helpers/db/connect.js';

// 2. Gestion de jugadores

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

    /**
     * Registra un nuevo jugador en la base de datos.
     *
     * @param {Object} jugadorData - Los datos del jugador a registrar.
     * @param {string} jugadorData._id - El identificador único para el jugador.
     * @param {string} jugadorData.nombre - El nombre del jugador.
     * @param {number} jugadorData.edad - La edad del jugador.
     * @param {string} jugadorData.posicion - La posición del jugador.
     * @param {string} jugadorData.nacionalidad - La nacionalidad del jugador.
     * @param {number} jugadorData.numeroCamiseta - El número de camiseta del jugador.
     * @param {string} jugadorData.id_equipo - El identificador único para el equipo del jugador.
     * @param {Array<string>} jugadorData.id_lesion - Los identificadores únicos para las lesiones del jugador.
     * @param {Array<string>} jugadorData.id_rendimiento - Los identificadores únicos para los registros de rendimiento del jugador.
     *
     * @returns {Promise<ObjectId>} - El identificador único del jugador recién registrado.
     *
     * @throws {Error} - Si el jugador ya existe en la base de datos.
     */
    async registrarJugador(jugadorData) {
        await this.conexion.connect();
        const jugadorExistente = await this.collection.findOne({ nombre: {$regex: new RegExp(`^${jugadorData.nombre}$`, 'i')}});
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

    /**
     * Actualiza un jugador existente en la base de datos.
     *
     * @param {string} id - El identificador único del jugador a actualizar.
     * @param {Object} jugadorData - Los datos actualizados del jugador.
     * @param {string} jugadorData.nombre - El nombre actualizado del jugador.
     * @param {number} jugadorData.edad - La edad actualizada del jugador.
     * @param {string} jugadorData.posicion - La posición actualizada del jugador.
     * @param {string} jugadorData.nacionalidad - La nacionalidad actualizada del jugador.
     * @param {number} jugadorData.numeroCamiseta - El número de camiseta actualizado del jugador.
     * @param {string} jugadorData.id_equipo - El identificador único actualizado para el equipo del jugador.
     * @param {Array<string>} jugadorData.id_lesion - Los identificadores únicos actualizados para las lesiones del jugador.
     * @param {Array<string>} jugadorData.id_rendimiento - Los identificadores únicos actualizados para los registros de rendimiento del jugador.
     *
     * @returns {Promise<number>} - El número de documentos modificados.
     *
     * @throws {Error} - Si la conexión a la base de datos falla.
     */
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

    /**
     * Elimina un jugador de la base de datos.
     *
     * @param {string} id - El identificador único del jugador a eliminar.
     *
     * @returns {Promise<number>} - El número de documentos eliminados.
     *
     * @throws {Error} - Si la conexión a la base de datos falla.
     */
    async eliminarJugador(id) {
        await this.conexion.connect();
        const resultado = await this.collection.deleteOne({ _id: new ObjectId(id) });
        await this.conexion.close();
        return resultado.deletedCount;
    }
}
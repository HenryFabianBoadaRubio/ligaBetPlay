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

    async getAllTest() {
        return await this.collection.find({}).toArray();
    }

    async registerReferee({ _id, id, nombre, edad, nacionalidad, experiencia, especialidad }) {
        try {
            const refereeExist = await this.collection.findOne({ id: new ObjectId(id) });
            if (refereeExist) {
                return {
                    error: "Not valid",
                    message: "El árbitro ya existe"
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
                message: "Árbitro registrado correctamente",
                data: res.ops
            };
        } catch (error) {
            return { error: "Error", message: error.message, details: error.errInfo };
        }
    }

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
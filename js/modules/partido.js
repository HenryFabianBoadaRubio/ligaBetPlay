import { connect } from "../../helpers/db/connect.js";
import { ObjectId } from "mongodb";

export class partido extends connect {
    static instancePartido;
    db;
    collection;
    constructor() {
        if (partido.instancePartido) {
            return partido.instancePartido;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('partido');
        partido.instancePartido = this;
    }
    destructor(){
        partido.instancePartido = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }

    /**
     * Registra un nuevo partido en la base de datos.
     *
     * @param {Object} params - Los parámetros para registrar un nuevo partido.
     * @param {string} params.equipolocal - El id del equipo local.
     * @param {string} params.equipoVisitante - El id del equipo visitante.
     * @param {string} params.fecha_y_hora - La fecha y hora del partido.
     * @param {string} params.id_estadio - El id del estadio donde se jugará el partido.
     * @param {string} params.tipo - El tipo de partido (amistoso, competitivo, etc.).
     *
     * @returns {Object} - Objeto con el resultado del registro del partido.
     * @returns {Object.error} - Si hay un error durante el registro, este campo contendrá el tipo de error.
     * @returns {Object.message} - Mensaje descriptivo del resultado del registro.
     * @returns {Object.data} - Datos del partido registrado (solo si el registro es exitoso).
     */

    async registerGame({equipolocal,equipoVisitante,fecha_y_hora,id_estadio,tipo }){
        let res;
        try {
            //verificar la existencia del equipolocal en la base de datos
            const equipolocalExist=await this.db.collection('equipo').findOne({_id:new ObjectId(equipolocal)})
            if(!equipolocalExist){
                return{
                    error: "Not found",
                    message: "El equipo local no existe"
                }
            }

            //verificar la existencia del equipoVisitante en la base de datos
            let equipoVisitanteExist=await this.db.collection('equipo').findOne({_id: new ObjectId(equipoVisitante)})
            if(!equipoVisitanteExist){
                return{
                    error: "Not found",
                    message: "El equipo visitante no existe"
                }
            }

            //verificar si el estadio existe
            let estadioExist=await this.db.collection('estadio').findOne({_id: new ObjectId(id_estadio)})
            if(!estadioExist){
                return{
                    error: "Not found",
                    message: "El estadio no existe"
                }
            }

            //verificar que el equipo local y el equipo visitante no sean el mismoç
            //se cambia a string las id para generar una comparacion de manera opropiada.
            if(equipolocalExist._id.toString()===equipoVisitanteExist._id.toString()){
                return{
                    error: "Not valid",
                    message: "Los equipos no pueden ser el mismo"
                }
            }

            //insercion del nuevo partido.
                let nuevoGame= {
                    equipolocal:new ObjectId(equipolocal),
                    equipoVisitante: new ObjectId(equipoVisitante),
                    fecha_y_hora:new Date(fecha_y_hora),
                    id_estadio: new ObjectId(id_estadio),
                    tipo: tipo
                }
                res= await this.collection.insertOne(nuevoGame);
                return {
                    message: "Partido registrado correctamente",
                    data: res.ops
                };
    

        } catch (error) {
            return { error: "Error", message: error.message,details: error.errInfo};
            
        }
    }
        // realizar un metodo que se encargue de eliminar un partido ya existente
        /**
     *
     * @param {string} id - El id del partido a eliminar.
     *
     * @returns {Object} - Objeto con el resultado de la eliminación del partido.
     * @returns {Object.error} - Si hay un error durante la eliminación, este campo contendrá el tipo de error.
     * @returns {Object.message} - Mensaje descriptivo del resultado de la eliminación.
     * @returns {Object.data} - Datos de la eliminación (solo si la eliminación es exitosa).
     */
        async deleteGame(id){
            let res;
            try {
                res= await this.collection.deleteOne({_id: new ObjectId(id)});
                return {
                    message: "Partido eliminado correctamente",
                    data: res
                };
            } catch (error) {
                return { error: "Error", message: error.message,details: error.errInfo};
            }
        }


        // realizar un metodo que se encargue de actualizar un partido ya existente
        /**
     *
     * @param {string} id - El id del partido a actualizar.
     * @param {Object} data - Los nuevos datos para actualizar el partido.
     *
     * @returns {Object} - Objeto con el resultado de la actualización del partido.
     * @returns {Object.error} - Si hay un error durante la actualización, este campo contendrá el tipo de error.
     * @returns {Object.message} - Mensaje descriptivo del resultado de la actualización.
     * @returns {Object.data} - Datos de la actualización (solo si la actualización es exitosa).
     */
        async updateGame(id,data){
            let res;
            try {
                res= await this.collection.updateOne({_id: new ObjectId(id)},{$set:data});
                return {
                    message: "Partido actualizado correctamente",
                    data: res
                };
            } catch (error) {
                return { error: "Error", message: error.message,details: error.errInfo};
            }
        }
}

import { connect } from "../../helpers/db/connect.js";
import { ObjectId } from "mongodb";

export class comunicacion extends connect {
    static instanceComunicacion;
    db;
    collection;
    constructor() {
        if (comunicacion.instanceComunicacion) {
            return comunicacion.instanceComunicacion;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('comunicacion');
        comunicacion.instanceComunicacion = this;
    }
    destructor(){
        comunicacion.instanceComunicacion = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
        /**
     * Registra un nuevo elemento de noticias en la base de datos.
     *
     * @param {Object} params - Los parámetros para el elemento de noticias.
     * @param {string} params._id - El identificador único para el elemento de noticias.
     * @param {string} params.periodista - El autor del elemento de noticias.
     * @param {string} params.tipo - El tipo de noticia.
     * @param {string} params.titulo - El título de la noticia.
     * @param {string} params.contenido - El contenido de la noticia.
     * @param {string} params.fechaPublicacion - La fecha de publicación de la noticia.
     * @param {Array} params.destinatarios - Los destinatarios de la noticia.
     *
     * @returns {Object} - Un objeto con un mensaje de éxito o error, y los datos de la noticia registrada.
     * @returns {Object.error} - "Not valid" si la noticia ya existe.
     * @returns {Object.message} - Mensaje de éxito o error.
     * @returns {Object.data} - Los datos de la noticia registrada.
     * @returns {Object.error} - "Error" si se produce un error durante el registro.
     * @returns {Object.message} - Mensaje de error.
     * @returns {Object.details} - Detalles del error.
     */
    async registerNews({_id,periodista,tipo,titulo, contenido, fechaPublicacion, destinatarios}) {
        let res;
        try {
            //verificar que la noticia no exista 
            const newsExist = await this.collection.findOne({ titulo });
            if (newsExist) {
                return {
                    error: "Not valid",
                    message: "La noticia ya existe"
                };
            }

            //insercion de la noticia.
            res = await this.collection.insertOne({
                titulo:titulo,
                contenido:contenido,
                fechaPublicacion: new Date(fechaPublicacion),
                destinatarios:destinatarios,
                periodista:periodista,
                tipo:tipo
            });
            return {
                message: "Noticia registrada correctamente",
                data: res.ops
            };
        } catch (error) {
            return { error: "Error", message: error.message, details: error.errInfo };
        }
    }


        /**
     * Elimina una noticia existente de la base de datos.
     *
     * @param {string} id - El identificador único de la noticia a eliminar.
     *
     * @returns {Object} - Un objeto con un mensaje de éxito o error, y los detalles de la operación.
     * @returns {Object.error} - "Error" si se produce un error durante la eliminación.
     * @returns {Object.message} - Mensaje de éxito o error.
     * @returns {Object.data} - Los detalles de la operación de eliminación.
     * @returns {Object.details} - Detalles del error si se produce un error.
     */
    async deleteNews(id){
        let res;
        try {
            res= await this.collection.deleteOne({_id: new ObjectId(id)});
            return {
                message: "Noticia eliminada correctamente",
                data: res
            };
        } catch (error) {
            return { error: "Error", message: error.message, details: error.errInfo};
        }
    }

    
        /**
     * Actualiza una noticia existente en la base de datos.
     *
     * @param {string} id - El identificador único de la noticia a actualizar.
     * @param {Object} data - Los datos a actualizar para la noticia.
     *
     * @returns {Object} - Un objeto con un mensaje de éxito o error, y los detalles de la operación.
     * @returns {Object.error} - "Error" si se produce un error durante la actualización.
     * @returns {Object.message} - Mensaje de éxito o error.
     * @returns {Object.data} - Los detalles de la operación de actualización.
     * @returns {Object.details} - Detalles del error si se produce un error.
     */
    async updateNews(id,data){
        let res;
        try {
            res= await this.collection.updateOne({_id: new ObjectId(id)},{$set:data});
            return {
                message: "Noticia actualizada correctamente",
                data: res
            };
        } catch (error) {
            return { error: "Error", message: error.message, details: error.errInfo};
        }º
    }

}

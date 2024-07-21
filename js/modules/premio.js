import { connect } from "../../helpers/db/connect.js";
import { ObjectId } from "mongodb";

export class premio extends connect {
    static instancePremio;
    db;
    collection;
    constructor() {
        if (premio.instancePremio) {
            return premio.instancePremio;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('premio');
        premio.instancePremio = this;
    }
    destructor(){
        premio.instancePremio = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
            /**
     * Registra un nuevo premio en la base de datos.
     *
     * @param {Object} params - Los parámetros para registrar un premio.
     * @param {string} params.nombre - El nombre del premio.
     * @param {string} params.descripcion - La descripción del premio.
     * @param {string} params.fecha - La fecha del premio en formato 'AA-MM-DD'.
     * @param {string} params.id_jugador - El identificador del jugador al que se le otorga el premio.
     *
     * @returns {Promise} - Una promesa que resuelve con un objeto que contiene el mensaje y los datos del premio registrado.
     *                      Si hay un error, la promesa se resuelve con un objeto que contiene el error y el mensaje de error.
     */
    async registerPrize({nombre,descripcion,fecha,id_jugador}){
        let res;
        try {
            //verificar la existencia del jugador en la base de datos
            const jugadorExist=await this.db.collection('jugador').findOne({_id:new ObjectId(id_jugador)})
            if(!jugadorExist){
                return{
                    error: "Not found",
                    message: "El jugador no existe"
                }
            }

            //verificar el formato de la fecha
            const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
            if(!dateFormat.test(fecha)){
                return{
                    error: "Not valid",
                    message: "Formato de fecha incorrecto, debe ser AA-MM-DD"
                }
            }

            //verificar si el premio ya existe para el jugador
            const premioExist=await this.db.collection('premio').findOne({id_jugador:new ObjectId(id_jugador), nombre})
            if(premioExist){
                return{
                    error: "Not valid",
                    message: "El premio ya existe para el jugador"
                }
            }

            //registrar el premio.
            res= await this.collection.insertOne({
                nombre: nombre,
                descripcion: descripcion,
                fecha: new Date(fecha),
                id_jugador: new ObjectId(id_jugador)
            });
            return {
                message: "Premio registrado correctamente",
                data: res.insertedId
            };
            
            
        } catch (error) {
            return { error: "Error", message: error.message,details: error.errInfo};
        }
    }


    /**
     * Elimina un premio de la base de datos.
     *
     * @param {string} id - El identificador del premio que se quiere eliminar.
     *
     * @returns {Promise} - Una promesa que resuelve con un objeto que contiene el mensaje y los resultados de la operación.
     *                      Si hay un error, la promesa se resuelve con un objeto que contiene el error y el mensaje de error.
     *                      El objeto de resultados contiene un mensaje y los datos de la operación de eliminación.
     */
    async deletePrize(id){
        let res;
        try {
            //verificar si el premio que se quiere elimnar existe
            const premioExist=await this.db.collection('premio').findOne({_id: new ObjectId(id)})
            if(!premioExist){
                return{
                    error: "Not found",
                    message: "El premio no existe"
                }
            }
            res= await this.collection.deleteOne({_id: new ObjectId(id)});
            
            return {
                message: "Premio eliminado correctamente",
                data: res
            };
        } catch (error) {
            return { error: "Error", message: error.message, details: error.errInfo};
        }
    }
    /**
     * Actualiza un premio en la base de datos.
     *
     * @param {string} id - El identificador del premio que se quiere actualizar.
     * @param {Object} data - Los datos para actualizar el premio.
     * @param {string} [data.nombre] - El nuevo nombre del premio.
     * @param {string} [data.descripcion] - La nueva descripción del premio.
     * @param {string} [data.fecha] - La nueva fecha del premio en formato 'AA-MM-DD'.
     * @param {string} [data.id_jugador] - El nuevo identificador del jugador al que se le otorga el premio.
     *
     * @returns {Promise} - Una promesa que resuelve con un objeto que contiene el mensaje y los resultados de la operación.
     *                      Si hay un error, la promesa se resuelve con un objeto que contiene el error y el mensaje de error.
     *                      El objeto de resultados contiene un mensaje y los datos de la operación de actualización.
     */
    async updatePrize(id,data){
        let res;
        try {
            //verificar si el premio que se quiere actualizar existe
            const premioExist=await this.db.collection('premio').findOne({_id: new ObjectId(id)})
            if(!premioExist){
                return{
                    error: "Not found",
                    message: "El premio no existe"
                }
            }
            //verificar el formato de la fecha
            const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
            if(data.fecha &&!dateFormat.test(data.fecha)){
                return{
                    error: "Not valid",
                    message: "Formato de fecha incorrecto, debe ser AA-MM-DD"
                }
            }
            data.fecha = new Date(data.fecha);

            //verificar la existencia del jugador que se decea ingresar al premio.
            const jugadorExist=await this.db.collection('jugador').findOne({_id:new ObjectId(data.id_jugador)})
            if(data.id_jugador &&!jugadorExist){
                return{
                    error: "Not found",
                    message: "El jugador no existe"
                }
            }

            res= await this.collection.updateOne({_id: new ObjectId(id)},{$set:data});
            return {
                message: "Premio actualizado correctamente",
                data: res
            };
        } catch (error) {
            return { error: "Error", message: error.message, details: error.errInfo};
        }
    }
}

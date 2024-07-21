import { connect } from "../../helpers/db/connect.js";
import { ObjectId } from "mongodb";


export class entrenador extends connect {
    static instanceEntrenador;
    db;
    collection;
    constructor() {
        if (entrenador.instanceEntrenador) {
            return entrenador.instanceEntrenador;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('entrenador');
        entrenador.instanceEntrenador = this;
    }
    destructor(){
        entrenador.instanceEntrenador = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }
        /**
     * Registra un nuevo entrenador en la base de datos.
     *
     * @param {Object} params - Los parámetros para registrar un entrenador.
     * @param {string} params.nombre - El nombre del entrenador.
     * @param {number} params.edad - La edad del entrenador.
     * @param {string} params.nacionalidad - La nacionalidad del entrenador.
     * @param {string} params.id_equipo - El identificador del equipo al que pertenece el entrenador.
     * @param {number} params.experiencia - La experiencia del entrenador en años.
     *
     * @returns {Promise} - Una promesa que resuelve con un objeto que contiene un mensaje y, en caso de éxito, el identificador del entrenador registrado.
     *                      En caso de error, la promesa resuelve con un objeto que contiene un mensaje de error y, opcionalmente, detalles del error.
     */
    async registerCoach({nombre, edad, nacionalidad, id_equipo, experiencia}){
        let res;
        try {
            
            //verificar si el entrenador no existe ya teniendo en cuenta nombre y edad.
            const coachExist = await this.collection.findOne({nombre,edad,experiencia});
            console.log(coachExist)
            if (coachExist) {
                return {
                    error: "Not valid",
                    message: "El entrenador ya existe"
                };
            }
            

            //verificar si el equipo existe
            let equipoExist=await this.db.collection('equipo').findOne({_id: new ObjectId(id_equipo)})
            if(!equipoExist){
                return{
                    error: "Not found",
                    message: "El equipo no existe"
                }
            
            }
                
            //insercion del nuevo entrenador.
            let nuevoCoach= {
                nombre:nombre,
                edad:edad,
                nacionalidad:nacionalidad,
                id_equipo:new ObjectId(id_equipo),
                experiencia:experiencia
            }
            res= await this.collection.insertOne(nuevoCoach);

            //actualizar el id_entrenador en el equipo
            await this.db.collection('equipo').updateOne({_id: equipoExist._id},{$set:{id_entrenador:res.insertedId}})
            return {
                message: "Entrenador registrado correctamente",
                data: res.insertedId
            };

        } catch (error) {
            console.log(error);
            return { error: "Error", message: error.message,details: error.errInfo};
            
        }
    }

            /**
     * Elimina un entrenador de la base de datos.
     *
     * @param {string} id - El identificador del entrenador a eliminar.
     *
     * @returns {Promise} - Una promesa que resuelve con un objeto que contiene un mensaje y, en caso de éxito, los detalles de la operación de eliminación.
     *                      En caso de error, la promesa resuelve con un objeto que contiene un mensaje de error y, opcionalmente, detalles del error.
     */
    async deleteCoach(id){
        let res;
        try {
            res= await this.collection.deleteOne({_id: new ObjectId(id)});
            if (res.deletedCount === 0) {
                return {
                    error: "Not found",
                    message: "El entrenador no existe"
                };
            }
            return {
                message: "Entrenador eliminado correctamente",
                data: res
            };
            // si el parametro ingresado no existe arroja un mensaje mencionandolo
            
           

        } catch (error) {
            return { error: "Error", message: error.message, details: error.errInfo};
        }
    }


            /**
     * Actualiza un entrenador en la base de datos.
     *
     * @param {string} id - El identificador del entrenador a actualizar.
     * @param {Object} data - Los datos para actualizar al entrenador.
     * @param {string} data.nombre - El nuevo nombre del entrenador.
     * @param {number} data.edad - La nueva edad del entrenador.
     * @param {string} data.nacionalidad - La nueva nacionalidad del entrenador.
     * @param {string} data.id_equipo - El nuevo identificador del equipo al que pertenece el entrenador.
     * @param {number} data.experiencia - La nueva experiencia del entrenador en años.
     *
     * @returns {Promise} - Una promesa que resuelve con un objeto que contiene un mensaje y, en caso de éxito, los detalles de la operación de actualización.
     *                      En caso de error, la promesa resuelve con un objeto que contiene un mensaje de error y, opcionalmente, detalles del error.
     */
    async updateCoach(id,data){
        let res;
        try {

            //verificar si el entrenador existe
            const coachExist = await this.collection.findOne({_id: new ObjectId(id)});
            if (!coachExist) {
                return {
                    error: "Not found",
                    message: "El entrenador no existe"
                };
            }
            
            //verificar que la experiencia ingresada no sea mayor que la edad , 
            // ademas de que la experiencia debe ser al menos 15 años menor que la dad ya que se asume que la persona nacio y crecio 10 años antes de posiblemente aprender algo.
            if(data.experiencia > data.edad || (data.edad -data.experiencia)< 15){
                return {
                    error: "Not valid",
                    message: "La experiencia ingresada no es valida, debe ser al menos 15 años menor que la edad"
                };
            }

            
            

            //verificar si el equipo existe
            let equipoExist=await this.db.collection('equipo').findOne({_id: new ObjectId(data.id_equipo)})
            if(!equipoExist){
                return{
                    error: "Not found",
                    message: "El equipo no existe"
                }
            }
            

            res= await this.collection.updateOne({_id: new ObjectId(id)},{$set:data});
            if (res.matchedCount === 0) {
                return {
                    error: "Not found",
                    message: "El entrenador no existe"
                };
            }
            return {
                message: "Entrenador actualizado correctamente",
                data: res
            };
            // si el parametro ingresado no existe arroja un mensaje mencionandolo
            
        } catch (error) {
            return { error: "Error", message: error.message, details: error.errInfo};
        }
    }
}

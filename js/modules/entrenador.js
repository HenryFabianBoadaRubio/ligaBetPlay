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
}

import { connect } from "../../helpers/db/connect.js";

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
            
            //verificar si el entrenador no existe ya.
            const coachExist = await this.collection.findOne({ nombre });
            if (coachExist) {
                return {
                    error: "Not valid",
                    message: "El entrenador ya existe"
                };
            }

            //insercion del nuevo entrenador.
            let nuevoCoach= {
                nombre,
                edad,
                nacionalidad,
                id_equipo: new ObjectId(id_equipo),
                experiencia
            }
            res= await this.collection.insertOne(nuevoCoach);
            return {
                message: "Entrenador registrado correctamente",
                data: res.ops
            };

        } catch (error) {
            return { error: "Error", message: error.message,details: error.errInfo};
            
        }
    }
}

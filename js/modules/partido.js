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

            //verificar que el equipo local y el equipo visitante no sean el mismo
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


}

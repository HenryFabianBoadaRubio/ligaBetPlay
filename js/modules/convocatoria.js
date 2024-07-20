import { ObjectId } from "mongodb";
import { connect } from "../../helpers/db/connect.js";

export class convocatoria extends connect {
    static instanceConvocatoria;
    db;
    collection;
    constructor() {
        if (convocatoria.instanceConvocatoria) {
            return convocatoria.instanceConvocatoria;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('convocatoria');
        convocatoria.instanceConvocatoria = this;
    }
    destructor(){
        convocatoria.instanceConvocatoria = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }


    async registerGame({equipos,id_partido,id_estadio }){
        let res;
        try {
            //verificar la existencia del partido en la base de datos
            const partidoExist=await this.db.collection('partido').findOne({_id:new ObjectId(id_partido)})
            if(!partidoExist){
                return{
                    error: "Not found",
                    message: "El partido no existe"
                }
            }

            //verificar la existencia del estadio en la base de datos
            let estadioExist=await this.db.collection('estadio').findOne({_id: new ObjectId(id_estadio)})
            if(!estadioExist){
                return{
                    error: "Not found",
                    message: "El estadio no existe"
                }
            }


            //verificar la existencia de equipo en la base de datos
            let equipoExist= await Promise.all(equipos.map(async id=> {
                let equipoExist= await this.db.collection('equipo').findOne({_id: new ObjectId(id)})
                return equipoExist

            }))
            if(!equipoExist.every(equipo=> equipo)){
                return{
                    error:"Not found",
                    message: "Uno o los dos equipos no existe"
                };
            }



            




        } catch (error) {
            return { error: "Error", message: error.message,details: error.errInfo};
        }
    }
}

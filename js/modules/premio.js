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

            
            
        } catch (error) {
            return { error: "Error", message: error.message,details: error.errInfo};
        }
    }
}

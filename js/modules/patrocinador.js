import { connect } from "../../helpers/db/connect.js";
import { ObjectId } from "mongodb";

export class patrocinador extends connect {
    static instancePatrocinador;
    db;
    collection;
    constructor() {
        if (patrocinador.instancePatrocinador) {
            return patrocinador.instancePatrocinador;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('patrocinador');
        patrocinador.instancePatrocinador = this;
    }
    destructor(){
        patrocinador.instancePatrocinador = undefined;
        connect.instanceConnect = undefined;
    }
    async getAllTest() {
        await this.conexion.connect();
        const res = await this.collection.find({}).toArray(); 
        await this.conexion.close();
        return res;
    }

    async registerSponsor({nombre,tipo,monto,fechaInicio,fechaFin}){
        let res;
        try {
            //Verificar el formato de fechas que sea AA-MM-DD
            const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
            if (!dateRegex.test(fechaInicio) ||!dateRegex.test(fechaFin)) {
                return{
                    error: "Error",
                    message: "Formato de fecha incorrecto. Debe ser AA-MM-DD",
                    data: {
                        ejemploFormatoCorrecto: "2024-07-21"
                    }
                }
            }

             //Validar que la fecha de fin sea posterior a la fecha de inicio
             const start = new Date(fechaInicio);
             const end = new Date(fechaFin);
 
             if (end <= start) {
                 return{
                     error: "Error",
                     message: "La fecha de fin debe ser posterior a la fecha de inicio",
                 }
             }

            //Validar que el monto sea un número mayor a cero
            if (typeof monto!== 'number' || monto <= 0) {
                return{
                    error: "Error",
                    message: "El monto debe ser un número mayor a cero",
                }
            }

           //registrar nuevo patrocinador
            res = await this.collection.insertOne({
                nombre:nombre,
                tipo:tipo,
                monto:monto,
                fechaInicio:new Date(fechaInicio),
                fechaFin:new Date(fechaFin)
                });
            return {
                message: "Patrocinador registrado correctamente",
                data: res.insertedId
            }


        } catch (error) {
            return { error: "Error", message: error.message,details: error.errInfo};
            
        }
    }

    async deleteSponsor(id){
        let res;
        try {
            //Verificar que el patrocinador que se quiere eliminar exista.
            const patrocinador = await this.collection.findOne({_id: new ObjectId(id)});
            if (!patrocinador) {
                return{
                    error: "Error",
                    message: "No se encontró el patrocinador con el id: " + id
                }
            }
            
            //eliminar patrocinador
            res = await this.collection.deleteOne({_id: new ObjectId(id)});
            return {
                message: "Patrocinador eliminado correctamente",
                data: res.deletedCount
            }
        } catch (error) {
            return { error: "Error", message: error.message, details: error.errInfo};
            
        }
    }

}

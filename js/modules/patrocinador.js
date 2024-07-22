import { connect } from "../../helpers/db/connect.js";

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
                throw new Error("Formato de fecha inválido. Debe ser AA-MM-DD");
            }

            //Validar que el monto sea un número mayor a cero
            if (typeof monto!== 'number' || monto <= 0) {
                throw new Error("El monto debe ser un número mayor a cero");
            }
            
        } catch (error) {
            return { error: "Error", message: error.message,details: error.errInfo};
            
        }
    }

}

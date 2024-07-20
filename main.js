import { connect } from "../ligaBetPlay/helpers/db/connect.js";

import { transferencia } from './js/modules/transferencia.js';
import { sancion } from './js/modules/sancion.js';
import { estadistica_partido } from './js/modules/estadistica_partido.js';
import { entrada } from './js/modules/entrada.js';
import { informe } from './js/modules/informe.js';
import { estadio } from './js/modules/estadio.js';
// import { permiso } from './js/modules/permiso.js';
import { entrenamiento } from './js/modules/entrenamiento.js';
// import { rol } from './js/modules/rol.js';
import { equipamiento } from './js/modules/equipamiento.js';
import { premio } from './js/modules/premio.js';
import { estadistica_jugador } from './js/modules/estadistica_jugador.js';
import { patrocinador } from './js/modules/patrocinador.js';
import { estadistica_temporada } from './js/modules/estadistica_temporada.js';
import { gol } from './js/modules/gol.js';
import { jugador } from './js/modules/jugador.js';
// import { usuario } from './js/modules/usuario.js';
import { calendario } from './js/modules/calendario.js';
import { arbitro } from './js/modules/arbitro.js';
import { comunicacion } from './js/modules/comunicacion.js';
import { equipo } from './js/modules/equipo.js';
import { estadistica_equipo } from './js/modules/estadistica_equipo.js';
import { temporada } from './js/modules/temporada.js';
import { entrenador } from './js/modules/entrenador.js';
import { tarjeta } from './js/modules/tarjeta.js';
import { actividad } from './js/modules/actividad.js';
import { rendimiento } from './js/modules/rendimiento.js';
import { lesion } from './js/modules/lesion.js';
import { incidente } from './js/modules/incidente.js';
import { convocatoria } from './js/modules/convocatoria.js';
import { resultado } from './js/modules/resultado.js';
import { partido } from './js/modules/partido.js';
import { ObjectId } from "mongodb";

// let objTransferencia = new transferencia();
// console.log(await objTransferencia.getAllTest());
// objTransferencia.destructor();

// let objSancion = new sancion();
// console.log(await objSancion.getAllTest());
// objSancion.destructor();

// let objEstadisticaPartido = new estadistica_partido();
// console.log(await objEstadisticaPartido.getAllTest());
// objEstadisticaPartido.destructor();

// let objEntrada = new entrada();
// console.log(await objEntrada.getAllTest());
// objEntrada.destructor();

// let objInforme = new informe();
// console.log(await objInforme.getAllTest());
// objInforme.destructor();

// let objEstadio = new estadio();
// console.log(await objEstadio.getAllTest());
// objEstadio.destructor();

// let objPermiso = new permiso();
// console.log(await objPermiso.getAllTest());
// objPermiso.destructor();

// let objEntrenamiento = new entrenamiento();
// console.log(await objEntrenamiento.getAllTest());
// objEntrenamiento.destructor();

// let objRol = new rol();
// console.log(await objRol.getAllTest());
// objRol.destructor();

// let objEquipamiento = new equipamiento();
// console.log(await objEquipamiento.getAllTest());
// objEquipamiento.destructor();

// let objPremio = new premio();
// console.log(await objPremio.getAllTest());
// objPremio.destructor();

// let objEstadisticaJugador = new estadistica_jugador();
// console.log(await objEstadisticaJugador.getAllTest());
// objEstadisticaJugador.destructor();

// let objPatrocinador = new patrocinador();
// console.log(await objPatrocinador.getAllTest());
// objPatrocinador.destructor();

// let objEstadisticaTemporada = new estadistica_temporada();
// console.log(await objEstadisticaTemporada.getAllTest());
// objEstadisticaTemporada.destructor();

// let objGol = new gol();
// console.log(await objGol.getAllTest());
// objGol.destructor();

// let objJugador = new jugador();
// console.log(await objJugador.getAllTest());
// objJugador.destructor();

// let objUsuario = new usuario();
// console.log(await objUsuario.getAllTest());
// objUsuario.destructor();

// let objCalendario = new calendario();
// console.log(await objCalendario.getAllTest());
// objCalendario.destructor();

// let objArbitro = new arbitro();
// console.log(await objArbitro.getAllTest());
// objArbitro.destructor();

// let objComunicacion = new comunicacion();
// console.log(await objComunicacion.getAllTest());
// objComunicacion.destructor();

// let objEquipo = new equipo();
// console.log(await objEquipo.getAllTest());
// objEquipo.destructor();

// let objEstadisticaEquipo = new estadistica_equipo();
// console.log(await objEstadisticaEquipo.getAllTest());
// objEstadisticaEquipo.destructor();

// let objTemporada = new temporada();
// console.log(await objTemporada.getAllTest());
// objTemporada.destructor();

// let objEntrenador = new entrenador();
// console.log(await objEntrenador.getAllTest());
// objEntrenador.destructor();

// let objTarjeta = new tarjeta();
// console.log(await objTarjeta.getAllTest());
// objTarjeta.destructor();

// let objActividad = new actividad();
// console.log(await objActividad.getAllTest());
// objActividad.destructor();

// let objRendimiento = new rendimiento();
// console.log(await objRendimiento.getAllTest());
// objRendimiento.destructor();

// let objLesion = new lesion();
// console.log(await objLesion.getAllTest());
// objLesion.destructor();

// let objIncidente = new incidente();
// console.log(await objIncidente.getAllTest());
// objIncidente.destructor();

// let objConvocatoria = new convocatoria();
// console.log(await objConvocatoria.getAllTest());
// objConvocatoria.destructor();

// let objResultado = new resultado();
// console.log(await objResultado.getAllTest());
// objResultado.destructor();




/////////················································································································///////////
/////////················································CASO DE USO 3 PARTIDO···········································///////////

let objPartido = new partido();
// test para insercion de partido 
// Estos datos son opcionales ya que se pueden cambiar para generar un tipo de partido diferente.
// console.log(await objPartido.registerGame(
//     {
//         equipolocal:"669993f156837c8431e99e0d",
//         equipoVisitante:"669993f156837c8431e99e0c",
//         fecha_y_hora:"2024-07-25T10:00:00.000Z",
//         id_estadio:"669993fb56837c8431e99e20",
//         tipo:"torneo"
//     }
// ));


//test para eliminacion de partido ya existente.
// console.log(await objPartido.deleteGame("669c2a3bc00efe8e94bea5cd"));


//test para actualizar partido y existente.
// en la actualizacion no es necesario cambiar todos los campos. simplemente se pueden seleccionar los que desees.
const data={
    
    equipolocal:new ObjectId("669993f156837c8431e99e0d"),
    equipoVisitante:new ObjectId("669993f156837c8431e99e0c"),
    fecha_y_hora:new Date("2024-08-25T11:00:00.000Z"),
    id_estadio:new ObjectId("669993fb56837c8431e99e20"),
    tipo:"ya tu sabe ya tu sabe"
}

console.log(await objPartido.updateGame("669c2a22d7decd9de823f786",data));
objPartido.destructor();

/////////··············································FIN CASO DE USO 3 ······················································///////////
/////////················································································································///////////


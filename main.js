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


/*---------------------------------------------------------------- CASO DE USO 1 -----------------------------------------------------------------*/

// 1. Gestion de equipos
async function caso1(){

let objEquipo = new equipo();

// Registrar un nuevo equipo con un ID específico
console.log(await objEquipo.registerTeam({
    _id: "60d5f49a9f1b2c6d88f7e46b",
    nombre: "Caterpilar motors",
    ciudad: "Bogotá",
    id_estadio: "669993fb56837c8431e99e0f",
    id_entrenador: "669993a956837c8431e99dc0",
    id_jugadores: [
        "6699942656837c8431e99e5f",
        "6699942656837c8431e99e60",
        "6699942656837c8431e99e61"
    ],
    id_partido: [
        "6699944056837c8431e99e86",
        "6699944056837c8431e99e87"
    ]
}));

// Actualizar un equipo existente
// console.log(await objEquipo.updateTeam("60d5f49a9f1b2c6d88f7e46b", {
//     nombre: "Caterpilar motors Actualizacion",
//     ciudad: "Bogotá",
//     id_estadio: "5f6a6dcd3b23a1c35d5e8b15",
//     id_entrenador: "5f6a6dcd3b23a1c35d5e8b25",
//     id_jugadores: [
//         "5f6a6dcd3b23a1c35d5e8c05",
//         "5f6a6dcd3b23a1c35d5e8c06"
//     ],
//     id_partido: [
//         "5f6a6dcd3b23a1c35d5e8d03"
//     ]
// }));

// Eliminar un equipo existente
// console.log(await objEquipo.deleteTeam("60d5f49a9f1b2c6d88f7e46b"));

objEquipo.destructor();
}
// caso1()

/*---------------------------------------------------------------- FIN CASO DE USO 1 -----------------------------------------------------------------*/

/*---------------------------------------------------------------- CASO DE USO 2 -----------------------------------------------------------------*/

// 2. Gestión de jugadores

async function caso2() {
  let objJugador = new jugador();

  // Registrar un nuevo jugador
  console.log(await objJugador.registrarJugador({
      _id: "60d5f49a9f1b2c6d88f7e46e",
      nombre: "Lautaro Martinez",
      edad: 30,
      posicion: "Delantero",
      nacionalidad: "Argentino",
      numeroCamiseta: 9,
      id_equipo: "669993f156837c8431e99dff",
      id_lesion: [
          "6699942f56837c8431e99e72",
          "6699942f56837c8431e99e71"
      ],
      id_rendimiento: [
          "6699948156837c8431e99ed4",
          "6699948856837c8431e99ee4"
      ]
  }));

  // Actualizar un jugador existente
  // console.log(await objJugador.editarJugador("60d5f49a9f1b2c6d88f7e46e", {
  //     nombre: "Lautaro Martinez Modificado",
  //     edad: 32,
  //     posicion: "Mediapunta",
  //     nacionalidad: "Argentino",
  //     numeroCamiseta: 11,
  //     id_equipo: "669993f156837c8431e99dff",
  //     id_lesion: ["6699942f56837c8431e99e71"],
  //     id_rendimiento: ["6699948156837c8431e99ed4"]
  // }));

  // Eliminar un jugador existente
  // console.log(await objJugador.eliminarJugador("60d5f49a9f1b2c6d88f7e46e"));

  objJugador.destructor();
}

caso2().catch(console.error);


/*---------------------------------------------------------------- FIN DE USO 1 -----------------------------------------------------------------*/

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

// let objPartido = new partido();
// console.log(await objPartido.getAllTest());
// objPartido.destructor();


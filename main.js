import { connect } from "../ligaBetPlay/helpers/db/connect.js";

import { transferencia } from './js/modules/transferencia.js';
import { sancion } from './js/modules/sancion.js';
import { estadistica_partido } from './js/modules/estadistica_partido.js';
import { entrada } from './js/modules/entrada.js';
import { informe } from './js/modules/informe.js';
import { EstadioGestion } from './js/modules/estadio.js';
// import { permiso } from './js/modules/permiso.js';
import { entrenamiento } from './js/modules/entrenamiento.js';
// import { rol } from './js/modules/rol.js';
import { equipamiento } from './js/modules/equipamiento.js';
import { premio } from './js/modules/premio.js';
import { estadistica_jugador } from './js/modules/estadistica_jugador.js';
import { PatrocinadorGestion } from './js/modules/patrocinador.js';
import { estadistica_temporada } from './js/modules/estadistica_temporada.js';
import { gol } from './js/modules/gol.js';
import { jugador } from './js/modules/jugador.js';
// import { usuario } from './js/modules/usuario.js';
import { calendario } from './js/modules/calendario.js';
import { 
    // arbitro, 
    ArbitroGestion } from './js/modules/arbitro.js';
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
  
  // caso2().catch(console.error);
  
  
  /*---------------------------------------------------------------- FIN DE USO 2 -----------------------------------------------------------------*/


  /////////················································································································///////////
/////////················································CASO DE USO 3 PARTIDO···········································///////////
// test para insercion de partido 
// Estos datos son opcionales ya que se pueden cambiar para generar un tipo de partido diferente.

// let objPartido = new partido();
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
// const data={
    
//     equipolocal:new ObjectId("669993f156837c8431e99e0d"),
//     equipoVisitante:new ObjectId("669993f156837c8431e99e0c"),
//     fecha_y_hora:new Date("2024-08-25T11:00:00.000Z"),
//     id_estadio:new ObjectId("669993fb56837c8431e99e20"),
//     tipo:"ya tu sabe ya tu sabe"
// }

// console.log(await objPartido.updateGame("669c2a22d7decd9de823f786",data));
// objPartido.destructor();

/////////··············································FIN CASO DE USO 3 ······················································///////////
/////////················································································································///////////


/*---------------------------------------------------------------- CASO DE USO 5 -----------------------------------------------------------------*/



// let objEstadisticaEquipo = new estadistica_equipo();
// console.log(await objEstadisticaEquipo.getAllTest());
// objEstadisticaEquipo.destructor();


// let objEstadisticaTemporada = new estadistica_temporada();
// console.log(await objEstadisticaTemporada.getAllTest());
// objEstadisticaTemporada.destructor();


// let objEstadisticaPartido = new estadistica_partido();
// console.log(await objEstadisticaPartido.getAllTest());
// objEstadisticaPartido.destructor();

// let objEstadisticaJugador = new estadistica_jugador();
// console.log(await objEstadisticaJugador.getAllTest());
// objEstadisticaJugador.destructor();


/*---------------------------------------------------------------- FIN CASO DE USO 5 -----------------------------------------------------------------*/


/////////················································································································///////////
/////////················································CASO DE USO 6 COMUNICACION······································///////////

// let objComunicacion = new comunicacion();
//La noticia valida por titulo en ese caso . si sale error es porque ya existe en ese caso debemos cambiar el nombre de la noticia.
//test para el caso de uso 6 , datos para ingresar la nueva noticia.

// console.log(await objComunicacion.registerNews(
//     {
//         titulo: "Noticia de Liga BetPlay Nuevos Filtrados confirmados",
//         contenido: "Por Bajo Rendimiento Equipos Eliminados",
//         fechaPublicacion:"2024-10-20T8:00:00.000Z",
//         destinatarios:[
//             "medios",
//             "television"
//         ],
//         periodista:"Henry Boada",
//         tipo: "noticia"
//     }
// ));


//Test para eliminacion de noticia ya existe.
//basado en el id ingresado busca en la data y elimina la noticia 
// console.log(await objComunicacion.deleteNews("669c59e3857d1128052a18ea"));


//Test para actualizar noticia ya existe.
// en la data podemos colcoar los datos que deseamos ingresar para la actualizacion. no son requeridos todos los campos pero es opcional.
//  console.log(await objComunicacion.updateNews("6699937456837c8431e99da5",
//    {
//      titulo: "Noticia de Liga  ACTUALIZADA",
//      contenido: "Por Bajo Rendimiento Equipos Eliminados ACTUALIZADO",
//      fechaPublicacion:"2024-10-20T8:00:00.000Z",
//      destinatarios:[
//          "medios",
//          "television"
//      ],
//      periodista:"Miguel castro ACTUALIZADO",
//      tipo: "noticia"
//    }))


// objComunicacion.destructor();




/////////··············································FIN CASO DE USO 6 ······················································///////////
/////////················································································································///////////




// let objEquipo = new equipo();
// console.log(await objEquipo.getAllTest());
// objEquipo.destructor();
// let objEquipamiento = new equipamiento();
// console.log(await objEquipamiento.getAllTest());
// objEquipamiento.destructor();

// let objPremio = new premio();
// console.log(await objPremio.getAllTest());
// objPremio.destructor();



// let objGol = new gol();
// console.log(await objGol.getAllTest());
// objGol.destructor();


// let objUsuario = new usuario();
// console.log(await objUsuario.getAllTest());
// objUsuario.destructor();

// let objCalendario = new calendario();
// console.log(await objCalendario.getAllTest());
// objCalendario.destructor();


// let objComunicacion = new comunicacion();
// console.log(await objComunicacion.getAllTest());
// objComunicacion.destructor();


/////////················································································································///////////
/////////················································CASO DE USO 7 ENTRENADOR······································///////////
// let objEntrenador = new entrenador();
//test para insercion de un nuevo entrenador tener en cuenta que se debe ingresar el id del equipo al cual va a ser ingresado
// console.log(await objEntrenador.registerCoach(
//   {
//     nombre:"Mariana traslaviña",
//     edad:30,
//     nacionalidad:"china",
//     id_equipo:new ObjectId("669993f156837c8431e99dfc"),
//     experiencia: 20


//   }
// ));


//test para eliminacion de partido ya existente.
// console.log(await objEntrenador.deleteCoach("669993b156837c8431e99dd1"));


//test para actualizar partido ya existente.
// al momento de ingresa la experiencia tener en cuenta que debe haber 15 años de diferencia
// entre experiencia y edad.
//  console.log(await objEntrenador.updateCoach("669993b156837c8431e99dd0",
//    {
//      nombre:"Mariana traslaviña ACTUALIZADA",
//      edad:30,
//      nacionalidad:"china ACTUALIZADA",
//      id_equipo:new ObjectId("669993f156837c8431e99dfc"),
//      experiencia: 14

//    }))



// objEntrenador.destructor();


/////////··············································FIN CASO DE USO 7 ······················································///////////
/////////················································································································///////////






/*---------------------------------------------------------------- CASO DE USO 8 ---------------------------------------------------------------------*/


async function caso8() {
    const objArbitroGestion = new ArbitroGestion();

    try {
        // Registrar un nuevo árbitro
        console.log(await objArbitroGestion.registerReferee({
            _id: "669994d756837c8431e99f4b",
            id: "60f94f08b6a33a4d26aa3cc6",
            nombre: "Juan Martínez",
            edad: 42,
            nacionalidad: "Colombiana",
            experiencia: 15,
            especialidad: "Árbitro principal"
        }));

        // Actualizar un árbitro existente
        // console.log(await objArbitroGestion.updateReferee("669994d756837c8431e99f4b", {
        //     nombre: "Juan Martínez Actualizado",
        //     edad: 43,
        //     experiencia: 16,
        //     especialidad: "Árbitro asistente"
        // }));

        // Eliminar un árbitro existente
        // console.log(await objArbitroGestion.deleteReferee("669994d756837c8431e99f4b"));

    } catch (error) {
        console.error("Error en la operación:", error);
    } finally {
        objArbitroGestion.destructor();
    }
}
// caso8().catch(console.error);

/*---------------------------------------------------------------- FIN CASO DE USO 8 -----------------------------------------------------------------*/


/*---------------------------------------------------------------- CASO DE USO 9 -----------------------------------------------------------------*/

async function caso9() {
    const objEstadioGestion = new EstadioGestion();

    try {
        // Registrar un nuevo estadio
        console.log(await objEstadioGestion.registerStadium({
            _id: "60d5f49a9f1b2c6d88f7e47c",
            nombre: "Estadio El Campín",
            ubicacion: "Bogotá",
            capacidad: 50000
        }));

        // Actualizar un estadio existente
        // console.log(await objEstadioGestion.updateStadium("60d5f49a9f1b2c6d88f7e47c", {
        //     nombre: "Estadio El Campín Modificado",
        //     ubicacion: "Bogotá",
        //     capacidad: 55000
        // }));

        // Eliminar un estadio existente
        // console.log(await objEstadioGestion.deleteStadium("60d5f49a9f1b2c6d88f7e47c"));

    } catch (error) {
        console.error("Error en la operación:", error);
    } finally {
        objEstadioGestion.destructor();
    }
}

// caso9().catch(console.error);


/*---------------------------------------------------------------- FIN CASO DE USO 9 -----------------------------------------------------------------*/

/*---------------------------------------------------------------- CASO DE USO 11 -----------------------------------------------------------------*/


async function caso11() {
    const objPatrocinadorGestion = new PatrocinadorGestion();

    try {
        // Registrar un nuevo patrocinador
        console.log(await objPatrocinadorGestion.registerSponsor({
            _id: "60d5f49a9f1b2c6d88f7e47b",
            nombre: "Coca Cola",
            tipo: "Principal",
            monto: 100000,
            fechaInicio: 1672531200000, // Utilizando timestamp en milisegundos
            fechaFin: 1703980800000 // Utilizando timestamp en milisegundos
        }));

        // Actualizar un patrocinador existente
        // console.log(await objPatrocinadorGestion.updateSponsor("60d5f49a9f1b2c6d88f7e47b", {
        //     nombre: "Coca Cola Actualizado",
        //     tipo: "Secundario",
        //     monto: 120000,
        //     fechaInicio: 1672531200000, // Utilizando timestamp en milisegundos
        //     fechaFin: 1703980800000 // Utilizando timestamp en milisegundos
        // }));

        // Eliminar un patrocinador existente
        // console.log(await objPatrocinadorGestion.deleteSponsor("60d5f49a9f1b2c6d88f7e47b"));

    } catch (error) {
        console.error("Error en la operación:", error);
    } finally {
        objPatrocinadorGestion.destructor();
    }
}

// caso11().catch(console.error);


/*---------------------------------------------------------------- CASO DE USO 11 -----------------------------------------------------------------*/



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

/////////················································································································///////////
/////////················································CASO DE USO 20 EQUIPAMIENTO······································///////////
// let objEquipamiento = new equipamiento();

//Test para la insercion tener presente la existencia del equipo adicional revisar el tipo de equipamiento que ingresaremos al detectar 
//duplicidad saldra error y la fecha debe ir en el formato AA-MM-DD
// console.log(await objEquipamiento.registerEquipment({
//   id_equipo: new ObjectId("669993f156837c8431e99dfd"),
//   tipo: "Tobilleras",
//   cantidad: 20,
//   fecha_adquisicion:"2024-10-25"
// }));



//test para eliminacion de partido ya existente.
// console.log(await objEquipamiento.deleteEquipment({
//   id_equipo:"669993f156837c8431e99dfa",
//   tipo:"Tobilleras"
// }));
// objEquipamiento.destructor();


//Test para la actualización de un partido ya existente.
// // Tener presente que se debe ingresar el id del equipo al cual colocaremos el equipamiento.
//     console.log(await objEquipamiento.updateEquipment({
//       id_equipo: new ObjectId("669993f156837c8431e99dfa"),
//       tipo: "Yersys",
//       cantidad: 80,
//       Fecha_adquisicion:"2024-11-18",
//     }))


/////////··············································FIN CASO DE USO 20 ······················································///////////
/////////················································································································///////////




/////////················································································································///////////
/////////················································CASO DE USO 22 PREMIO······································///////////
// let objPremio = new premio();
//test para insercion de un nuevo premio . tener presente el momento de ingresar se hace teniendo en cuenta
//el id del jugador al cual se le otorgara el reconocimiento, si el jugador ya posee este mismo premio saldra error. adicional el formato de la fecha debe ser AA-MM-DD
// console.log(await objPremio.registerPrize(
//   {
//     nombre: "Medalla de oro",
//     descripcion:"Reconocimiento por mejor jugador del torneo brindado por henry",
//     fecha: "2024-01-12",
//     id_jugador:"6699942656837c8431e99e60"
//   }
// ));



//test para eliminar un premio ya existente. 
// console.log(await objPremio.deletePrize("6699947156837c8431e99ebe"))


//test para actualizar el premio ya existente
//tener presente ingresar un id de premio ya existente o sino dara error al igual que con el jugador.
// console.log(await objPremio.updatePrize("6699947856837c8431e99ed1",{
//   nombre: "Medalla de diamante",
//   descripcion:"Reconocimiento por mejor jugador del torneo brindado por henry",
//   fecha:"2024-01-12",
//   id_jugador:new ObjectId("6699942656837c8431e99e60")
// }));





// objPremio.destructor();


/////////··············································FIN CASO DE USO 22 ······················································///////////
/////////················································································································///////////

// let objEstadisticaJugador = new estadistica_jugador();
// console.log(await objEstadisticaJugador.getAllTest());
// objEstadisticaJugador.destructor();


/////////················································································································///////////
/////////················································CASO DE USO 24 PATROCINADOR······································///////////
// let objPatrocinador = new patrocinador();

//test para la correcta insercion de un patrocinador tener en cuenta las fechas de inicio y fin debe ser logicas.
// el monto no puede ser 0 
// console.log(await objPatrocinador.registerSponsor({
//     nombre: "Poker",
//     tipo: "Principal",
//     monto: 1,
//     fechaInicio:"2024-05-10",
//     fechaFin:"2024-08-09",
// }));


//test para la eliminacion de un patrocinador ya existente. 
//tener presente colocar el id de un patrocinador ya existente para evitar el error de que no se encuentra.
// console.log(await objPatrocinador.deleteSponsor("6699944b56837c8431e99ea8"));



//test para la actualización de un patrocinador.
//el id del patrocinador debe existir para actualizar .
// tener en cuenta las fechas que se ingresan . para que cumplan con las validaciones de formato y de los tiempos apropiados
// console.log(await objPatrocinador.updateSponsor("6699944b56837c8431e99ea6",
// {
//     nombre:"Ferrari",
//     tipo:"Secundario",
//     monto:50000,
//     fechaInicio:"2024-06-06",
//     fechaFin:"2024-08-15"
// }));





// objPatrocinador.destructor();

/////////··············································FIN CASO DE USO 24 ······················································///////////
/////////················································································································///////////
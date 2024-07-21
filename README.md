# LigaBetPlay

La Liga BetPlay es la liga de fútbol profesional de Colombia, que requiere un sistema de gestión integral para administrar todos los aspectos relacionados con la liga, desde la gestión de equipos y jugadores hasta la programación de partidos y la interacción con los aficionados. Actualmente, la gestión de la liga se realiza manualmente o con múltiples sistemas no integrados, lo que genera ineficiencias, errores y dificultades en la toma de decisiones.

El sistema de gestión propuesto debe abordar las siguientes necesidades:

1. **Gestión de Equipos y Jugadores:** El sistema debe permitir registrar, editar y eliminar información de los equipos y jugadores. Esto incluye detalles como nombre, ciudad, estadio, entrenadores, jugadores, y estadísticas individuales y colectivas.
2. **Programación y Resultados de Partidos:** Debe ser posible programar los partidos de la liga, asignando fechas, horarios y estadios. También debe permitir registrar los resultados de los partidos, incluyendo goles, tarjetas y otros incidentes.
3. **Gestión de Lesiones y Rendimiento:** El sistema debe registrar y gestionar las lesiones de los jugadores, así como hacer un seguimiento del rendimiento de los jugadores en cada partido, incluyendo estadísticas como minutos jugados, goles, asistencias y tarjetas.
4. **Entrenamientos y Convocatorias:** Debe permitir a los equipos planificar y registrar sesiones de entrenamiento, así como gestionar las convocatorias de jugadores para partidos y torneos.
5. **Transferencias de Jugadores:** El sistema debe gestionar las transferencias de jugadores entre equipos, incluyendo detalles como equipos de origen y destino, montos y fechas.
6. **Venta de Entradas y Patrocinios:** Debe facilitar la venta de entradas a los aficionados, gestionando las transacciones y asignando asientos en los estadios. También debe gestionar los contratos de patrocinio y publicidad.
7. **Comunicaciones y Relaciones Públicas:** El sistema debe permitir la emisión y gestión de comunicaciones oficiales y noticias de la liga, dirigidas a diferentes actores como aficionados, medios de comunicación y equipos.
8. **Estadísticas y Informes:** Debe proporcionar herramientas para generar y visualizar estadísticas e informes detallados sobre diferentes aspectos de la liga, como rendimiento de equipos y jugadores, asistencia a partidos, etc.
9. **Gestión de Usuarios y Roles:** El sistema debe gestionar los usuarios que acceden al sistema, asignando roles y permisos específicos según su función (administradores, entrenadores, jugadores, periodistas, aficionados).
10. **Seguridad y Acceso:** Debe garantizar la seguridad de la información y el acceso controlado mediante autenticación de usuarios y gestión de permisos.

## Caso de uso 3: Programación de Partidos

### registerGame():

Metodo para la insercion de un nuevo partido a la base de datos.

#### Parámetros

- `equipolocal` (string): El ID del equipo local.
- `equipoVisitante` (string): El ID del equipo visitante.
- `fecha_y_hora` (string): La fecha y hora del partido.
- `id_estadio` (string): El ID del estadio donde se jugará el partido.
- `tipo` (string): El tipo de partido (amistoso, competitivo, etc.).

#### Retorno

La función retorna un objeto con el resultado del registro del partido:

- `error` (Object): Si hay un error durante el registro, este campo contendrá el tipo de error.

- `message` (Object): Mensaje descriptivo del resultado del registro.

- `data` (Object): Datos del partido registrado (solo si el registro es exitoso).

  ```javascript
  let objPartido = new partido();
  console.log(await objPartido.registerGame(
      {
          equipolocal:"669993f156837c8431e99e0d",
          equipoVisitante:"669993f156837c8431e99e0c",
          fecha_y_hora:"2024-07-25T10:00:00.000Z",
          id_estadio:"669993fb56837c8431e99e20",
          tipo:"torneo"
      }
  ));
  ```

  

### deleteGame():

Metodo para la eliminacion de un partido existente de la base de datos.

#### Parámetros

- `id` (string): El ID del partido a eliminar.

#### Retorno

La función retorna un objeto con el resultado de la eliminación del partido:

- `error` (Object): Si hay un error durante la eliminación, este campo contendrá el tipo de error.

- `message` (Object): Mensaje descriptivo del resultado de la eliminación.

- `data` (Object): Datos de la eliminación (solo si la eliminación es exitosa).

  ```javascript
  console.log(await objPartido.deleteGame("669c2a3bc00efe8e94bea5cd"));
  
  ```

  

### updateGame():

Metodo para la actualizacion de un partido existente en la base de datos.

#### Parámetros

- `id` (string): El ID del partido a actualizar.
- `data` (Object): Los nuevos datos para actualizar el partido.

#### Retorno

La función retorna un objeto con el resultado de la actualización del partido:

- `error` (Object): Si hay un error durante la actualización, este campo contendrá el tipo de error.
- `message` (Object): Mensaje descriptivo del resultado de la actualización.
- `data` (Object): Datos de la actualización (solo si la actualización es exitosa).

```javascript
const data={
    
    equipolocal:new ObjectId("669993f156837c8431e99e0d"),
    equipoVisitante:new ObjectId("669993f156837c8431e99e0c"),
    fecha_y_hora:new Date("2024-08-25T11:00:00.000Z"),
    id_estadio:new ObjectId("669993fb56837c8431e99e20"),
    tipo:"ya tu sabe ya tu sabe"
}

console.log(await objPartido.updateGame("669c2a22d7decd9de823f786",data));
```





## Caso de uso 6: Gestión de Noticias y Comunicados

### registerNews():

Metodo para la insercion de una nueva noticia a la base de datos.

#### Parámetros

- `params `(Object): Los parámetros para el elemento de noticias.

- `_id` (string): El identificador único para el elemento de noticias.
- `periodista` (string): El autor del elemento de noticias.
- `tipo` (string): El tipo de noticia.` 
- `titulo` (string): El título de la noticia.` 
- `contenido` (string): El contenido de la noticia.` 
- `fechaPublicacion` (string): La fecha de publicación de la noticia.
- `destinatarios` (Array): Los destinatarios de la noticia.

#### Retorno

La función retorna un objeto con un mensaje de éxito o error, y los datos de la noticia registrada:

- `error` (Object): Contendrá "Not valid" si la noticia ya existe.
- `message` (Object): Mensaje de éxito o error.
- `data` (Object): Los datos de la noticia registrada.
- `error` (Object): Contendrá "Error" si se produce un error durante el registro.
- `message` (Object): Mensaje de error.
- `details` (Object): Detalles del error.

```javascript
let objComunicacion = new comunicacion();
console.log(await objComunicacion.registerNews(
    {
        titulo: "Noticia de Liga BetPlay Nuevos Filtrados confirmados",
        contenido: "Por Bajo Rendimiento Equipos Eliminados",
        fechaPublicacion:"2024-10-20T8:00:00.000Z",
        destinatarios:[
            "medios",
            "television"
        ],
        periodista:"Henry Boada",
        tipo: "noticia"
    }
));

```



### deleteNews():

Metodo para la eliminacion de una noticia ya existente de la base de datos.

#### Parámetros

- `id` (string): El identificador único de la noticia a eliminar.

#### Retorno

La función retorna un objeto con un mensaje de éxito o error, y los detalles de la operación:

- `error` (Object): Contendrá "Error" si se produce un error durante la eliminación.

- `message` (Object): Mensaje de éxito o error.

- `data` (Object): Los detalles de la operación de eliminación.

- `details` (Object): Detalles del error si se produce un error.

  ```javascript
  let objComunicacion = new comunicacion();
  console.log(await objComunicacion.deleteNews("669c59e3857d1128052a18ea"));
  
  ```

  

### updateNews():

Metodo para la actualizacion de una noticia ya existente en la base de datos.

#### Parámetros

- `id` (string): El identificador único de la noticia a actualizar.
- `data` (Object): Los datos a actualizar para la noticia.

#### Retorno

La función retorna un objeto con un mensaje de éxito o error, y los detalles de la operación:

- `error` (Object): Contendrá "Error" si se produce un error durante la actualización.

- `message` (Object): Mensaje de éxito o error.

- `data` (Object): Los detalles de la operación de actualización.

- `details` (Object): Detalles del error si se produce un error.

  ```javascript
  let objComunicacion = new comunicacion();
  console.log(await objComunicacion.updateNews("6699937456837c8431e99da5",
     {
       titulo: "Noticia de Liga  ACTUALIZADA",
       contenido: "Por Bajo Rendimiento Equipos Eliminados ACTUALIZADO",
       fechaPublicacion:"2024-10-20T8:00:00.000Z",
       destinatarios:[
           "medios",
           "television"
       ],
       periodista:"Miguel castro ACTUALIZADO",
       tipo: "noticia"
     }))
  
  ```

  

## Caso de uso 7: Gestión de Entrenadores

### registerCoach():

Metodo para la insercion de un nuevo entrenador a la base de datos.

#### Parámetros

- `params `(Object): Los parámetros para registrar un entrenador.
- `nombre` (string): El nombre del entrenador.` 
- `edad` (number): La edad del entrenador.
- `nacionalidad` (string): La nacionalidad del entrenador.` 
- `id_equipo` (string): El identificador del equipo al que pertenece el entrenador.
- `experiencia` (number): La experiencia del entrenador en años.

#### Retorno

La función retorna una promesa que resuelve con un objeto que contiene:

- `message` (Object): Un mensaje de éxito o error.
- `id` (string): El identificador del entrenador registrado (solo en caso de éxito).
- `error` (Object): Contendrá "Error" si se produce un error durante el registro.
- `details` (Object): Detalles del error (opcional).

```javascript
let objEntrenador = new entrenador();
console.log(await objEntrenador.registerCoach(
  {
    nombre:"Mariana traslaviña",
    edad:30,
    nacionalidad:"china",
    id_equipo:new ObjectId("669993f156837c8431e99dfc"),
    experiencia: 20


  }
));
```



### deleteCoach():

Metodo para la eliminacion de un entrenador existente de la base de datos.

#### Parámetros

- `id` (string): El identificador del entrenador a eliminar.

#### Retorno

La función retorna una promesa que resuelve con un objeto que contiene:

- `message` (Object): Un mensaje de éxito o error.

- `data` (Object): Los detalles de la operación de eliminación (solo en caso de éxito).

- `error` (Object): Contendrá "Error" si se produce un error durante la eliminación.

- `details` (Object): Detalles del error (opcional).

  ```javascript
  let objEntrenador = new entrenador();
  console.log(await objEntrenador.deleteCoach("669993b156837c8431e99dd1"));
  
  ```

  

### updateCoach():

Metodo para la actualizacion de un entrenador ya existente en la base de datos.

#### Parámetros

- `id` (string): El identificador del entrenador a actualizar.
- data(Object): Los datos para actualizar al entrenador.
- `nombre` (string): El nuevo nombre del entrenador.
- `edad` (number): La nueva edad del entrenador.
- `nacionalidad` (string): La nueva nacionalidad del entrenador.
- `id_equipo` (string): El nuevo identificador del equipo al que pertenece el entrenador.
- `experiencia` (number): La nueva experiencia del entrenador en años.

#### Retorno

La función retorna una promesa que resuelve con un objeto que contiene:

- `message` (Object): Un mensaje de éxito o error.

- `data` (Object): Los detalles de la operación de actualización (solo en caso de éxito).

- `error` (Object): Contendrá "Error" si se produce un error durante la actualización.

- `details` (Object): Detalles del error (opcional).

  ```javascript
  let objEntrenador = new entrenador();
  console.log(await objEntrenador.updateCoach("669993b156837c8431e99dd0",
     {
       nombre:"Mariana traslaviña ACTUALIZADA",
       edad:30,
       nacionalidad:"china ACTUALIZADA",
       id_equipo:new ObjectId("669993f156837c8431e99dfc"),
       experiencia: 14
  
     }))
  ```

  

## Caso de uso 20: Gestión de Equipamiento

### registerEquipment():

Metodo para la insercion de un nuevo equipamiento en la base de datos.

#### Parámetros

- `params` (Object): Los parámetros necesarios para registrar el equipamiento.
- `id_equipo` (string): El ID del equipo.
- `tipo` (string): El tipo del equipamiento.
- `cantidad` (number): La cantidad de equipamientos a registrar.
- `fecha_adquisicion` (string): La fecha de adquisición del equipamiento en formato AA-MM-DD.

#### Retorno

La función retorna un objeto con un mensaje y datos en caso de éxito o error:

- `error` (Object): Indica si hubo un error durante el proceso.
- `message` (Object): Mensaje descriptivo del resultado del proceso.
- `data` (Object): Datos relacionados con el resultado del proceso (en caso de éxito).
- `details` (Object): Detalles adicionales del error (en caso de error).

```javascript
let objEquipamiento = new equipamiento();
console.log(await objEquipamiento.registerEquipment({
  id_equipo: new ObjectId("669993f156837c8431e99dfd"),
  tipo: "Tobilleras",
  cantidad: 20,
  fecha_adquisicion:"2024-10-25"
}));

```



### deleteEquipment():

Metodo para la eliminacion de un equipamiento ya existente de la base de datos.

#### Parámetros

- `params` (Object): Parámetros necesarios para eliminar el equipamiento.
- `id_equipo` (string): El ID del equipo.
- `tipo` (string): El tipo del equipamiento.

#### Retorno

La función retorna un objeto con un mensaje y datos en caso de éxito o error:

- `error` (Object): Indica si hubo un error durante el proceso.
- `message` (Object): Mensaje descriptivo del resultado del proceso.
- `data` (Object): Datos relacionados con el resultado del proceso (en caso de éxito).
- `details` (Object): Detalles adicionales del error (en caso de error).

```javascript
let objEquipamiento = new equipamiento();
console.log(await objEquipamiento.deleteEquipment({
id_equipo:"669993f156837c8431e99dfa",
tipo:"Tobilleras"
}));
```



### updateEquipment():

Metodo para la actualizacion de un equipamiento ya existente en la base de datos.

#### Parámetros

- `params`(Object): Parámetros necesarios para actualizar el equipamiento.
- `id_equipo` (string): El ID del equipo.
- `tipo` (string): El tipo del equipamiento.
- `cantidad` (number): La nueva cantidad de equipamientos.
- `fecha_adquisicion` (string): La nueva fecha de adquisición del equipamiento en formato AA-MM-DD.

#### Retorno

La función retorna un objeto con un mensaje y datos en caso de éxito o error:

- `error` (Object): Indica si hubo un error durante el proceso.
- `message` (Object): Mensaje descriptivo del resultado del proceso.
- `data` (Object): Datos relacionados con el resultado del proceso (en caso de éxito).
- `details` (Object): Detalles adicionales del error (en caso de error).

```javascript
let objEquipamiento = new equipamiento();
console.log(await objEquipamiento.updateEquipment({
      id_equipo: new ObjectId("669993f156837c8431e99dfa"),
      tipo: "Yersys",
      cantidad: 80,
      Fecha_adquisicion:"2024-11-18",
    }))
```


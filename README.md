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

### **1. Gestión de Equipos**

**Actor:** Administrador de la Liga
**Descripción:** El administrador puede agregar, editar y eliminar equipos de la liga.
**Precondiciones:** El administrador debe estar autenticado.
**Flujo Principal:**

1. El administrador accede al módulo de gestión de equipos.
2. El administrador selecciona la opción de agregar equipo.
3. El administrador ingresa la información del equipo (nombre, estadio, ciudad, etc.).
4. El sistema guarda la información del equipo.
5. El administrador puede editar o eliminar equipos existentes.

> **Estado:**   Finalizado.
> 

> **Desarrollador:**  Sebastian Gutierrez
> 

> **Modulo:** equipo
> 

> **Usuario:** adminLigaBetPlay / adminLiga1234
> 

Para llevar a cabo este caso de uso, se usará la conexión usando el usuario adminLigaBetPlay.

**Link de conexion en mongo:** mongodb://admminLigaBetPlay:adminLiga1234@monorail.proxy.rlwy.net:28671/ligaBetPlay


# Módulo: Gestión de Equipos

### Descripción:
Este módulo demuestra las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de equipos en una base de datos.

Función: caso1()

### Descripción:
Función asíncrona que ejecuta una serie de operaciones de gestión de equipos como ejemplo de uso de la clase 'equipo'.

### Ejecución:
1. Creación de un nuevo equipo:
   - Crea una instancia de la clase 'equipo'.
   - Registra un nuevo equipo con datos específicos, incluyendo ID, nombre, ciudad, y referencias a estadio, entrenador, jugadores y partidos.
   - Imprime el resultado de la operación en la consola.

2. Actualización de un equipo existente:
   - Actualiza el equipo recién creado con nueva información.
   - Modifica nombre, referencias a estadio, entrenador, jugadores y partidos.
   - Imprime el resultado de la actualización en la consola.

3. Eliminación de un equipo:
   - Elimina el equipo utilizando su ID.
   - Imprime el resultado de la eliminación en la consola.

4. Limpieza:
   - Llama al método destructor del objeto equipo para liberar recursos.

### Retorno:
La función no retorna un valor directamente, pero imprime en consola los resultados de cada operación:
- Para el registro: ID del equipo creado o un indicador de éxito.
- Para la actualización: Número de documentos actualizados (debería ser 1).
- Para la eliminación: Número de documentos eliminados (debería ser 1).

## Notas:
- Todas las operaciones son asíncronas y utilizan 'await' para manejar las promesas.
- Se asume que la clase 'equipo' tiene métodos para registrar, actualizar y eliminar equipos.
- Los IDs utilizados son strings, lo que sugiere que podrían ser ObjectIds de MongoDB.
- El manejo de errores no está explícito en esta función y debería ser implementado en un entorno de producción.

```js
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
console.log(await objEquipo.updateTeam("60d5f49a9f1b2c6d88f7e46b", {
    nombre: "Caterpilar motors Actualizacion",
    ciudad: "Bogotá",
    id_estadio: "5f6a6dcd3b23a1c35d5e8b15",
    id_entrenador: "5f6a6dcd3b23a1c35d5e8b25",
    id_jugadores: [
        "5f6a6dcd3b23a1c35d5e8c05",
        "5f6a6dcd3b23a1c35d5e8c06"
    ],
    id_partido: [
        "5f6a6dcd3b23a1c35d5e8d03"
    ]
}));

// Eliminar un equipo existente
console.log(await objEquipo.deleteTeam("60d5f49a9f1b2c6d88f7e46b"));

objEquipo.destructor();
}
caso1()
```

### **2. Gestión de Jugadores**

**Actor:** Administrador de la Liga, Equipo Técnico
**Descripción:** Permite registrar, editar y eliminar jugadores de los equipos.
**Precondiciones:** El actor debe estar autenticado.
**Flujo Principal:**

1. El actor accede al módulo de gestión de jugadores.
2. El actor selecciona la opción de agregar jugador.
3. El actor ingresa la información del jugador (nombre, edad, posición, etc.).
4. El sistema guarda la información del jugador.
5. El actor puede editar o eliminar jugadores existentes.

> **Estado:**   Finalizado
> 

> **Desarrollador:**  Sebastian Gutierrez
> 

> **Modulo:** jugador
> 

> **Usuario:** (adminLigaBetPlay / adminLiga1234) & / (equipoTecnicoLigaBetPlay / equipoTecnico1234)
> 

Para llevar a cabo este caso de uso, se usará la conexión usando el usuario adminLigaBetPlay y el usuario equipoTecnicoLigaBetPLay:

**Link de conexion en mongo:** 

- mongodb://admminLigaBetPlay:adminLiga1234@monorail.proxy.rlwy.net:28671/ligaBetPlay
- mongodb://equipoTecnicoLigaBetPlay:equipoTecnico1234@monorail.proxy.rlwy.net:28671/ligaBetPlay

En la implementación de este caso de uso, se consideraron los siguientes aspectos:

1. Validación de existencia: Se verifica si el jugador ya existe en el sistema.
2. Gestión de jugador:
    - Registro: Si el jugador no existe, se permite su creación.
    - Edición: Se facilita la modificación de datos de jugadores existentes.
    - Eliminación: Se ofrece la opción de eliminar jugadores del sistema.
3. Interacción con el usuario: Las operaciones se realizan según las necesidades y preferencias del usuario que ejecuta el caso de uso.

Este enfoque asegura una gestión integral de jugadores, permitiendo un control eficiente y adaptado a los requerimientos del usuario.


# Módulo: Gestión de Jugadores

## Descripción:

Este módulo demuestra las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de jugadores en una base de datos.
Función: caso2()

## Descripción:
Función asíncrona que ejecuta una serie de operaciones de gestión de jugadores como ejemplo de uso de la clase 'jugador'.

## Ejecución:

### Creación de un nuevo jugador:

Crea una instancia de la clase 'jugador'.
Registra un nuevo jugador (Lautaro Martinez) con datos específicos, incluyendo ID, nombre, edad, posición, nacionalidad, número de camiseta, equipo, lesiones y rendimientos.
Imprime el resultado de la operación en la consola.


### Actualización de un jugador existente:

Actualiza el jugador recién creado con nueva información.
Modifica nombre, edad, posición, número de camiseta, y actualiza las referencias a lesiones y rendimientos.
Imprime el resultado de la actualización en la consola.


### Eliminación de un jugador:

Elimina el jugador utilizando su ID.
Imprime el resultado de la eliminación en la consola.


### Limpieza:

Llama al método destructor del objeto jugador para liberar recursos.



## Retorno:
La función no retorna un valor directamente, pero imprime en consola los resultados de cada operación:

Para el registro: ID del jugador creado o un indicador de éxito.
Para la actualización: Número de documentos actualizados (debería ser 1).
Para la eliminación: Número de documentos eliminados (debería ser 1).

## Manejo de Errores:

La función caso2() está envuelta en un .catch() que captura y registra cualquier error en la consola.

# Notas:

Todas las operaciones son asíncronas y utilizan 'await' para manejar las promesas.
Se asume que la clase 'jugador' tiene métodos para registrar, editar y eliminar jugadores.
Los IDs utilizados son strings, lo que sugiere que podrían ser ObjectIds de MongoDB.
Este código proporciona un ejemplo completo de cómo gestionar el ciclo de vida de un jugador en la base de datos.
La estructura permite fácilmente probar cada operación CRUD de forma individual o en secuencia



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

### 5. Visualización de Estadísticas

**Actor:** Aficionado, Periodista, Equipo Técnico
**Descripción:** Permite visualizar estadísticas de jugadores, equipos y partidos.
**Precondiciones:** El usuario debe estar autenticado (para ciertos datos).
**Flujo Principal:**

1. El usuario accede al módulo de estadísticas.
2. El usuario selecciona el tipo de estadísticas que desea visualizar (por jugador, equipo, temporada).
3. El sistema muestra las estadísticas solicitadas.
4. El usuario puede filtrar y ordenar las estadísticas según diferentes criterios.

> **Estado:**   Finalización
> 

> **Desarrollador:**  Sebastian Gutierrez
> 

> **Modulo:** estadistica_jugador, estadistica_equipo, estadistica_temporada, estadistica_partido
> 

> **Usuario:** (aficionadoLigaBetPlay / aficionado1234) & (periodistaLigaBetPlay / periodista1234) & (equipoTecnicoLigaBetPlay / equipoTecnico1234)
> 

Para llevar a cabo este caso de uso, se usará la conexión usando el usuario adminLigaBetPlay, el usuario equipoTecnicoLigaBetPLay y el usuario periodistaLigaBetPlay

**Link de conexion en mongo:**

- mongodb://equipoTecnicoLigaBetPlay:equipoTecnico1234@monorail.proxy.rlwy.net:28671/ligaBetPlay
- mongodb://aficionadoLigaBetPlay:aficionado1234@monorail.proxy.rlwy.net:28671/ligaBetPlay
- mongodb://periodistaLigaBetPlay:periodista1234@monorail.proxy.rlwy.net:28671/ligaBetPlay


# **Exclusión de caso de uso:**

La decisión de no implementar este caso de uso se basa en la eficiencia, la simplicidad y el aprovechamiento de las capacidades existentes del sistema. Los usuarios autorizados ya tienen las herramientas necesarias para acceder, filtrar y analizar las estadísticas directamente desde las colecciones de datos. Esta aproximación no solo ahorra recursos de desarrollo, sino que también ofrece mayor flexibilidad y sostenibilidad a largo plazo. El enfoque se centrará en mejorar la accesibilidad y usabilidad de las colecciones existentes, asegurando que los usuarios puedan obtener fácilmente la información estadística que necesitan sin la necesidad de una función adicional dedicada.





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

  ### 8. Gestión de Árbitros

**Actor:** Administrador de la Liga **Descripción:** Permite registrar, editar y eliminar árbitros para los partidos. **Precondiciones:** El administrador debe estar autenticado. **Flujo Principal:**

1. El administrador accede al módulo de gestión de árbitros.
2. El administrador selecciona la opción de agregar árbitro.
3. El administrador ingresa la información del árbitro (nombre, experiencia, etc.).
4. El sistema guarda la información del árbitro.
5. El administrador puede editar o eliminar árbitros existentes.

> **Estado:**   Finalización
> 

> **Desarrollador:**  Sebastian Gutierrez
> 

> **Modulo:** arbitro
> 

> **Usuario:** adminLigaBetPlay / adminLiga1234
> 

Para llevar a cabo este caso de uso, se usará la conexión usando el usuario adminLigaBetPlay.

**Link de conexion en mongo:** mongodb://admminLigaBetPlay:adminLiga1234@monorail.proxy.rlwy.net:28671/ligaBetPlay

### Función `caso8`

- **Descripción**: Realiza operaciones CRUD en una colección de árbitros.
- **Retorno**: `Promise<void>` - Una promesa que se resuelve cuando todas las operaciones se han completado.
- **Errores**: Lanza un error si alguna de las operaciones falla.

### Método `registerReferee`

- **Descripción**: Registra un nuevo árbitro en la base de datos.
- **Parámetros**:
    - `árbitro` (Object): Detalles del árbitro.
        - `_id` (string): ID único del árbitro.
        - `id` (string): ID de referencia del árbitro.
        - `nombre` (string): Nombre del árbitro.
        - `edad` (number): Edad del árbitro.
        - `nacionalidad` (string): Nacionalidad del árbitro.
        - `experiencia` (number): Años de experiencia del árbitro.
        - `especialidad` (string): Especialidad del árbitro.
- **Retorno**: `Promise<Object>` - Detalles del árbitro registrado.

### Método `updateReferee`

- **Descripción**: Actualiza la información de un árbitro existente.
- **Parámetros**:
    - `id` (string): ID único del árbitro a actualizar.
    - `árbitro` (Object): Nuevos detalles del árbitro.
        - `nombre` (string): Nuevo nombre del árbitro.
        - `edad` (number): Nueva edad del árbitro.
        - `experiencia` (number): Nuevos años de experiencia del árbitro.
        - `especialidad` (string): Nueva especialidad del árbitro.
- **Retorno**: `Promise<Object>` - Detalles del árbitro actualizado.

### Método `deleteReferee`

- **Descripción**: Elimina un árbitro existente de la base de datos.
- **Parámetros**:
    - `id` (string): ID único del árbitro a eliminar.
- **Retorno**: `Promise<Object>` - Resultado de la operación de eliminación.

### Método `destructor`

- **Descripción**: Libera los recursos utilizados por `objArbitroGestion`.

```jsx
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
        console.log(await objArbitroGestion.updateReferee("669994d756837c8431e99f4b", {
            nombre: "Juan Martínez Actualizado",
            edad: 43,
            experiencia: 16,
            especialidad: "Árbitro asistente"
        }));

        // Eliminar un árbitro existente
        console.log(await objArbitroGestion.deleteReferee("669994d756837c8431e99f4b"));

    } catch (error) {
        console.error("Error en la operación:", error);
    } finally {
        objArbitroGestion.destructor();
    }
}
caso8().catch(console.error);
```
### 9. Gestión de Estadios

**Actor:** Administrador de la Liga **Descripción:** Permite registrar, editar y eliminar estadios donde se jugarán los partidos. **Precondiciones:** El administrador debe estar autenticado. **Flujo Principal:**

1. El administrador accede al módulo de gestión de estadios.
2. El administrador selecciona la opción de agregar estadio.
3. El administrador ingresa la información del estadio (nombre, capacidad, ubicación, etc.).
4. El sistema guarda la información del estadio.
5. El administrador puede editar o eliminar estadios existentes.

> **Estado:**   Finalización
> 

> **Desarrollador:**  Sebastian Gutierrez
> 

> **Modulo:** estadio
> 

> **Usuario:** adminLigaBetPlay / adminLiga1234
> 

Para llevar a cabo este caso de uso, se usará la conexión usando el usuario adminLigaBetPlay.

**Link de conexion en mongo:** mongodb://admminLigaBetPlay:adminLiga1234@monorail.proxy.rlwy.net:28671/ligaBetPlay

### Función `caso9`

- **Descripción**: Realiza operaciones CRUD en una colección de estadios.
- **Retorno**: `Promise<void>` - Una promesa que se resuelve cuando todas las operaciones se han completado.
- **Errores**: Lanza un error si alguna de las operaciones falla.

### Método `registerStadium`

- **Descripción**: Registra un nuevo estadio en la base de datos.
- **Parámetros**:
    - `estadio` (Object): Detalles del estadio.
        - `_id` (string): ID único del estadio.
        - `nombre` (string): Nombre del estadio.
        - `ubicacion` (string): Ubicación del estadio.
        - `capacidad` (number): Capacidad del estadio.
- **Retorno**: `Promise<Object>` - Detalles del estadio registrado.

### Método `updateStadium`

- **Descripción**: Actualiza la información de un estadio existente.
- **Parámetros**:
    - `id` (string): ID único del estadio a actualizar.
    - `estadio` (Object): Nuevos detalles del estadio.
        - `nombre` (string): Nuevo nombre del estadio.
        - `ubicacion` (string): Nueva ubicación del estadio.
        - `capacidad` (number): Nueva capacidad del estadio.
- **Retorno**: `Promise<Object>` - Detalles del estadio actualizado.

### Método `deleteStadium`

- **Descripción**: Elimina un estadio existente de la base de datos.
- **Parámetros**:
    - `id` (string): ID único del estadio a eliminar.
- **Retorno**: `Promise<Object>` - Resultado de la operación de eliminación.

### Método `destructor`

- **Descripción**: Libera los recursos utilizados por `objEstadioGestion`.

```jsx
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
        console.log(await objEstadioGestion.updateStadium("60d5f49a9f1b2c6d88f7e47c", {
            nombre: "Estadio El Campín Modificado",
            ubicacion: "Bogotá",
            capacidad: 55000
        }));

        // Eliminar un estadio existente
        console.log(await objEstadioGestion.deleteStadium("60d5f49a9f1b2c6d88f7e47c"));

    } catch (error) {
        console.error("Error en la operación:", error);
    } finally {
        objEstadioGestion.destructor();
    }
}

caso9().catch(console.error);
```

### 11. Gestión de Patrocinios

**Actor:** Administrador de la Liga **Descripción:** Permite registrar, editar y eliminar patrocinios de la liga y equipos. **Precondiciones:** El administrador debe estar autenticado. **Flujo Principal:**

1. El administrador accede al módulo de gestión de patrocinios.
2. El administrador selecciona la opción de agregar patrocinio.
3. El administrador ingresa la información del patrocinio (empresa, monto, duración, etc.).
4. El sistema guarda la información del patrocinio.
5. El administrador puede editar o eliminar patrocinios existentes.

> **Estado:**   Finalización
> 

> **Desarrollador:**  Sebastian Gutierrez
> 

> **Modulo:** patrocinador
> 

> **Usuario:** adminLigaBetPlay / adminLiga1234
> 

Para llevar a cabo este caso de uso, se usará la conexión usando el usuario adminLigaBetPlay.

**Link de conexion en mongo:** mongodb://admminLigaBetPlay:adminLiga1234@monorail.proxy.rlwy.net:28671/ligaBetPlay


### Función `caso11`

- **Descripción**: Realiza operaciones CRUD en una colección de patrocinadores.
- **Retorno**: `Promise<void>` - Una promesa que se resuelve cuando todas las operaciones se han completado.
- **Errores**: Lanza un error si alguna de las operaciones falla.

### Método `registerSponsor`

- **Descripción**: Registra un nuevo patrocinador en la base de datos.
- **Parámetros**:
    - `patrocinador` (Object): Detalles del patrocinador.
        - `_id` (string): ID único del patrocinador.
        - `nombre` (string): Nombre del patrocinador.
        - `tipo` (string): Tipo de patrocinador (e.g., Principal, Secundario).
        - `monto` (number): Monto del patrocinio.
        - `fechaInicio` (number): Fecha de inicio del patrocinio (timestamp en milisegundos).
        - `fechaFin` (number): Fecha de fin del patrocinio (timestamp en milisegundos).
- **Retorno**: `Promise<Object>` - Detalles del patrocinador registrado.

### Método `updateSponsor`

- **Descripción**: Actualiza la información de un patrocinador existente.
- **Parámetros**:
    - `id` (string): ID único del patrocinador a actualizar.
    - `patrocinador` (Object): Nuevos detalles del patrocinador.
        - `nombre` (string): Nuevo nombre del patrocinador.
        - `tipo` (string): Nuevo tipo de patrocinador (e.g., Principal, Secundario).
        - `monto` (number): Nuevo monto del patrocinio.
        - `fechaInicio` (number): Nueva fecha de inicio del patrocinio (timestamp en milisegundos).
        - `fechaFin` (number): Nueva fecha de fin del patrocinio (timestamp en milisegundos).
- **Retorno**: `Promise<Object>` - Detalles del patrocinador actualizado.

### Método `deleteSponsor`

- **Descripción**: Elimina un patrocinador existente de la base de datos.
- **Parámetros**:
    - `id` (string): ID único del patrocinador a eliminar.
- **Retorno**: `Promise<Object>` - Resultado de la operación de eliminación.

### Método `destructor`

- **Descripción**: Libera los recursos utilizados por `objPatrocinadorGestion`.

```jsx
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
        console.log(await objPatrocinadorGestion.updateSponsor("60d5f49a9f1b2c6d88f7e47b", {
            nombre: "Coca Cola Actualizado",
            tipo: "Secundario",
            monto: 120000,
            fechaInicio: 1672531200000, // Utilizando timestamp en milisegundos
            fechaFin: 1703980800000 // Utilizando timestamp en milisegundos
        }));

        // Eliminar un patrocinador existente
        console.log(await objPatrocinadorGestion.deleteSponsor("60d5f49a9f1b2c6d88f7e47b"));

    } catch (error) {
        console.error("Error en la operación:", error);
    } finally {
        objPatrocinadorGestion.destructor();
    }
}

caso11().catch(console.error);

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



## Caso de uso 22: Gestión de Premios y Reconocimientos

### registerPrize():

Metodo para registrar un nuevo premio en la base de datos.

#### Parámetros

- `params` (Object): Los parámetros para registrar un premio.
- `nombre` (string): El nombre del premio.
- `descripcion` (string): La descripción del premio.
- `fecha` (string): La fecha del premio en formato 'AA-MM-DD'.
- `id_jugador` (string): El identificador del jugador al que se le otorga el premio.

#### Retorno

La función retorna una promesa que resuelve con un objeto que contiene:

- `message` (Object): El mensaje de éxito o error.
- `data` (Object): Los datos del premio registrado (en caso de éxito).
- `error` (Object): Contendrá el error (en caso de fallo).
- `details` (Object): Detalles adicionales del error (opcional).

```javascript
let objPremio = new premio();
console.log(await objPremio.registerPrize(
  {
    nombre: "Medalla de oro",
    descripcion:"Reconocimiento por mejor jugador del torneo brindado por henry",
    fecha: "2024-01-12",
    id_jugador:"6699942656837c8431e99e60"
  }
));
```



### deletePrize():

Metodo para la eliminacion de un premio ya existente de la base de datos.

#### Parámetros

- `id` (string): El identificador del premio que se quiere eliminar.

#### Retorno

La función retorna una promesa que resuelve con un objeto que contiene:

- `message` (Object): El mensaje de éxito o error.

- `data` (Object): Los datos de la operación de eliminación (en caso de éxito).

- `error` (Object): Contendrá el error (en caso de fallo).

- `details` (Object): Detalles adicionales del error (opcional).

  ```javascript
  let objPremio = new premio();
  console.log(await objPremio.deletePrize("6699947156837c8431e99ebe"))
  
  ```



### updatePrize():

Metodo para la actualizacion de un premio ya existente en la base de datos.

#### Parámetros

- `id` (string): El identificador del premio que se quiere actualizar.
- `data`(Object): Los datos para actualizar el premio.
- `nombre` (string, opcional): El nuevo nombre del premio.
- `descripcion` (string, opcional): La nueva descripción del premio.
- `fecha` (string, opcional): La nueva fecha del premio en formato 'AA-MM-DD'.
- `id_jugador` (string, opcional): El nuevo identificador del jugador al que se le otorga el premio.

#### Retorno

La función retorna una promesa que resuelve con un objeto que contiene:

- `message` (Object): El mensaje de éxito o error.
- `data` (Object): Los datos de la operación de actualización (en caso de éxito).
- `error` (Object): Contendrá el error (en caso de fallo).
- `details` (Object): Detalles adicionales del error (opcional).

```javascript
let objPremio = new premio();
console.log(await objPremio.updatePrize("6699947856837c8431e99ed1",{
  nombre: "Medalla de diamante",
  descripcion:"Reconocimiento por mejor jugador del torneo brindado por henry",
  fecha:"2024-01-12",
  id_jugador:new ObjectId("6699942656837c8431e99e60")
}));
```



## Caso de uso 24: Gestión de Patrocinadores y Publicidad

### registerSponsor():

Metodo para la insercion de un nuevo patrocinador a la base de datos.

#### Parámetros

- `datosPatrocinador`(Object): Los datos del patrocinador a registrar.
- `nombre` (string): El nombre del patrocinador.
- `tipo` (string): El tipo de patrocinador.
- `monto` (number): El monto del patrocinador.
- `fechaInicio` (string): La fecha de inicio del patrocinador en formato 'AA-MM-DD'.
- `fechaFin` (string): La fecha de fin del patrocinador en formato 'AA-MM-DD'.

#### Retorno

La función retorna un objeto que contiene:

- `error` (Object): Indica si hubo un error durante el registro.
- `message` (Object): Mensaje de éxito o error.
- `data`(Object): Datos adicionales en caso de éxito, como el ID del patrocinador registrado.
- `ejemploFormatoCorrecto` (string): Ejemplo de formato de fecha correcto.
- `details` (Object): Detalles del error en caso de fallo.

```javascript
let objPatrocinador = new patrocinador();
console.log(await objPatrocinador.registerSponsor({
    nombre: "Poker",
    tipo: "Principal",
    monto: 1,
    fechaInicio:"2024-05-10",
    fechaFin:"2024-08-09",
}));
```



### deleteSponsor():

Metodo para la eliminacion de un patrocinador existente de la base de datos.

#### Parámetros

- `id` (string): El ID del patrocinador a eliminar.

#### Retorno

La función retorna un objeto que contiene:

- `error` (Object): Indica si hubo un error durante el proceso.
- `message` (Object): Mensaje de éxito o error.
- `data` (Object): Datos adicionales en caso de éxito, como el número de patrocinadores eliminados.
- `details` (Object): Detalles del error en caso de fallo.

```javascript
let objPatrocinador = new patrocinador();
console.log(await objPatrocinador.deleteSponsor("6699944b56837c8431e99ea8"));

```



### updateSponsor():

Metodo para la actualizacion de un patrocinador ya existente en la base de datos.

#### Parámetros

- `id` (string): El ID del patrocinador a actualizar.
- `datosPatrocinador`(Object): Los nuevos datos del patrocinador.
- `nombre` (string): El nuevo nombre del patrocinador.
- `tipo` (string): El nuevo tipo de patrocinador.
- `monto` (number): El nuevo monto del patrocinador.
- `fechaInicio` (string): La nueva fecha de inicio del patrocinador en formato 'AA-MM-DD'.
- `fechaFin` (string): La nueva fecha de fin del patrocinador en formato 'AA-MM-DD'.

#### Retorno

La función retorna un objeto que contiene:

- `error` (Object): Indica si hubo un error durante la actualización.
- `message` (Object): Mensaje de éxito o error.
- `data` (Object): Datos adicionales en caso de éxito, como el resultado de la operación de actualización.
- `details` (Object): Detalles del error en caso de fallo.

```javascript
let objPatrocinador = new patrocinador();
console.log(await objPatrocinador.updateSponsor("6699944b56837c8431e99ea6",
{
    nombre:"Ferrari",
    tipo:"Secundario",
    monto:50000,
    fechaInicio:"2024-06-06",
    fechaFin:"2024-08-15"
}));
```



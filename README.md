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


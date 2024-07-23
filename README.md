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

### Objetivos del Sistema

1. **Centralizar la Gestión:** Unificar la gestión de todos los aspectos de la liga en un único sistema integrado.
2. **Mejorar la Eficiencia:** Reducir los errores y mejorar la eficiencia operativa mediante la automatización de tareas y procesos.
3. **Facilitar la Toma de Decisiones:** Proporcionar información precisa y oportuna para la toma de decisiones estratégicas.
4. **Incrementar la Interacción:** Mejorar la interacción con los aficionados y otros actores mediante una plataforma accesible y funcional.
5. **Asegurar la Información:** Garantizar la seguridad y confidencialidad de la información gestionada por el sistema.

### Clases Principales y Atributos

#### Clase **Equipo**

- `id`: Identificador único del equipo.
- `nombre`: Nombre del equipo.
- `ciudad`: Ciudad de origen del equipo.
- `estadio`: Nombre del estadio donde juega el equipo.
- `entrenador`: Nombre del entrenador del equipo.
- `jugadores`: Lista de jugadores que pertenecen al equipo.
- `partidos`: Lista de partidos en los que ha participado el equipo.

#### Clase **Jugador**

- `id`: Identificador único del jugador.
- `nombre`: Nombre del jugador.
- `edad`: Edad del jugador.
- `posicion`: Posición en la que juega (por ejemplo, delantero, mediocampista, etc.).
- `nacionalidad`: Nacionalidad del jugador.
- `numeroCamiseta`: Número de camiseta del jugador.
- `equipo`: Equipo al que pertenece el jugador.
- `lesiones`: Lista de lesiones que ha tenido el jugador.
- `rendimientos`: Lista de registros de rendimiento del jugador.

#### Clase **Partido**

- `id`: Identificador único del partido.
- `equipoLocal`: Equipo que juega como local.
- `equipoVisitante`: Equipo que juega como visitante.
- `fecha`: Fecha del partido.
- `hora`: Hora del partido.
- `estadio`: Estadio donde se juega el partido.
- `goles`: Lista de goles anotados en el partido.
- `tarjetas`: Lista de tarjetas (amarillas y rojas) emitidas durante el partido.
- `incidentes`: Lista de incidentes ocurridos durante el partido.
- `resultado`: Resultado final del partido.

#### Clase **Gol**

- `id`: Identificador único del gol.
- `jugador`: Jugador que anotó el gol.
- `equipo`: Equipo que anotó el gol.
- `minuto`: Minuto en el que se anotó el gol.
- `partido`: Partido en el que se anotó el gol.

#### Clase **Tarjeta**

- `id`: Identificador único de la tarjeta.
- `jugador`: Jugador que recibió la tarjeta.
- `partido`: Partido en el que se emitió la tarjeta.
- `tipo`: Tipo de tarjeta (amarilla o roja).
- `minuto`: Minuto en el que se emitió la tarjeta.

#### Clase **Incidente**

- `id`: Identificador único del incidente.
- `partido`: Partido en el que ocurrió el incidente.
- `descripcion`: Descripción del incidente.
- `minuto`: Minuto en el que ocurrió el incidente.

#### Clase **Resultado**

- `id`: Identificador único del resultado.
- `partido`: Partido al que corresponde el resultado.
- `golesEquipoLocal`: Número de goles del equipo local.
- `golesEquipoVisitante`: Número de goles del equipo visitante.

#### Clase **Lesión**

- `id`: Identificador único de la lesión.
- `jugador`: Jugador lesionado.
- `tipo`: Tipo de lesión.
- `gravedad`: Gravedad de la lesión.
- `fechaInicio`: Fecha de inicio de la lesión.
- `fechaFin`: Fecha de finalización de la lesión (recuperación).

#### Clase **Rendimiento**

- `id`: Identificador único del rendimiento.
- `jugador`: Jugador al que corresponde el rendimiento.
- `partido`: Partido en el que se evaluó el rendimiento.
- `minutosJugados`: Minutos jugados por el jugador en el partido.
- `goles`: Número de goles anotados por el jugador en el partido.
- `asistencias`: Número de asistencias del jugador en el partido.
- `tarjetasAmarillas`: Número de tarjetas amarillas recibidas por el jugador en el partido.
- `tarjetasRojas`: Número de tarjetas rojas recibidas por el jugador en el partido.

#### Clase **Entrenamiento**

- `id`: Identificador único del entrenamiento.
- `equipo`: Equipo que realiza el entrenamiento.
- `fecha`: Fecha del entrenamiento.
- `hora`: Hora del entrenamiento.
- `lugar`: Lugar donde se realiza el entrenamiento.
- `actividades`: Lista de actividades realizadas durante el entrenamiento.
- `jugadoresConvocados`: Lista de jugadores convocados para el entrenamiento.

#### Clase **Actividad**

- `id`: Identificador único de la actividad.
- `descripcion`: Descripción de la actividad.
- `duracion`: Duración de la actividad.

#### Clase **Transferencia**

- `id`: Identificador único de la transferencia.
- `jugador`: Jugador transferido.
- `equipoOrigen`: Equipo del cual proviene el jugador.
- `equipoDestino`: Equipo al cual se transfiere el jugador.
- `monto`: Monto de la transferencia.
- `fecha`: Fecha de la transferencia.

#### Clase **Usuario**

- `id`: Identificador único del usuario.
- `nombre`: Nombre del usuario.
- `email`: Correo electrónico del usuario.
- `password`: Contraseña del usuario.
- `rol`: Rol del usuario (por ejemplo, administrador, entrenador, etc.).

#### Clase **Rol**

- `id`: Identificador único del rol.
- `nombre`: Nombre del rol.
- `permisos`: Lista de permisos asociados al rol.

#### Clase **Permiso**

- `id`: Identificador único del permiso.
- `descripcion`: Descripción del permiso.

#### Clase **Patrocinador**

- `id`: Identificador único del patrocinador.
- `nombre`: Nombre del patrocinador.
- `tipo`: Tipo de patrocinio (por ejemplo, principal, secundario, etc.).
- `monto`: Monto del patrocinio.
- `fechaInicio`: Fecha de inicio del patrocinio.
- `fechaFin`: Fecha de finalización del patrocinio.

#### Clase **Comunicacion**

- `id`: Identificador único de la comunicación.
- `titulo`: Título de la comunicación.
- `contenido`: Contenido de la comunicación.
- `fechaPublicacion`: Fecha de publicación de la comunicación.
- `destinatarios`: Lista de usuarios destinatarios de la comunicación.

#### Clase **Entrada**

- `id`: Identificador único de la entrada.
- `partido`: Partido para el cual es la entrada.
- `comprador`: Usuario que compró la entrada.
- `fechaCompra`: Fecha de compra de la entrada.
- `cantidad`: Cantidad de entradas compradas.
- `precioTotal`: Precio total de la compra.
- `ubicacion`: Ubicación de los asientos en el estadio.

#### Clase **Estadio**

- `id`: Identificador único del estadio.
- `nombre`: Nombre del estadio.
- `ubicacion`: Ubicación del estadio.
- `capacidad`: Capacidad del estadio.

### Casos de Uso Principales:

#### 1. Gestión de Equipos

**Actor:** Administrador de la Liga
**Descripción:** El administrador puede agregar, editar y eliminar equipos de la liga.
**Precondiciones:** El administrador debe estar autenticado.
**Flujo Principal:**

1. El administrador accede al módulo de gestión de equipos.
2. El administrador selecciona la opción de agregar equipo.
3. El administrador ingresa la información del equipo (nombre, estadio, ciudad, etc.).
4. El sistema guarda la información del equipo.
5. El administrador puede editar o eliminar equipos existentes.

#### 2. Gestión de Jugadores

**Actor:** Administrador de la Liga, Equipo Técnico
**Descripción:** Permite registrar, editar y eliminar jugadores de los equipos.
**Precondiciones:** El actor debe estar autenticado.
**Flujo Principal:**

1. El actor accede al módulo de gestión de jugadores.
2. El actor selecciona la opción de agregar jugador.
3. El actor ingresa la información del jugador (nombre, edad, posición, etc.).
4. El sistema guarda la información del jugador.
5. El actor puede editar o eliminar jugadores existentes.

#### 3. Programación de Partidos

**Actor:** Administrador de la Liga
**Descripción:** Permite programar las fechas y horarios de los partidos.
**Precondiciones:** El administrador debe estar autenticado.
**Flujo Principal:**

1. El administrador accede al módulo de programación de partidos.
2. El administrador selecciona la opción de agregar partido.
3. El administrador selecciona los equipos participantes, la fecha, la hora y el estadio.
4. El sistema guarda la programación del partido.
5. El administrador puede editar o eliminar partidos programados.

#### 4. Registro de Resultados

**Actor:** Árbitro, Administrador de la Liga
**Descripción:** Permite registrar los resultados de los partidos.
**Precondiciones:** El actor debe estar autenticado.
**Flujo Principal:**

1. El actor accede al módulo de registro de resultados.
2. El actor selecciona el partido correspondiente.
3. El actor ingresa el resultado del partido (goles, tarjetas, etc.).
4. El sistema guarda los resultados.
5. El actor puede editar los resultados si es necesario.

#### 5. Visualización de Estadísticas

**Actor:** Aficionado, Periodista, Equipo Técnico
**Descripción:** Permite visualizar estadísticas de jugadores, equipos y partidos.
**Precondiciones:** El usuario debe estar autenticado (para ciertos datos).
**Flujo Principal:**

1. El usuario accede al módulo de estadísticas.
2. El usuario selecciona el tipo de estadísticas que desea visualizar (por jugador, equipo, temporada).
3. El sistema muestra las estadísticas solicitadas.
4. El usuario puede filtrar y ordenar las estadísticas según diferentes criterios.

#### 6. Gestión de Noticias y Comunicados

**Actor:** Administrador de la Liga, Periodista
**Descripción:** Permite publicar y gestionar noticias y comunicados sobre la liga.
**Precondiciones:** El actor debe estar autenticado.
**Flujo Principal:**

1. El actor accede al módulo de noticias.
2. El actor selecciona la opción de agregar noticia/comunicado.
3. El actor ingresa el contenido de la noticia/comunicado.
4. El sistema publica la noticia/comunicado.
5. El actor puede editar o eliminar noticias/comunicados publicados.

#### 7. Gestión de Entrenadores

**Actor:** Administrador de la Liga, Equipo Técnico
**Descripción:** Permite registrar, editar y eliminar entrenadores de los equipos.
**Precondiciones:** El actor debe estar autenticado.
**Flujo Principal:**

1. El actor accede al módulo de gestión de entrenadores.
2. El actor selecciona la opción de agregar entrenador.
3. El actor ingresa la información del entrenador (nombre, experiencia, etc.).
4. El sistema guarda la información del entrenador.
5. El actor puede editar o eliminar entrenadores existentes.

#### 8. Gestión de Árbitros

**Actor:** Administrador de la Liga
**Descripción:** Permite registrar, editar y eliminar árbitros para los partidos.
**Precondiciones:** El administrador debe estar autenticado.
**Flujo Principal:**

1. El administrador accede al módulo de gestión de árbitros.
2. El administrador selecciona la opción de agregar árbitro.
3. El administrador ingresa la información del árbitro (nombre, experiencia, etc.).
4. El sistema guarda la información del árbitro.
5. El administrador puede editar o eliminar árbitros existentes.

#### 9. Gestión de Estadios

**Actor:** Administrador de la Liga
**Descripción:** Permite registrar, editar y eliminar estadios donde se jugarán los partidos.
**Precondiciones:** El administrador debe estar autenticado.
**Flujo Principal:**

1. El administrador accede al módulo de gestión de estadios.
2. El administrador selecciona la opción de agregar estadio.
3. El administrador ingresa la información del estadio (nombre, capacidad, ubicación, etc.).
4. El sistema guarda la información del estadio.
5. El administrador puede editar o eliminar estadios existentes.

#### 10. Venta de Entradas

**Actor:** Aficionado
**Descripción:** Permite a los aficionados comprar entradas para los partidos.
**Precondiciones:** El aficionado debe estar registrado.
**Flujo Principal:**

1. El aficionado accede al módulo de venta de entradas.
2. El aficionado selecciona el partido al que desea asistir.
3. El aficionado selecciona la cantidad de entradas y la ubicación en el estadio.
4. El aficionado realiza el pago.
5. El sistema confirma la compra y emite las entradas electrónicas.

#### 11. Gestión de Patrocinios

**Actor:** Administrador de la Liga
**Descripción:** Permite registrar, editar y eliminar patrocinios de la liga y equipos.
**Precondiciones:** El administrador debe estar autenticado.
**Flujo Principal:**

1. El administrador accede al módulo de gestión de patrocinios.
2. El administrador selecciona la opción de agregar patrocinio.
3. El administrador ingresa la información del patrocinio (empresa, monto, duración, etc.).
4. El sistema guarda la información del patrocinio.
5. El administrador puede editar o eliminar patrocinios existentes.

#### 12. Generación de Informes

**Actor:** Administrador de la Liga, Equipo Técnico
**Descripción:** Permite generar informes detallados sobre diferentes aspectos de la liga, como rendimiento de equipos, asistencia a partidos, etc.
**Precondiciones:** El actor debe estar autenticado.
**Flujo Principal:**

1. El actor accede al módulo de generación de informes.
2. El actor selecciona el tipo de informe que desea generar.
3. El sistema recopila la información necesaria y genera el informe.
4. El sistema muestra el informe generado al actor.
5. El actor puede descargar o imprimir el informe.

#### 13. Gestión de Incidentes y Sanciones

**Actor:** Árbitro, Administrador de la Liga
**Descripción:** Permite registrar incidentes ocurridos durante los partidos y aplicar sanciones correspondientes.
**Precondiciones:** El actor debe estar autenticado.
**Flujo Principal:**

1. El actor accede al módulo de gestión de incidentes.
2. El actor selecciona el partido y registra el incidente (tarjetas rojas, comportamientos antideportivos, etc.).
3. El sistema guarda el incidente.
4. El administrador puede revisar los incidentes y aplicar sanciones correspondientes.
5. El sistema notifica las sanciones a los equipos y jugadores involucrados.

#### 14. Consulta de Calendario de Partidos

**Actor:** Aficionado, Periodista, Equipo Técnico
**Descripción:** Permite consultar el calendario de partidos programados en la liga.
**Precondiciones:** Ninguna, aunque algunos datos pueden requerir autenticación.
**Flujo Principal:**

1. El usuario accede al módulo de calendario de partidos.
2. El usuario selecciona la temporada o el rango de fechas que desea consultar.
3. El sistema muestra el calendario de partidos.
4. El usuario puede filtrar los partidos por equipo, estadio, etc.

#### 15. Gestión de Medios de Comunicación

**Actor:** Administrador de la Liga, Periodista
**Descripción:** Permite gestionar las acreditaciones y accesos para medios de comunicación.
**Precondiciones:** El actor debe estar autenticado.
**Flujo Principal:**

1. El actor accede al módulo de gestión de medios.
2. El actor selecciona la opción de agregar medio de comunicación.
3. El actor ingresa la información del medio (nombre, tipo de medio, periodistas acreditados, etc.).
4. El sistema guarda la información del medio.
5. El actor puede editar o eliminar medios de comunicación acreditados.

#### 16. Gestión de Lesiones de Jugadores

**Actor:** Equipo Técnico, Médico del Equipo
**Descripción:** Permite registrar, editar y eliminar información sobre las lesiones de los jugadores.
**Precondiciones:** El actor debe estar autenticado.
**Flujo Principal:**

1. El actor accede al módulo de gestión de lesiones.
2. El actor selecciona la opción de agregar lesión.
3. El actor ingresa la información de la lesión (jugador, tipo de lesión, gravedad, tiempo de recuperación, etc.).
4. El sistema guarda la información de la lesión.
5. El actor puede editar o eliminar registros de lesiones.

#### 17. Gestión de Entrenamientos

**Actor:** Equipo Técnico
**Descripción:** Permite planificar y registrar las sesiones de entrenamiento de los equipos.
**Precondiciones:** El actor debe estar autenticado.
**Flujo Principal:**

1. El equipo técnico accede al módulo de gestión de entrenamientos.
2. El equipo técnico selecciona la opción de agregar sesión de entrenamiento.
3. El equipo técnico ingresa la información de la sesión (fecha, hora, lugar, actividades, jugadores convocados, etc.).
4. El sistema guarda la información de la sesión.
5. El equipo técnico puede editar o eliminar sesiones de entrenamiento.

#### 18. Seguimiento de Rendimiento de Jugadores

**Actor:** Equipo Técnico
**Descripción:** Permite registrar y consultar el rendimiento de los jugadores durante la temporada.
**Precondiciones:** El actor debe estar autenticado.
**Flujo Principal:**

1. El equipo técnico accede al módulo de seguimiento de rendimiento.
2. El equipo técnico selecciona al jugador a evaluar.
3. El equipo técnico ingresa datos de rendimiento (partidos jugados, minutos jugados, goles, asistencias, etc.).
4. El sistema guarda la información de rendimiento.
5. El equipo técnico puede consultar y analizar el rendimiento de los jugadores.

#### 19. Gestión de Transferencias de Jugadores

**Actor:** Administrador de la Liga, Equipo Técnico
**Descripción:** Permite registrar y gestionar las transferencias de jugadores entre equipos.
**Precondiciones:** El actor debe estar autenticado.
**Flujo Principal:**

1. El actor accede al módulo de gestión de transferencias.
2. El actor selecciona la opción de agregar transferencia.
3. El actor ingresa la información de la transferencia (jugador, equipo de origen, equipo de destino, monto de la transferencia, fecha, etc.).
4. El sistema guarda la información de la transferencia.
5. El actor puede editar o eliminar transferencias registradas.

#### 20. Gestión de Equipamiento

**Actor:** Administrador de la Liga, Equipo Técnico
**Descripción:** Permite gestionar el equipamiento de los equipos, como uniformes y otros materiales deportivos.
**Precondiciones:** El actor debe estar autenticado.
**Flujo Principal:**

1. El actor accede al módulo de gestión de equipamiento.
2. El actor selecciona la opción de agregar equipamiento.
3. El actor ingresa la información del equipamiento (tipo, cantidad, equipo asociado, fecha de adquisición, etc.).
4. El sistema guarda la información del equipamiento.
5. El actor puede editar o eliminar registros de equipamiento.

#### 21. Gestión de Convocatorias de Jugadores

**Actor:** Equipo Técnico
**Descripción:** Permite gestionar las convocatorias de jugadores para partidos y torneos.
**Precondiciones:** El actor debe estar autenticado.
**Flujo Principal:**

1. El equipo técnico accede al módulo de gestión de convocatorias.
2. El equipo técnico selecciona la opción de agregar convocatoria.
3. El equipo técnico ingresa la información de la convocatoria (partido o torneo, lista de jugadores convocados, fecha, etc.).
4. El sistema guarda la información de la convocatoria.
5. El equipo técnico puede editar o eliminar convocatorias registradas.

#### 22. Gestión de Premios y Reconocimientos

**Actor:** Administrador de la Liga
**Descripción:** Permite registrar y gestionar premios y reconocimientos otorgados a equipos y jugadores.
**Precondiciones:** El administrador debe estar autenticado.
**Flujo Principal:**

1. El administrador accede al módulo de gestión de premios.
2. El administrador selecciona la opción de agregar premio/reconocimiento.
3. El administrador ingresa la información del premio (nombre, descripción, criterios, destinatarios, fecha, etc.).
4. El sistema guarda la información del premio.
5. El administrador puede editar o eliminar premios/reconocimientos registrados.

#### 23. Gestión de Usuarios y Roles

**Actor:** Administrador de la Liga
**Descripción:** Permite gestionar los usuarios del sistema y asignarles roles y permisos.
**Precondiciones:** El administrador debe estar autenticado.
**Flujo Principal:**

1. El administrador accede al módulo de gestión de usuarios.
2. El administrador selecciona la opción de agregar usuario.
3. El administrador ingresa la información del usuario (nombre, correo electrónico, rol, permisos, etc.).
4. El sistema guarda la información del usuario.
5. El administrador puede editar o eliminar usuarios y sus roles/permisos.

#### 24. Gestión de Patrocinadores y Publicidad

**Actor:** Administrador de la Liga
**Descripción:** Permite gestionar los patrocinadores y contratos de publicidad de la liga y equipos.
**Precondiciones:** El administrador debe estar autenticado.
**Flujo Principal:**

1. El administrador accede al módulo de gestión de patrocinadores.
2. El administrador selecciona la opción de agregar patrocinador.
3. El administrador ingresa la información del patrocinador (nombre, tipo de patrocinio, monto, duración del contrato, etc.).
4. El sistema guarda la información del patrocinador.
5. El administrador puede editar o eliminar patrocinadores y contratos de publicidad.

#### 25. Gestión de Relaciones Públicas

**Actor:** Administrador de la Liga, Periodista
**Descripción:** Permite gestionar las relaciones públicas y comunicaciones oficiales de la liga.
**Precondiciones:** El actor debe estar autenticado.
**Flujo Principal:**

1. El actor accede al módulo de relaciones públicas.
2. El actor selecciona la opción de agregar comunicado.
3. El actor ingresa la información del comunicado (título, contenido, destinatarios, fecha de publicación, etc.).
4. El sistema guarda la información del comunicado.
5. El actor puede editar o eliminar comunicados registrados.

### Relaciones Entre Clases

- **Equipo** tiene una lista de **Jugadores** y **Partidos**.
- **Jugador** está relacionado con **Equipo**, **Lesion**, **Rendimiento**, **Gol**, y **Tarjeta**.
- **Partido** tiene relaciones con **Equipo** (Local y Visitante), **Gol**, **Tarjeta**, **Incidente**, y **Resultado**.
- **Gol**, **Tarjeta**, e **Incidente** están relacionados con **Jugador** y **Partido**.
- **Resultado** está relacionado con **Partido**.
- **Lesion** está relacionada con **Jugador**.
- **Rendimiento** está relacionado con **Jugador** y **Partido**.
- **Entrenamiento** tiene relaciones con **Equipo**, **Actividad**, y **Jugador**.
- **Actividad** está relacionada con **Entrenamiento**.
- **Transferencia** está relacionada con **Jugador**, **Equipo** (Origen y Destino).
- **Usuario** está relacionado con **Rol**.
- **Rol** tiene una lista de **Permisos** y **Usuarios**.
- **Permiso** está relacionado con **Rol**.
- **Patrocinador** está relacionado con **Equipo** y **Liga**.
- **Comunicacion** tiene destinatarios de tipo **Usuario**.
- **Entrada** está relacionada con **Partido** y **Usuario**.
- **Estadio** tiene una lista de **Partidos**.


# ___________________________________________________________________________________________________

# Documentacion LigaBetPlay

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

# ___________________________________________________________________________________________________

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

# ___________________________________________________________________________________________________

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


# ______________________________________________________________________________________________

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

# ______________________________________________________________________________________________

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

> **Modulo:** arbitro
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
# TASKT TRACKER

Se puede ejecutar con CLI (interfaz de la línea de comandos).

## Requisitos

Es necesario tener instalado **node.js** en el sistema para poder utilizar los comandos
## Uso de Comandos
## Agregar tareas

Lo necesario para agregar tareas es usar el comando add seguido entre comillas "El nombre de la tarea"

`node index.js add "Nombre de la tarea"`

## Actualizar Tarea

Para ello es necesario pasa los siguientes parámetros en la orden, después del comando
**update** va el ID que es el número de ID de la tarea seguido entre comillas "El nuevo nombre de la tarea"


`node index.js update 1 "Nombre de la tarea"`

## Borrar Tarea
Para eliminar un tarea usamos el comando **delete** seguido de la ID (número de identificación de la tarea).


`node index.js delete 1`

## Marca una tarea como "in progress" o "done"
Para realizarlo es necesario es usar los siguientes comando si deseas marca la tarea como "in progress" usa el comando `mark-in-progress` seguido del ID de la tarea y si lo que quieres es marca la tarea como "done" usa el comando `mark-done` seguido del ID de la tarea.

* IN PROGRESS
    * `node index.js mark-in-progress 1`
* DONE  
    * `node index.js mark-done 1`


## Listar Tareas

### Listar todas las tareas

Para ello hacemos uso del comando list

`node index.js list`

### Listar tareas por su estado

* #### Estado "DONE"
    * Hacemos uso del comando list seguido del estado "done"
    * `node index.js list done`
* #### Estado "TODO"
    * Hacemos uso del comando list seguido del estado "todo"
    * `node index.js list todo`
* #### Estado "IN-PROGRESS"
    * Hacemos uso del comando list seguido del estado "in-progress"
    * `node index.js list in-progress
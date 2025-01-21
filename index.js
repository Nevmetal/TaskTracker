const fs = require("fs");
const filePath = "./tasks.json";

//Funcion para leer las tareas
function readTasks() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]"); //Creacion de archivo en caso de que no exista
  }
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data.trim() ? JSON.parse(data) : []; // Manejar archivo vacío
  } catch (error) {
    console.error("Error al leer tasks.json:", error);
    return []; // Retornar array vacío en caso de error
  }
}

//Funcion pra escribir la tareas en el JSON
function writeTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}
// Captura de argumentos de la CLI
const args = process.argv.slice(2);
const command = args[0];

console.log(`Comando recibido: ${command}`);
//Funcion para agregar tareas
function addTask(description) {
  const tasks = readTasks();
  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    description,
    status: "todo",
    createdAt: new Date().toDateString(),
    updateAt: new Date().toDateString(),
  };
  tasks.push(newTask);
  writeTasks(tasks);
  console.log(
    `Tarea agregada exitosamente (ID: ${newTask.id} , Descripcion: ${newTask.description}) `
  );
}

if (command === "add" && args[1]) {
  addTask(args[1]);
}

function listTasks(status = null) {
  const tasks = readTasks();
  let filteredTasks = tasks;
  if (status) filteredTasks = tasks.filter((task) => task.status === status);
  console.table(filteredTasks);
}

if (command === "list") {
  listTasks(args[1]); // Puede ser "done", "todo" o "in-progress"
}

//Funcion para actualizar tareas
function updateTask(taskId, newDescription) {
  const tasks = readTasks();
  const taskToUpdate = tasks.find((task) => task.id === parseInt(taskId));
  if (taskToUpdate) {
    taskToUpdate.description = newDescription;
    taskToUpdate.updateAt = new Date().toDateString();
    writeTasks(tasks);
    console.log(
      `Tarea actualizada exitosamente (ID: ${taskToUpdate.id} , Descripcion: ${taskToUpdate.description}) `
    );
  } else {
    console.log(`No se encontró la tarea con ID ${taskId}`);
  }
}

if (command === "update" && args[1] && args[2]) {
  updateTask(args[1], args[2]);
}

//Acuatilas Estado
function updateTaskStatus(taskId, newStatus) {
  const tasks = readTasks();
  const taskToUpdate = tasks.find((task) => task.id === parseInt(taskId));
  if (taskToUpdate) {
    taskToUpdate.status = newStatus;
    taskToUpdate.updateAt = new Date().toDateString();
    writeTasks(tasks);
    console.log(
      `Tarea actualizada exitosamente (ID: ${taskToUpdate.id} , Descripcion: ${taskToUpdate.description}) `
    );
  } else {
    console.log(`No se encontró la tarea con ID ${taskId}`);
  }
}

if (command === "mark-in-progress" && args[1]) {
  updateTaskStatus(args[1], "in-progress");
}

if (command === "mark-done" && args[1]) {
  updateTaskStatus(args[1], "done");
}

//Funcion para borrar tareas
function deleteTask(taskId) {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(taskId));
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    writeTasks(tasks);
    console.log(`Tarea eliminada exitosamente (ID: ${taskId})`);
  } else {
    console.log(`No se encontró la tarea con ID ${taskId}`);
  }
}
if (command === "delete" && args[1]) {
  deleteTask(args[1]);
}
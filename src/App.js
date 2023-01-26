
import { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import Container from "./Components/Container";
import Header from "./Components/Header";
import InputTask from "./Components/InputTask";
import TaskContent from "./Components/TaskContent";

function App() {

  //pasar las tareas a localstorage
  let initialTasks= JSON.parse(localStorage.getItem("tasks"));

  if (!initialTasks) {
    initialTasks = []; 
  }

  const [ tasks, setTasks ] = useState(initialTasks);

  useEffect(() => { //comprobar si el initialstate a cambiado
  
    if(initialTasks) { //vamos a acuatualizar el valor de "tasks" con lo que tengamos en las tareas 
      localStorage.setItem("tasks", JSON.stringify(tasks)); 
    } else  {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  }, [initialTasks, tasks]);
  
   
  const createTask = (task) => {
    setTasks([...tasks, task]);
  };
// funcion para eliminar las tareas creadas
  const deleteTask = (id) => {
    const currentTask = tasks.filter((task) => task.idTask !==id);
    setTasks(currentTask);
  }
  
  return (
  <Container>  
    <Header/>
    <InputTask createTask={createTask}/>
    <TaskContent tasks={tasks} deleteTask={deleteTask} />
  </Container>
  );
}

export default App;

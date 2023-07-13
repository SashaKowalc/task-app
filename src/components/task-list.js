import React, { useState }  from "react";
import TaskForm from "./form";
import '../styles/task-list.css';
import Task from './task';

function TaskList() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if(task.text.trim()) {
      task.text = task.text.trim();
      const tasksUpdated = [task, ...tasks];
      setTasks(tasksUpdated);
    }
  }

  const deleteTask = id => {
    const tasksUpdated = tasks.filter(task => task.id !== id);
    setTasks(tasksUpdated);
  }

  const completedTask = id => {
    const tasksUpdated = tasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(tasksUpdated);
  }

  return(
    <>
      <TaskForm onSubmit={addTask}/>
      <div className="task-list-container">
        {
          tasks.map((task) => 
            <Task 
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed} 
              deleteTask={deleteTask}
              completedTask={completedTask} />
          )
        }
      </div>
    </>
  );
}

export default TaskList;
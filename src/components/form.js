import React, { useState } from "react";
import '../styles/form.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

  const [input, setInput] = useState('');

  const changeForm = e => {
    setInput(e.target.value);
  }

  const sendForm = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(newTask);
  }

  return(
    <form 
    className="task-form"
    onSubmit={sendForm}>
      <input 
        className="task-input"
        type="text"
        placeholder="Ingrese una nueva tarea"
        name="text"
        onChange={changeForm}
      />
      <button className="task-button">
        Agregar tarea
      </button>
    </form>
  );
}

export default TaskForm;
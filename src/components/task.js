import React from "react";
import '../styles/task.css';
import { AiOutlineDelete } from "react-icons/ai";

function Task({ id, text, completed, completedTask, deleteTask }) {
    return (
        <div className= { completed ? 'task-container completed' : 'task-container' }>
            <div 
            className="task-text"
            onClick={() => completedTask(id)}>
                {text}
            </div>
            <div 
            className="task-container-icons"
            onClick={() => deleteTask(id)}>
                <AiOutlineDelete className="task-icon" />
            </div>
        </div>
    );
}

export default Task;
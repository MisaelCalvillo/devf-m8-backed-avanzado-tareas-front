import React from 'react';
import { Trash2 } from 'react-feather';
import './Task.css';

function Task({ text, onDelete }) {
  return (
    <div className="task">
      <div className="task__text">
        <p>{text}</p>
      </div>
      <div onClick={onDelete} className="task__delete">
        <Trash2 />
      </div>
    </div> 
  )
}

export default Task;

// src/components/TaskItem.js
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';

export default function TaskItem({ task }) {
  const { removeTask } = useContext(TaskContext);
  const navigate = useNavigate();

  return (
    <li className="task-item">
      <span>{task.title}</span>
      <div>
        <button className="edit-btn" onClick={() => navigate(`/edit-task/${task.id}`)}>Editar</button>
        <button className="delete-btn" onClick={() => removeTask(task.id)}>Excluir</button>
      </div>
    </li>
  );
}


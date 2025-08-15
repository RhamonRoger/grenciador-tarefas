// src/pages/EditTask.js
import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditTask() {
  const { tasks, editTask } = useContext(TaskContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const taskToEdit = tasks.find(t => t.id === Number(id));
  const [title, setTitle] = useState(taskToEdit ? taskToEdit.title : '');

  useEffect(() => {
    if (!taskToEdit) navigate('/'); // se não achar, volta pra home
  }, [taskToEdit, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    editTask({ ...taskToEdit, title });
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Editar Tarefa</h1>
      <form onSubmit={handleSubmit} className="task-form">
        <input 
          type="text" 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          placeholder="Título da tarefa"
        />
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}

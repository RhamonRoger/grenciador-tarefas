// src/pages/AddTask.js
import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';

export default function AddTask() {
  const [title, setTitle] = useState('');
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate(); // substitui useHistory

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({ id: Date.now(), title });
    navigate("/"); // volta para home
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Adicionar Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Título da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
        />
        <button type="submit" style={{ marginLeft: "10px" }}>Salvar</button>
      </form>
    </div>
  );
}

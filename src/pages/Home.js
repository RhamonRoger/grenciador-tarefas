// src/pages/Home.js
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';
import TaskItem from '../components/TaskItem';

export default function Home() {
  const { tasks } = useContext(TaskContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Minhas Tarefas</h1>
      <Link to="/add-task">Adicionar Nova</Link>
      <ul>
        {tasks.length === 0 ? (
          <p>Nenhuma tarefa cadastrada</p>
        ) : (
          tasks.map(task => <TaskItem key={task.id} task={task} />)
        )}
      </ul>
    </div>
  );
}


// src/context/TaskContext.js
import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const removeTask = (id) => setTasks(tasks.filter(t => t.id !== id));
  const editTask = (updated) => setTasks(tasks.map(t => t.id === updated.id ? updated : t));

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};

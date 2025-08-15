
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';

export default function App() {
  return (
    <Router>
      <TaskProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/edit-task/:id" element={<EditTask />} />
        </Routes>
      </TaskProvider>
    </Router>
  );
}

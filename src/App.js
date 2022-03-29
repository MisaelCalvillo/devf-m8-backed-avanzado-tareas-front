import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import TaskList from './scenes/TaskList/TaskList';
import AuthView from './scenes/AuthView/AuthView';
import './App.css';

function App() {
  const [token, setToken] = useState(null);

  console.log({ token });

  return (
    <div className="app">
      <header className="app-header">
        <Routes>
          <Route path="/" element={<TaskList token={token} />} />
          <Route path="/auth" element={<AuthView  setToken={setToken} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

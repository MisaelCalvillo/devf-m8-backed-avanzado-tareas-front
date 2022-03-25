import React, { useState } from 'react';
import TaskList from './scenes/TaskList/TaskList';
import AuthView from './scenes/AuthView/AuthView';
import './App.css';

function App() {
  const [token, setToken] = useState(null);

  console.log({ token });

  return (
    <div className="app">
      <header className="app-header">
        {token ? <TaskList token={token} /> : <AuthView  setToken={setToken} />}
      </header>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import TaskList from './scenes/TaskList/TaskList';
import AuthView from './scenes/AuthView/AuthView';
import './App.css';

function App() {
  const [ isUser, setIsUser ] = useState(false);

  return (
    <div className="app">
      <header className="app-header">
        {isUser ? <TaskList /> : <AuthView />}
      </header>
    </div>
  );
}

export default App;

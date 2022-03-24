import React from 'react';
import TaskList from './scenes/TaskList';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <TaskList />
      </header>
    </div>
  );
}

export default App;

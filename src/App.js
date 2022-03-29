import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import TaskList from './scenes/TaskList/TaskList';
import AuthView from './scenes/AuthView/AuthView';
import './App.css';

import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [token, setToken] = useState(null);

  console.log({ token });

  return (
    <div className="app">
      <header className="app-header">
        <Routes>
          <Route path="/" element={<TaskList token={token} />} />
          <Route path="auth" element={<AuthView  setToken={setToken} />}>
            <Route index element={<Login setToken={setToken}/>} />
            <Route path="login" element={<Login setToken={setToken}/>} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;

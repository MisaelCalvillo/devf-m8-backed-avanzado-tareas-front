import React, { useState } from 'react';

import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import { login } from '../../api';

import './AuthView.css';

function AuthView({ setToken }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const makeLogin = () => {
    console.log('Make login')
    login(email, password)
    .then((res) => {
      const user = res.data;
      setToken(user.token);
    }) 
    .catch((err) => {
      console.error(err);
    })
  
  }

  return (
    <div className='auth-view'>
      <div className='auth-view__input-container'>
        <TextInput 
          value={email} 
          type="email" 
          placeholder="Ingresa tu correo" 
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput 
          value={password} 
          type="password" 
          placeholder="Ingresa tu contraseña" 
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button onClick={makeLogin}>Iniciar Sesión</Button>
    </div>
  )
}

export default AuthView;

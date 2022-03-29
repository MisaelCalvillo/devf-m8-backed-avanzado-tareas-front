import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

import { signUp } from '../../api';

function Login({ setToken }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const makeSignUp = () => {
    signUp({ name, email, password })
    .then((res) => {
      const user = res.data;
      navigate('/auth/login');
    })
    .catch((err) => {
      console.error(err);
    })
  }
  
  return (
    <div>
      <h2 style={{ color: 'white' }}>Registro ✏️</h2>
      <div className='auth-view__input-container'>
        <TextInput 
          value={name} 
          type="text" 
          placeholder="Ingresa tu nombre" 
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
        />
        <TextInput 
          value={email} 
          type="email" 
          placeholder="Ingresa tu correo" 
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
        <TextInput 
          value={password} 
          type="password" 
          placeholder="Ingresa tu contraseña" 
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
      </div>
      <Button onClick={makeSignUp}>Registrarme</Button>
      <Link style={{ color: 'white'}} to="/auth/login">Ya tiene cuenta? Inicia sesión</Link>
    </div>
  )
}

export default Login;

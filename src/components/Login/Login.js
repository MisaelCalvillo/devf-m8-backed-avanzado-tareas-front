import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

import { login } from '../../api';

function Login({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const makeLogin = () => {
    console.log('Make login')
    login(email, password)
    .then((res) => {
      const user = res.data;
      setToken(user.token);
      navigate('/');
    }) 
    .catch((err) => {
      console.error(err);
    })
  }
  
  return (
    <div>
      <h2 style={{ color: 'white' }}>Iniciar sesión por favor... 🦄</h2>
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
      <Link style={{ color: 'white'}} to="/auth/signup">No tienes cuenta? Registrate aquí</Link>
    </div>
  )
}

export default Login;

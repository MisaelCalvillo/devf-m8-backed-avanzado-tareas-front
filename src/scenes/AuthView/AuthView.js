import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import './AuthView.css';

function AuthView({ setToken }) {
  return (
    <div className='auth-view'>
      <Outlet />
    </div>
  )
}

export default AuthView;

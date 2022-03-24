import React from 'react';
import './Button.css';

function Button(props) {
  const { className, children, onClick } = props;
  return (
    <button 
      className={`btn ${className}`}
      onClick={onClick} 
    >
      {children}
    </button>
  )
}

export default Button;

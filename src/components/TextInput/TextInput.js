import React from 'react';
import './TextInput.css';

function TextInput({ className, value, placeholder, onChange, type, autoComplete }) {
  return (
      <input
        type={type}
        className={`text-input ${className}`}
        value={value}
        placeholder={placeholder}
        onChange={onChange} 
        autoComplete={autoComplete}   
      />
  )
}

export default TextInput;

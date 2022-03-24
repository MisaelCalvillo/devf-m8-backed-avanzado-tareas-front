import React from 'react';
import './TextInput.css';

function TextInput({ className, value, placeholder, onChange, type }) {
  return (
      <input
        type={type}
        className={`text-input ${className}`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}    
      />
  )
}

export default TextInput;

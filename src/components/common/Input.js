import React from "react";

const Input = ({ label, placeholder, type, name, value, handleChange }) => {
  return (
    <div className="form-group" style={{ marginBottom: '40px'}}>
      <label htmlFor={label} style={{ cursor: 'pointer' }}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={label}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;

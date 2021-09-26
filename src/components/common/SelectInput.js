import React from "react";

const SelectInput = ({label, value, handleChange, name, options}) => {
  return (
    <div className="form-group" style={{ marginBottom: '40px'}}>
      <label htmlFor="input">{label}</label>
      <select
        className="custom-select form-control"
        id="input"
        value={value}
        name={name}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;

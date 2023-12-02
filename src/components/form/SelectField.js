import React from 'react';
import '../../styles/components.css';

const SelectField = ({ label, name, value, onChange, options }) => {
    return (
        <div className="select-field">
            {label && <label htmlFor={name}>{label}</label>}
            <select name={name} value={value} onChange={onChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;

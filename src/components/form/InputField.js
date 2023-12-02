import React from 'react';
import '../../styles/components.css';

const InputField = ({ label, type, name, value, onChange, placeholder }) => {
    return (
        <div className="input-field">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputField;

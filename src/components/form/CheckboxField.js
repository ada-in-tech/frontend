import React from 'react';
import '../../styles/components.css';

const CheckboxField = ({ label, name, checked, onChange }) => {
    return (
        <div className="checkbox-field">
            <label>
                <input
                    type="checkbox"
                    name={name}
                    checked={checked}
                    onChange={onChange}
                />
                {label}
            </label>
        </div>
    );
};

export default CheckboxField;

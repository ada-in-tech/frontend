import React from 'react';

const Filter = ({ onChange, options }) => {
    return (
        <select onChange={(e) => onChange(e.target.value)} className="filter-select">
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Filter;

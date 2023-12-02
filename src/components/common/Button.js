import React from 'react';
import '../../styles/components.css';

const Button = ({ children, onClick, className = '', ...props }) => {
    return (
        <button className={`button ${className}`} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;

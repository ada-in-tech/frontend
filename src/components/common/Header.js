import React, { useState } from 'react';
import Navigation from './Navigation';
import { useUser } from '../../contexts/UserContext';
import '../../styles/components.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isSignedIn, userType } = useUser(); // Use the context

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <header className="header">
            <div className="logo">ADA IN TECH</div>
            <button className="hamburger" onClick={toggleMenu}>
                <span>☰</span>
            </button>
            <nav className={`navigation ${isMenuOpen ? 'expanded' : ''}`}>
                <Navigation userType={isSignedIn ? userType : 'guest'} />
            </nav>
        </header>
    );
};

export default Header;

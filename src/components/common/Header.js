import React from 'react';
import Navigation from './Navigation';
import { useUser } from '../../contexts/UserContext';
import '../../styles/components.css';

const Header = () => {
    const { isSignedIn, userType } = useUser(); // Use the context

    return (
        <header className="header">
            <div className="logo">ADA IN TECH</div>
            <nav className="navigation">
                <Navigation userType={isSignedIn ? userType : 'guest'} />
            </nav>
        </header>
    );
};

export default Header;

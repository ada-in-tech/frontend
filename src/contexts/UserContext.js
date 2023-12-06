import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userType, setUserType] = useState('guest');

    useEffect(() => {
        // Check for token and user data in local storage
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');

        if (storedToken && storedUser) {
            // If token and user data exist, initialize state with these values
            setUser(JSON.parse(storedUser));
            setUserType(JSON.parse(storedUser).role);
        }
    }, []);

    const login = (userData, token) => {
        console.log("Logging in with user data:", userData);
        setUser(userData);
        setUserType(userData.role);
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData)); // Store user data in local storage
    };

    const logout = () => {
        setUser(null);
        setUserType('guest');
        localStorage.removeItem('token');
        localStorage.removeItem('user'); // Clear user data from local storage
    };

    return (
        <UserContext.Provider value={{ user, userType, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userType, setUserType] = useState('guest');

    const login = (userData) => {
        setUser(userData);
        setUserType(userData.userRole);
        // Optionally, persist user data and userType to localStorage here
    };

    const logout = () => {
        setUser(null);
        setUserType('guest');
        // Optionally, clear persisted data from localStorage here
    };

    return (
        <UserContext.Provider value={{ user, userType, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};


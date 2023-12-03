import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userType, setUserType] = useState('guest');

    const login = (userData, token) => {
        console.log("Logging in with user data:", userData); // Debugging
        setUser(userData);
        setUserType(userData.role); // Use 'role' instead of 'userRole'
        localStorage.setItem('token', token); // Store the token in local storage
        // ...
    };

    const logout = () => {
        setUser(null);
        setUserType('guest');
        localStorage.removeItem('token'); // Clear the token from local storage
        // Optionally, clear persisted data from localStorage here
    };

    return (
        <UserContext.Provider value={{ user, userType, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

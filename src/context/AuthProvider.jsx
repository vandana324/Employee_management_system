import React, { createContext, useContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'; // Only get data from localStorage

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState({ employees: [], Admin: {} });

    useEffect(() => {
        const data = getLocalStorage();
setLocalStorage(data);
        // Fetch data from localStorage when the component mounts
        const { employees = [], Admin = {} } = getLocalStorage();
        setUserData({ employees, Admin });
    }, []);  // Empty dependency array ensures it runs only once after the component mounts

    return (
        <AuthContext.Provider value={{ userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to easily use context data
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;

import React, { useState, useContext, useEffect } from 'react';
import Login from './component/Auth/login';
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard';
import AdminDashBoard from './component/Dashboard/AdminDashBoard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null); // Track logged-in user state
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const { userData } = useContext(AuthContext); // Accessing AuthContext

  useEffect(() => {
    // Check localStorage for any previously logged-in user data
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setUser(loggedInUser.role); // Set the user role if they are logged in
      setLoggedInUserData(loggedInUser); // Set additional user data
    }
  }, []); // Runs only once when the component mounts

  const handleLogin = (email, password) => {
    console.log('User Data Inside handleLogin:', userData);

    if (email === 'admin@example.com' && password === '123') {
      setUser('Admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'Admin' }));
    } else if (userData?.employees) {
      const employee = userData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser('employees');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employees' }));
      } else {
        console.log('Invalid credentials');
      }
    }
  };

  return (
    <>

        
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'Admin' ? (
        <AdminDashBoard changeUser={setUser}/>
      ) : user === 'employees' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;

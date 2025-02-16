import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider';
// import AuthContext from './context/AuthContext.jsx'  // Updated
// import TaskContext from './context/TaskContext.jsx'  // Updated

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AuthContext>
      <TaskContext> */}
      <AuthProvider>
        <App />
        </AuthProvider>
        
        {/* </TaskContext>  
      </AuthContext> */}
    
  </StrictMode>,
);

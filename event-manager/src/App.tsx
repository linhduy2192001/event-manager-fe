import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from './Layouts/AuthLayout';
import DashboardLayout from './Layouts/DashboardLayout';
import MainLayout from './Layouts/MainLayout';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Auth Layout */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <div>Login Page</div>
            </AuthLayout>
          }
        />
        <Route
          path="/sign-up"
          element={
            <AuthLayout>
              <div>Sign Up Page</div>
            </AuthLayout>
          }
        />

        {/* Main Layout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <DashboardLayout>
                <div>Dashboard Content</div>
              </DashboardLayout>
            </MainLayout>
          }
        />
     
   
     
    
      </Routes>
    </Router>
  );
};

export default App;

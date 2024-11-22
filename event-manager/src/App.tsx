import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PersonalPage from "./pages/PersonalPage"; // Import PersonalPage
import DetailPersonal from "./pages/DetailPersonal"; // Import DetailPersonal
import ListEvent from "./pages/ListEvent";
import DetailEvent from "./pages/DetailEvent";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="new" element={<PersonalPage />} />
          <Route path="edit" element={<PersonalPage />} />
          <Route path="detailPersonal" element={<DetailPersonal/>} /> 
          {/* Route Detail */}
          <Route path="ListEvent" element={<ListEvent />}>
               <Route path="ListEvent/detailEvent" element={<DetailEvent/>} />
          </Route>
          
        </Route>

        {/* Authentication Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}></Route>
       
      </Routes>
    </Router>
  );
};

export default App;

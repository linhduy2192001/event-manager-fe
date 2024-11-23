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
import About from "./pages/About";
import TicketOnline from "./pages/TicketOnline";
import AddEvent from "./pages/AddEvent";
import SchedulePage from "./pages/SchedulePage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="new" element={<PersonalPage />} />
          <Route path="about" element={<About/>} />
          <Route path="edit" element={<PersonalPage />} />
          <Route path="schedule" element={<SchedulePage />} />

          <Route path="detailPersonal" element={<DetailPersonal/>} /> 
          <Route path="addevent" element={<AddEvent/>} /> 

          {/* Route Detail */}
          <Route path="events">
            <Route index element={<ListEvent />} />
            <Route path="event/:id" element={<DetailEvent />} />
            <Route path="event/:id/ticket" element={<TicketOnline />} />
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

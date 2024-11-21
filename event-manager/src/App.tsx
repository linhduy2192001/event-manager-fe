import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Import pages
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import EventDetailsPage from "./pages/EventDetailsPage";
import UserDashboardPage from "./pages/UserDashboardPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import SpeakerManagementPage from "./pages/SpeakerManagementPage";
import CheckInPage from "./pages/CheckInPage";
import SchedulePage from "./pages/SchedulePage";
import StatisticsPage from "./pages/StatisticsPage";
import ForumPage from "./pages/ForumPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="event/:id" element={<EventDetailsPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="forum" element={<ForumPage />} />
        </Route>

        {/* Authentication Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="user" element={<UserDashboardPage />} />
          <Route path="admin" element={<AdminDashboardPage />} />
          <Route path="speakers" element={<SpeakerManagementPage />} />
          <Route path="check-in" element={<CheckInPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

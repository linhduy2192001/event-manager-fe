import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside style={{ width: "250px", backgroundColor: "#f4f4f4", padding: "1rem" }}>
        <nav>
          <ul>
            <li><a href="/dashboard/user">User Dashboard</a></li>
            <li><a href="/dashboard/admin">Admin Dashboard</a></li>
            <li><a href="/dashboard/statistics">Statistics</a></li>
            <li><a href="/dashboard/speakers">Speakers</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flexGrow: 1, padding: "1rem" }}>
        <Outlet /> {/* Render nội dung trang */}
      </main>
    </div>
  );
};

export default DashboardLayout;

import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <nav>
          <h1>Event Management</h1>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/schedule">Schedule</a></li>
            <li><a href="/forum">Forum</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet /> {/* Render các trang con */}
      </main>

      {/* Footer */}
      <footer>
        <p>© 2024 Event Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;

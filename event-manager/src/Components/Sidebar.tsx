import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/reports">Reports</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">Event Manager</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <a href="/events">Events</a>
      </nav>
    </header>
  );
};

export default Header;

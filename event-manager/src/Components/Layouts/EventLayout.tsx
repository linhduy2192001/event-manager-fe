import React from 'react';

interface Props {
  children: React.ReactNode;
}

const EventLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="event-layout">
      <h1>Event Management</h1>
      <div className="event-content">{children}</div>
    </div>
  );
};

export default EventLayout;
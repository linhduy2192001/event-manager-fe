import React from 'react';

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <h1>Dashboard</h1>
      <div className="dashboard-content">{children}</div>
    </div>
  );
};

export default DashboardLayout;

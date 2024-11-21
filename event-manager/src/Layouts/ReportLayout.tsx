import React from 'react';

interface Props {
  children: React.ReactNode;
}

const ReportLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="report-layout">
      <h1>Reports</h1>
      <div className="report-content">{children}</div>
    </div>
  );
};

export default ReportLayout;

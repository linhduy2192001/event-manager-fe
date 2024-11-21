import React from 'react';
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

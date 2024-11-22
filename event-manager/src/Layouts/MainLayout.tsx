import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <Header pageTitle="Home" userEmail="kc80943@gmail.com" />

      {/* Nội dung chính */}
      <main
        style={{
          padding: "20px", // Padding nội dung
          backgroundColor: "#f9f9f9", // Nền nội dung
          minHeight: "calc(100vh - 250px)", // Đảm bảo nội dung không đè Header và Footer
        }}
      >
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;

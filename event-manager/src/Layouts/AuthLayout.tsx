import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", justifyContent: "center", alignItems: "center" }}>
      {/* Auth Content */}
      <div style={{ maxWidth: "400px", width: "100%" }}>
        <Outlet /> {/* Render trang đăng nhập hoặc đăng ký */}
      </div>
    </div>
  );
};

export default AuthLayout;

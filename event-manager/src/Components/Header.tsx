import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import "../styles/Header.css"
interface HeaderProps {
  pageTitle: string; // Tên trang hiện tại
  userEmail: string; // Email người dùng
}

const Header: React.FC<HeaderProps> = ({ pageTitle, userEmail }) => {
  return (
    <header
      style={{
        height: "125px", // Chiều cao của Header
        backgroundColor: "#00cfff", // Màu nền xanh dương
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px", // Padding hai bên
        color: "#333",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Bóng mờ cho Header
      }}
    >
      {/* Bên trái: Tên trang */}
      <div>
        <h1 style={{ fontSize: "28px", color: "purple", margin: 0 }}>
          {pageTitle}
        </h1>
      </div>

      {/* Chính giữa: Logo */}
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "100px", margin: 0 }}>
          <span style={{ color: "blue" }}>T</span>
          <span style={{ color: "red" }}>D</span>
          <span style={{ color: "blue" }}>T</span>
          <span style={{ color: "gold" }}>BOX</span>
        </h1>
      </div>

      {/* Bên phải: Navbar */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <span style={{ fontSize: "16px", color: "purple" }}>
          Hello {userEmail}
        </span>

        {/* Navbar Dropdown */}
        <div className="dropdown">
          <button
            className="btn btn-dark dropdown-toggle"
            type="button"
            id="navbarDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              padding: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i className="bi bi-list" style={{ fontSize: "20px" }}></i>
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <li>
              <a className="dropdown-item" href="/notifications">
                <i className="bi bi-bell-fill me-2"></i> Notifications
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/settings">
                <i className="bi bi-gear-fill me-2"></i> Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/about">
                <i className="bi bi-info-circle-fill me-2"></i> About
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item text-danger" href="/logout">
                <i className="bi bi-box-arrow-right me-2"></i> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

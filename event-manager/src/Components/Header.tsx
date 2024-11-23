import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons
import "../styles/Header.css";
import { Link } from "react-router-dom";

interface HeaderProps {
  pageTitle: string; // Tên trang hiện tại
  userEmail: string; // Email người dùng
}

const Header: React.FC<HeaderProps> = ({ pageTitle, userEmail }) => {
  return (
    <header
      style={{
        height: "70px",
        background: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        color: "#000000",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        borderBottom: "2px solid #e0e0e0",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          flex: 1, // Phần logo chiếm 1 phần không gian
        }}
        onClick={() => {
          window.location.href = "/"; // Điều hướng về trang Home
        }}
      >
        <img
          src="./assets/Images/logo.png"
          alt="Logo"
          style={{
            height: "50px",
            width: "auto",
          }}
        />
      </div>

      {/* Tabs */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 2, // Phần tabs chiếm không gian lớn hơn để căn giữa
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "center", // Căn giữa các mục
            alignItems: "center", // Căn giữa theo chiều dọc
            gap: "20px",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "#000000",
                fontSize: "18px",
                fontWeight: "bold",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#007bff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")}
            >
              Home
            </a>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "#000000",
                fontSize: "18px",
                fontWeight: "bold",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#007bff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")}
            >
              About
            </Link>
          </li>
          <li>
            <a
              href="/contact"
              style={{
                textDecoration: "none",
                color: "#000000",
                fontSize: "18px",
                fontWeight: "bold",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#007bff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* User Info và Dropdown */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flex: 1, // Phần bên phải cân đối với phần logo
          justifyContent: "flex-end", // Căn phần bên phải sát mép phải
        }}
      >
        {/* User Email */}
        <span style={{ fontSize: "16px", color: "#000000" }}>
          Hello {userEmail}
        </span>

        {/* Dropdown */}
        <div className="dropdown">
          <button
            className="btn btn-light"
            type="button"
            id="navbarDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              width: "auto",
              height: "auto",
              padding: "5px 10px",
              borderRadius: "4px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
              fontSize: "16px",
              color: "#000000",
              background: "#ffffff",
              border: "1px solid #e0e0e0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i
              className="bi bi-list"
              style={{ fontSize: "20px", color: "#000000" }}
            ></i>
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
            style={{
              position: "absolute",
              top: "100%", // Đẩy menu ngay dưới nút
              left: "auto", // Căn lề phải
              right: 0, // Đẩy menu sát mép phải
              zIndex: 1050, // Đảm bảo menu nằm trên các thành phần khác
              marginTop: "10px", // Khoảng cách giữa nút và menu
              background: "#ffffff",
              border: "1px solid #e0e0e0",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
              minWidth: "200px", // Đảm bảo kích thước menu cố định
            }}
          >
            <li>
              <a
                className="dropdown-item"
                href="/notifications"
                style={{
                  color: "#000000",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#007bff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")}
              >
                Notifications
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="/settings"
                style={{
                  color: "#000000",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#007bff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")}
              >
                Settings
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="/about"
                style={{
                  color: "#000000",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#007bff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")}
              >
                About
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                className="dropdown-item text-danger"
                href="/logout"
                style={{
                  transition: "color 0.3s ease",
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

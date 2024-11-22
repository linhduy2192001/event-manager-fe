import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
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
        height: "70px", // Chiều cao của header
        background: "#ffffff", // Màu nền trắng
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center", // Căn giữa theo trục dọc
        padding: "0 20px", // Padding hai bên
        color: "#000000", // Màu chữ đen
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Bóng mờ nhẹ
        borderBottom: "2px solid #e0e0e0", // Đường viền dưới nhạt
        position: "fixed", // Làm header cố định
        top: 0, // Gắn header vào phía trên
        width: "100%", // Đảm bảo header chiếm toàn bộ chiều ngang
        zIndex: 1000, // Z-index cao để luôn hiển thị trên các thành phần khác
      }}
    >
      {/* Bên trái: Logo */}
      <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <img
          src="./logo.png"
          alt="Logo"
          style={{
            height: "50px", // Chiều cao của logo
            width: "auto", // Tự động điều chỉnh chiều rộng theo tỷ lệ
            margin: "0", // Căn chỉnh logo không có khoảng cách thừa
          }}
          onClick={() => {
            window.location.href = "/"; // Điều hướng về trang Home
          }}
        />
      </div>

      {/* Chính giữa: Tabs */}
      <nav
        style={{
          display: "flex",
          alignItems: "center", // Căn giữa các mục theo chiều dọc
          justifyContent: "center", // Đảm bảo các mục được căn giữa trong không gian
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
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
              onMouseEnter={(e) => (e.currentTarget.style.color = "#007bff")} // Hover màu xanh
              onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")} // Trả về màu đen
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

      {/* Bên phải: Navbar */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <span style={{ fontSize: "16px", color: "#000000" }}>
          Hello {userEmail}
        </span>

        {/* Navbar Dropdown */}
        <div className="dropdown">
          <button
            className="btn btn-light"
            type="button"
            id="navbarDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              width: "auto", // Kích thước tự động phù hợp với nội dung
              height: "auto", // Kích thước tự động
              padding: "5px 10px", // Khoảng cách giữa nội dung và viền
              borderRadius: "4px", // Bo góc nhẹ
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)", // Hiệu ứng nổi
              fontSize: "16px", // Kích thước chữ (nếu có chữ)
              color: "#000000", // Màu biểu tượng
              background: "#ffffff", // Màu nền trắng
              border: "1px solid #e0e0e0", // Đường viền nút
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Icon ba dấu gạch ngang */}
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
              top: "100%", // Đẩy menu xuống bên dưới nút
              zIndex: 11,
              marginTop: "10px", // Khoảng cách giữa nút và menu
              background: "#ffffff", // Màu nền trắng cho menu
              border: "1px solid #e0e0e0", // Đường viền menu
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Hiệu ứng bóng
              borderRadius: "5px",
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

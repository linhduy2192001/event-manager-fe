import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        height: "100px", // Chiều cao của Footer (giảm một chút cho gọn gàng)
        backgroundColor: "#ffffff", // Nền trắng
        display: "flex",
        flexDirection: "column", // Sắp xếp nội dung theo cột
        justifyContent: "center",
        alignItems: "center",
        color: "#333333", // Màu chữ đen nhạt
        fontSize: "14px", // Kích thước chữ vừa phải
        borderTop: "1px solid #e0e0e0", // Đường viền nhẹ phía trên
      }}
    >
      {/* Nội dung chính */}
      <p style={{ margin: 0, fontWeight: "500" }}>
        © 2024 TDTBOX - All rights reserved.
      </p>
      {/* Thông tin bổ sung */}
      <p style={{ margin: "5px 0 0", fontSize: "12px", color: "#777" }}>
        Powered by{" "}
        <span style={{ fontWeight: "bold", color: "#007bff" }}>ReactJS</span>
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        height: "125px", // Chiều cao của Footer
        backgroundColor: "#00cfff", // Nền xanh dương
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white", // Màu chữ
        fontSize: "16px", // Kích thước chữ
        boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)", // Bóng mờ ở phía trên
      }}
    >
      <p style={{ margin: 0 }}>
        © 2024 TDTBOX - All rights reserved. Powered by ReactJS
      </p>
    </footer>
  );
};

export default Footer;
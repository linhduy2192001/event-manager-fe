import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        height: "100px",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#333333",
        fontSize: "14px",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <p style={{ margin: 0, fontWeight: "500" }}>
        © 2024 TDTBOX - All rights reserved.
      </p>
      <p style={{ margin: "5px 0 0", fontSize: "12px", color: "#777" }}>
        Powered by{" "}
        <span style={{ fontWeight: "bold", color: "#007bff" }}>ReactJS</span>
      </p>
    </footer>
  );
};

export default Footer;

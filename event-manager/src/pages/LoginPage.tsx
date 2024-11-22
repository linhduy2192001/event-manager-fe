import React from "react";

const LoginPage: React.FC = () => {
  const handleGoogleLogin = () => {
    console.log("Google Login triggered");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#fff",
      }}
    >
      {/* Logo và Tên ứng dụng */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            lineHeight: "1",
          }}
        >
          <span style={{ color: "blue" }}>T</span>
          <span style={{ color: "red" }}>D</span>
          <span style={{ color: "green" }}>T</span>{" "}
          <span style={{ color: "limegreen" }}>BOX</span>
        </h1>
        {/* Icon Ticket */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ac/OOjs_UI_icon_ticket-ltr.svg"
          alt="Ticket Icon"
          style={{ width: "100px", marginTop: "20px" }}
        />
      </div>

      {/* Nút Google Sign-in */}
      <button
        onClick={handleGoogleLogin}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 20px",
          backgroundColor: "#4285F4",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "1rem",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
          alt="Google Logo"
          style={{ width: "20px", marginRight: "10px" }}
        />
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginPage;

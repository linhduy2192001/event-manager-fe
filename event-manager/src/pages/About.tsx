import React from "react";

const About: React.FC = () => {
  return (
    <div
      style={{
        padding: "80px 20px", // Đảm bảo header không che mất nội dung
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh", // Đảm bảo trang chiếm hết chiều cao
      }}
    >
      {/* Tiêu đề */}
      <section
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#333" }}>
          About Us
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#777",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Welcome to TDTBOX! We provide the best tools for managing your events,
          schedules, and history with ease and efficiency.
        </p>
      </section>

      {/* Nội dung chính */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            width: "300px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h3
            style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff" }}
          >
            Our Mission
          </h3>
          <p style={{ fontSize: "16px", color: "#555", marginTop: "10px" }}>
            To empower individuals and organizations by providing easy-to-use
            event management solutions.
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            width: "300px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h3
            style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff" }}
          >
            Our Vision
          </h3>
          <p style={{ fontSize: "16px", color: "#555", marginTop: "10px" }}>
            To become the global leader in event management systems, simplifying
            planning for everyone.
          </p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            width: "300px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h3
            style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff" }}
          >
            Our Values
          </h3>
          <p style={{ fontSize: "16px", color: "#555", marginTop: "10px" }}>
            Innovation, Customer Focus, and Excellence in delivering event
            management services.
          </p>
        </div>
      </section>

      {/* Liên hệ */}
      <section
        style={{
          marginTop: "60px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#333" }}>
          Contact Us
        </h2>
        <p style={{ fontSize: "16px", color: "#777", marginTop: "10px" }}>
          Have questions? Reach out to us at{" "}
          <a
            href="mailto:support@tdtbox.com"
            style={{
              color: "#007bff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            support@tdtbox.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default About;

import React from "react";

const TicketOnline: React.FC = () => {
  const ticketDetails = {
    eventName: "Hội thảo Công nghệ AI",
    logo: "https://via.placeholder.com/150",
    date: "01/12/2024",
    time: "17:00",
    location: "Hội trường A, Trường Đại học XYZ",
    ticketType: "VIP",
    attendeeName: "Nguyễn Văn A",
    ticketId: "TICKET-123456",
    qrCode: "https://via.placeholder.com/150",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f4f8", // Nền sáng
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "350px",
          border: "1px solid #ccc",
          borderRadius: "15px",
          backgroundColor: "#fff",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: "#ff4d4f",
            color: "#fff",
            textAlign: "center",
            padding: "15px 10px",
            position: "relative",
          }}
        >
          <h3 style={{ fontSize: "22px", fontWeight: "bold", margin: 0 }}>
            {ticketDetails.eventName.toUpperCase()}
          </h3>
        </div>

        {/* Thông tin chính */}
        <div
          style={{
            padding: "20px",
            borderBottom: "1px dashed #ccc",
          }}
        >
          <div style={{ marginBottom: "15px" }}>
            <strong>Ngày:</strong> {ticketDetails.date}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <strong>Thời gian:</strong> {ticketDetails.time}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <strong>Địa điểm:</strong> {ticketDetails.location}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <strong>Loại vé:</strong> {ticketDetails.ticketType}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <strong>Tên:</strong> {ticketDetails.attendeeName}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <strong>Mã vé:</strong> {ticketDetails.ticketId}
          </div>
        </div>

        {/* QR Code */}
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f9f9f9",
            textAlign: "center",
          }}
        >
          <img
            src={ticketDetails.qrCode}
            alt="QR Code"
            style={{
              width: "150px",
              height: "150px",
              marginBottom: "10px",
            }}
          />
          <p style={{ fontSize: "12px", color: "#888" }}>
            Quét mã QR để check-in.
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "10px 15px",
            backgroundColor: "#f1f1f1",
            textAlign: "center",
            fontSize: "12px",
            color: "#666",
          }}
        >
          © 2024 TDTBOX Envet
        </div>
      </div>
    </div>
  );
};

export default TicketOnline;

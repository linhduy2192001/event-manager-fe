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
        backgroundColor: "#f0f4f8",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "400px",
          borderRadius: "20px",
          backgroundColor: "#fff",
          overflow: "hidden",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <img
            src={ticketDetails.logo}
            alt="Event Logo"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              marginBottom: "10px",
              border: "2px solid #fff",
            }}
          />
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              margin: "10px 0 5px",
            }}
          >
            {ticketDetails.eventName}
          </h3>
          <p style={{ fontSize: "14px", margin: 0 }}>
            Đừng bỏ lỡ sự kiện đặc biệt này!
          </p>
        </div>

        {/* Thông tin vé */}
        <div
          style={{
            padding: "20px",
            borderBottom: "1px dashed #ccc",
            lineHeight: "1.8",
          }}
        >
          <div>
            <strong>📅 Ngày:</strong> {ticketDetails.date}
          </div>
          <div>
            <strong>⏰ Thời gian:</strong> {ticketDetails.time}
          </div>
          <div>
            <strong>📍 Địa điểm:</strong> {ticketDetails.location}
          </div>
          <div>
            <strong>🎟 Loại vé:</strong> {ticketDetails.ticketType}
          </div>
          <div>
            <strong>🙋‍♂️ Tên:</strong> {ticketDetails.attendeeName}
          </div>
          <div>
            <strong>🔖 Mã vé:</strong> {ticketDetails.ticketId}
          </div>
        </div>

        {/* QR Code */}
        <div
          style={{
            padding: "20px",
            textAlign: "center",
            backgroundColor: "#f9fafc",
          }}
        >
          <img
            src={ticketDetails.qrCode}
            alt="QR Code"
            style={{
              width: "180px",
              height: "180px",
              marginBottom: "10px",
            }}
          />
          <p style={{ fontSize: "14px", color: "#555", margin: 0 }}>
            Quét mã QR để check-in tại sự kiện.
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f1f1f1",
            textAlign: "center",
            fontSize: "12px",
            color: "#888",
            fontWeight: "bold",
          }}
        >
          © 2024 TDTBOX Event | Vé sự kiện được bảo vệ
        </div>
      </div>
    </div>
  );
};

export default TicketOnline;

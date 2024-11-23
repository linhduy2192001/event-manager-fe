import React, { useState } from "react";
import { FaClock, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DetailEvent: React.FC = () => {
  const navigate = useNavigate();

  // Mock dữ liệu sự kiện
  const [eventDetails] = useState({
    id: 1,
    name: "Hội thảo Công nghệ AI",
    description:
      "Sự kiện này nhằm cung cấp thông tin về công nghệ AI và các ứng dụng trong đời sống, giáo dục, và công nghiệp.",
    image: "https://via.placeholder.com/800x400", // Placeholder image
    startTime: "2024-12-01T17:00",
    endTime: "2024-12-01T20:00",
    location: "Hội trường A, Trường Đại học XYZ",
    schedule: [
      { time: "17:00", activity: "Khai mạc", type: "Trình bày" },
      { time: "17:30", activity: "Bài giảng: Giới thiệu về AI", type: "Thảo luận" },
      { time: "18:30", activity: "Giải lao", type: "Giải trí" },
      { time: "19:00", activity: "Bài giảng: Tương lai của AI", type: "Thảo luận" },
      { time: "19:45", activity: "Kết thúc", type: "Trình bày" },
    ],
    speakers: [
      { name: "Nguyễn Văn A", avatar: "https://via.placeholder.com/100", title: "Giáo sư AI" },
      { name: "Trần Thị B", avatar: "https://via.placeholder.com/100", title: "Chuyên gia AI" },
    ],
    registered: false, // Trạng thái đăng ký
    ticket: {
      qrCode: "https://via.placeholder.com/150", // Placeholder QR code
      details: "Vé tham dự Hội thảo Công nghệ AI",
    },
    notifications: [
      "Sự kiện sẽ bắt đầu lúc 17:00. Vui lòng đến trước 15 phút.",
      "Cập nhật: Diễn giả Nguyễn Văn A sẽ bắt đầu lúc 17:30.",
    ],
  });

  // Hàm xử lý sự kiện "Đăng ký tham gia"
  const handleRegister = () => {
    console.log("Đã đăng ký tham gia!"); // Log kiểm tra
    navigate("ticket"); // Điều hướng tương đối đến đường dẫn /ticket
  };
  return (
    <div
      style={{
        fontFamily: "'Raleway', sans-serif",
        backgroundColor: "#f4f8fb",
        color: "#333",
        padding: "20px",
        display: "flex",
        justifyContent: "center", // Căn giữa nội dung
      }}
    >
      <div
        style={{
          maxWidth: "800px", // Giới hạn chiều rộng tối đa
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        {/* Banner */}
        <div
          style={{
            backgroundImage: `url(${eventDetails.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "15px",
            overflow: "hidden",
            height: "250px",
            position: "relative",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              color: "#fff",
              padding: "15px",
              width: "100%",
            }}
          >
            <h1 style={{ fontSize: "28px", margin: 0 }}>{eventDetails.name}</h1>
          </div>
        </div>

        {/* Giới thiệu */}
        <div style={{ marginBottom: "30px" }}>
          <p>{eventDetails.description}</p>
          <p>
            <FaClock />{" "}
            <strong>
              {new Date(eventDetails.startTime).toLocaleString()} -{" "}
              {new Date(eventDetails.endTime).toLocaleString()}
            </strong>
          </p>
          <p>
            <FaMapMarkerAlt /> <strong>{eventDetails.location}</strong>
          </p>
        </div>

        {/* Timeline */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ marginBottom: "20px", color: "#2c3e50" }}>Lịch trình sự kiện</h3>
          <div
            style={{
              borderLeft: "3px solid #007bff",
              paddingLeft: "15px",
            }}
          >
            {eventDetails.schedule.map((item, index) => (
              <div key={index} style={{ marginBottom: "20px" }}>
                <p style={{ margin: 0, fontSize: "18px", color: "#007bff" }}>
                  {item.time} - {item.activity}
                </p>
                <small style={{ color: "#555" }}>
                  <em>({item.type})</em>
                </small>
              </div>
            ))}
          </div>
        </div>

        {/* Diễn giả */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ marginBottom: "20px", color: "#2c3e50" }}>Diễn giả</h3>
          <div style={{ display: "flex", gap: "20px" }}>
            {eventDetails.speakers.map((speaker, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <img
                  src={speaker.avatar}
                  alt={speaker.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    marginBottom: "10px",
                  }}
                />
                <p style={{ fontWeight: "bold", margin: 0 }}>{speaker.name}</p>
                <small style={{ color: "#555" }}>{speaker.title}</small>
              </div>
            ))}
          </div>
        </div>

        {/* Tương tác */}
        <div style={{ marginBottom: "30px", textAlign: "center" }}>
          {eventDetails.registered ? (
            <button
              style={{
                backgroundColor: "#2ecc71",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "not-allowed",
              }}
              disabled
            >
              <FaCheckCircle /> Đã đăng ký
            </button>
          ) : (
            <button
              onClick={handleRegister} // Gắn sự kiện onClick
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Đăng ký tham gia
            </button>
          )}
        </div>

        {/* Thông báo */}
        <div>
          <h3 style={{ marginBottom: "20px", color: "#2c3e50" }}>Thông báo</h3>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {eventDetails.notifications.map((note, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: "#eaf3ff",
                  marginBottom: "10px",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  color: "#333",
                }}
              >
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailEvent;

import { useState } from "react";
import { FaCheckCircle, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DetailEvent: React.FC = () => {
  const navigate = useNavigate();

  const [eventDetails] = useState({
    id: 1,
    name: "Hội thảo Công nghệ AI",
    description:
      "Sự kiện này nhằm cung cấp thông tin về công nghệ AI và các ứng dụng trong đời sống, giáo dục, và công nghiệp.",
    image: "https://via.placeholder.com/800x400",
    startTime: "2024-12-01T17:00",
    endTime: "2024-12-01T20:00",
    location: "Hội trường A, Trường Đại học XYZ",
    schedule: [
      { time: "17:00", activity: "Khai mạc", type: "Trình bày" },
      {
        time: "17:30",
        activity: "Bài giảng: Giới thiệu về AI",
        type: "Thảo luận",
      },
      { time: "18:30", activity: "Giải lao", type: "Giải trí" },
      {
        time: "19:00",
        activity: "Bài giảng: Tương lai của AI",
        type: "Thảo luận",
      },
      { time: "19:45", activity: "Kết thúc", type: "Trình bày" },
    ],
    speakers: [
      {
        name: "Nguyễn Văn A",
        avatar: "https://via.placeholder.com/100",
        title: "Giáo sư AI",
      },
      {
        name: "Trần Thị B",
        avatar: "https://via.placeholder.com/100",
        title: "Chuyên gia AI",
      },
    ],
    registered: false,
    ticket: {
      qrCode: "https://via.placeholder.com/150",
      details: "Vé tham dự Hội thảo Công nghệ AI",
    },
    notifications: [
      "Sự kiện sẽ bắt đầu lúc 17:00. Vui lòng đến trước 15 phút.",
      "Cập nhật: Diễn giả Nguyễn Văn A sẽ bắt đầu lúc 17:30.",
    ],
  });

  const handleRegister = () => {
    console.log("Đã đăng ký tham gia!");
    navigate("ticket");
  };

  return (
    <div
      style={{
        fontFamily: "'Raleway', sans-serif",
        backgroundColor: "#f4f8fb",
        color: "#333",
        padding: "20px",
        paddingTop: "80px", // Thêm padding top
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "15px",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
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
            height: "300px",
            marginBottom: "30px",
            position: "relative",
            overflow: "hidden",
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
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              {eventDetails.name}
            </h1>
          </div>
        </div>

        {/* Giới thiệu */}
        <div style={{ marginBottom: "30px" }}>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            {eventDetails.description}
          </p>
          <p style={{ margin: "10px 0", fontSize: "16px" }}>
            <FaClock style={{ marginRight: "8px" }} />
            <strong>
              {new Date(eventDetails.startTime).toLocaleString()} -{" "}
              {new Date(eventDetails.endTime).toLocaleString()}
            </strong>
          </p>
          <p style={{ fontSize: "16px" }}>
            <FaMapMarkerAlt style={{ marginRight: "8px" }} />{" "}
            <strong>{eventDetails.location}</strong>
          </p>
        </div>

        {/* Timeline */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ marginBottom: "20px", color: "#007bff" }}>
            Lịch trình sự kiện
          </h3>
          <div
            style={{
              borderLeft: "4px solid #007bff",
              paddingLeft: "15px",
            }}
          >
            {eventDetails.schedule.map((item, index) => (
              <div key={index} style={{ marginBottom: "20px" }}>
                <p style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>
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
          <h3 style={{ marginBottom: "20px", color: "#007bff" }}>Diễn giả</h3>
          <div style={{ display: "flex", gap: "20px" }}>
            {eventDetails.speakers.map((speaker, index) => (
              <div key={index} style={{ textAlign: "center", width: "120px" }}>
                <img
                  src={speaker.avatar}
                  alt={speaker.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    marginBottom: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
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
                padding: "12px 30px",
                borderRadius: "8px",
                border: "none",
                cursor: "not-allowed",
                fontSize: "16px",
                fontWeight: "bold",
              }}
              disabled
            >
              <FaCheckCircle style={{ marginRight: "8px" }} /> Đã đăng ký
            </button>
          ) : (
            <button
              onClick={handleRegister}
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "12px 30px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Đăng ký tham gia
            </button>
          )}
        </div>

        {/* Thông báo */}
        <div>
          <h3 style={{ marginBottom: "20px", color: "#007bff" }}>Thông báo</h3>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {eventDetails.notifications.map((note, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: "#eaf3ff",
                  marginBottom: "10px",
                  padding: "15px",
                  borderRadius: "8px",
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

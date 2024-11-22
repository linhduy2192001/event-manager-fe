import React, { useState } from "react";

const DetailEvent: React.FC = () => {
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
    guests: [{ name: "Lê Văn C", organization: "Tập đoàn ABC", role: "Khách mời đặc biệt" }],
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

  return (
    <div className="container my-5">
      {/* Thông tin chung */}
      <div className="mb-5">
        <h1 className="text-center mb-4">{eventDetails.name}</h1>
        <img src={eventDetails.image} alt={eventDetails.name} className="img-fluid mb-4" />
        <p>{eventDetails.description}</p>
        <p>
          <strong>Thời gian:</strong> {new Date(eventDetails.startTime).toLocaleString()} -{" "}
          {new Date(eventDetails.endTime).toLocaleString()}
        </p>
        <p>
          <strong>Địa điểm:</strong> {eventDetails.location}
        </p>
      </div>

      {/* Lịch trình sự kiện */}
      <div className="mb-5">
        <h3 className="mb-3">Lịch trình sự kiện</h3>
        <ul className="list-group">
          {eventDetails.schedule.map((item, index) => (
            <li key={index} className="list-group-item">
              <strong>{item.time}</strong>: {item.activity} <em>({item.type})</em>
            </li>
          ))}
        </ul>
      </div>

      {/* Thông tin diễn giả và khách mời */}
      <div className="mb-5">
        <h3 className="mb-3">Thông tin diễn giả</h3>
        <div className="row">
          {eventDetails.speakers.map((speaker, index) => (
            <div key={index} className="col-md-4 text-center">
              <img
                src={speaker.avatar}
                alt={speaker.name}
                className="rounded-circle mb-2"
                style={{ width: "100px", height: "100px" }}
              />
              <h5>{speaker.name}</h5>
              <p>{speaker.title}</p>
            </div>
          ))}
        </div>
        <h3 className="mb-3 mt-4">Khách mời đặc biệt</h3>
        <ul className="list-group">
          {eventDetails.guests.map((guest, index) => (
            <li key={index} className="list-group-item">
              <strong>{guest.name}</strong> - {guest.organization} ({guest.role})
            </li>
          ))}
        </ul>
      </div>

      {/* Tương tác */}
      <div className="mb-5">
        <h3 className="mb-3">Tương tác</h3>
        {eventDetails.registered ? (
          <button className="btn btn-secondary" disabled>
            Đã đăng ký
          </button>
        ) : (
          <button className="btn btn-primary">Đăng ký tham gia</button>
        )}
      </div>

      {/* Vé tham gia */}
      {eventDetails.registered && (
        <div className="mb-5">
          <h3 className="mb-3">Vé tham gia</h3>
          <img src={eventDetails.ticket.qrCode} alt="QR Code" className="img-fluid mb-2" />
          <p>{eventDetails.ticket.details}</p>
          <button className="btn btn-success">Tải vé xuống</button>
        </div>
      )}

      {/* Thông báo */}
      <div className="mb-5">
        <h3 className="mb-3">Thông báo</h3>
        <ul className="list-group">
          {eventDetails.notifications.map((note, index) => (
            <li key={index} className="list-group-item">{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailEvent;

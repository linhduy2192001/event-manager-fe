import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddEvent: React.FC = () => {
  const navigate = useNavigate();

  // State quản lý thông tin sự kiện
  const [eventDetails, setEventDetails] = useState({
    name: "",
    description: "",
    eventType: "", // Loại sự kiện
    location: "",
    image: "",
    startTime: "",
    endTime: "",
    tickets: { total: 0 }, // Số lượng vé phát hành
    schedule: [{ time: "", activity: "", type: "" }], // Timeline
    speakers: [{ name: "", avatar: "", title: "" }], // Diễn giả
  });

  // Hàm thay đổi thông tin cơ bản
  const handleInputChange = (field: string, value: string | number) => {
    setEventDetails({ ...eventDetails, [field]: value });
  };

  // Hàm thay đổi thông tin tickets.total
  const handleTicketChange = (value: number) => {
    setEventDetails({
      ...eventDetails,
      tickets: {
        ...eventDetails.tickets,
        total: value, // Chỉ thay đổi trường total trong tickets
      },
    });
  };

  // Hàm thay đổi timeline
  const handleScheduleChange = (
    index: number,
    field: keyof typeof eventDetails.schedule[number],
    value: string
  ) => {
    const updatedSchedule = [...eventDetails.schedule];
    updatedSchedule[index][field] = value;
    setEventDetails({ ...eventDetails, schedule: updatedSchedule });
  };

  // Thêm timeline mới
  const addScheduleItem = () => {
    setEventDetails({
      ...eventDetails,
      schedule: [...eventDetails.schedule, { time: "", activity: "", type: "" }],
    });
  };

  // Xóa timeline
  const removeScheduleItem = (index: number) => {
    const updatedSchedule = eventDetails.schedule.filter((_, i) => i !== index);
    setEventDetails({ ...eventDetails, schedule: updatedSchedule });
  };

  // Hàm thay đổi thông tin diễn giả
  const handleSpeakerChange = (
    index: number,
    field: keyof typeof eventDetails.speakers[number],
    value: string
  ) => {
    const updatedSpeakers = [...eventDetails.speakers];
    updatedSpeakers[index][field] = value;
    setEventDetails({ ...eventDetails, speakers: updatedSpeakers });
  };

  // Thêm diễn giả mới
  const addSpeaker = () => {
    setEventDetails({
      ...eventDetails,
      speakers: [...eventDetails.speakers, { name: "", avatar: "", title: "" }],
    });
  };

  // Xóa diễn giả
  const removeSpeaker = (index: number) => {
    const updatedSpeakers = eventDetails.speakers.filter((_, i) => i !== index);
    setEventDetails({ ...eventDetails, speakers: updatedSpeakers });
  };

  // Lưu sự kiện
  const handleSaveEvent = () => {
    console.log("Event Details:", eventDetails);
    navigate("/events"); // Chuyển hướng về danh sách sự kiện sau khi lưu
  };

  return (
    <div
      style={{
        fontFamily: "'Raleway', sans-serif",
        backgroundColor: "#f4f8fb",
        color: "#333",
        padding: "20px",
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
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Thêm Sự Kiện</h1>

        {/* Thông tin cơ bản */}
        <div style={{ marginBottom: "30px" }}>
          <label>Tên sự kiện:</label>
          <input
            type="text"
            value={eventDetails.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          />

          <label>Mô tả sự kiện:</label>
          <textarea
            value={eventDetails.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              height: "100px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          ></textarea>

          <label>Loại sự kiện:</label>
          <select
            value={eventDetails.eventType}
            onChange={(e) => handleInputChange("eventType", e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          >
            <option value="">Chọn loại sự kiện</option>
            <option value="conference">Hội nghị</option>
            <option value="workshop">Workshop</option>
            <option value="seminar">Hội thảo</option>
            <option value="competition">Cuộc thi</option>
          </select>

          <label>Địa điểm:</label>
          <input
            type="text"
            value={eventDetails.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          />
        </div>

        {/* Vé tham gia */}
        <div style={{ marginBottom: "30px" }}>
          <label>Số lượng vé phát hành:</label>
          <input
            type="number"
            value={eventDetails.tickets.total}
            onChange={(e) => handleTicketChange(+e.target.value)} // Sử dụng hàm riêng
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          />
        </div>

        {/* Timeline */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ marginBottom: "10px", color: "#2c3e50" }}>Lịch trình</h3>
          {eventDetails.schedule.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <input
                type="time"
                value={item.time}
                onChange={(e) => handleScheduleChange(index, "time", e.target.value)}
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
              <input
                type="text"
                placeholder="Nội dung"
                value={item.activity}
                onChange={(e) => handleScheduleChange(index, "activity", e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
              <input
                type="text"
                placeholder="Loại"
                value={item.type}
                onChange={(e) => handleScheduleChange(index, "type", e.target.value)}
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
              <button
                onClick={() => removeScheduleItem(index)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                <FaTrash />
              </button>
            </div>
          ))}
          <button
            onClick={addScheduleItem}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <FaPlus /> Thêm Hoạt Động
          </button>
        </div>

        {/* Lưu sự kiện */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleSaveEvent}
            style={{
              backgroundColor: "#28a745",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Lưu Sự Kiện
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;

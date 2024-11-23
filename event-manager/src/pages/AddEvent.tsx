import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddEvent: React.FC = () => {
  const navigate = useNavigate();

  const [eventDetails, setEventDetails] = useState({
    name: "",
    description: "",
    eventType: "",
    location: "",
    tickets: { total: 0 },
    schedule: [{ time: "", activity: "", type: "" }],
    speakers: [{ name: "", avatar: "", title: "" }],
  });

  const handleInputChange = (field: string, value: string | number) => {
    setEventDetails({ ...eventDetails, [field]: value });
  };

  const handleTicketChange = (value: number) => {
    setEventDetails({
      ...eventDetails,
      tickets: {
        ...eventDetails.tickets,
        total: value,
      },
    });
  };

  const handleScheduleChange = (
    index: number,
    field: keyof (typeof eventDetails.schedule)[number],
    value: string
  ) => {
    const updatedSchedule = [...eventDetails.schedule];
    updatedSchedule[index][field] = value;
    setEventDetails({ ...eventDetails, schedule: updatedSchedule });
  };

  const addScheduleItem = () => {
    setEventDetails({
      ...eventDetails,
      schedule: [
        ...eventDetails.schedule,
        { time: "", activity: "", type: "" },
      ],
    });
  };

  const removeScheduleItem = (index: number) => {
    const updatedSchedule = eventDetails.schedule.filter((_, i) => i !== index);
    setEventDetails({ ...eventDetails, schedule: updatedSchedule });
  };

  const handleSaveEvent = () => {
    console.log("Event Details:", eventDetails);
    navigate("/events");
  };

  return (
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: "#fff",
        color: "#000",
        padding: "20px",
        paddingTop: "80px",
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Thêm Sự Kiện
        </h1>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Tên sự kiện:
          </label>
          <input
            type="text"
            value={eventDetails.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #000",
              borderRadius: "5px",
              marginBottom: "15px",
            }}
          />

          <label style={{ display: "block", marginBottom: "8px" }}>
            Mô tả sự kiện:
          </label>
          <textarea
            value={eventDetails.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              height: "80px",
              border: "1px solid #000",
              borderRadius: "5px",
            }}
          ></textarea>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Loại sự kiện:
          </label>
          <select
            value={eventDetails.eventType}
            onChange={(e) => handleInputChange("eventType", e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #000",
              borderRadius: "5px",
              marginBottom: "15px",
            }}
          >
            <option value="">Chọn loại sự kiện</option>
            <option value="conference">Hội nghị</option>
            <option value="workshop">Workshop</option>
            <option value="seminar">Hội thảo</option>
            <option value="competition">Cuộc thi</option>
          </select>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Số lượng vé phát hành:
          </label>
          <input
            type="number"
            value={eventDetails.tickets.total}
            onChange={(e) => handleTicketChange(+e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #000",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ textAlign: "center" }}>Lịch trình</h3>
          {eventDetails.schedule.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <input
                type="time"
                value={item.time}
                onChange={(e) =>
                  handleScheduleChange(index, "time", e.target.value)
                }
                style={{
                  flex: "1",
                  padding: "10px",
                  border: "1px solid #000",
                  borderRadius: "5px",
                }}
              />
              <input
                type="text"
                placeholder="Hoạt động"
                value={item.activity}
                onChange={(e) =>
                  handleScheduleChange(index, "activity", e.target.value)
                }
                style={{
                  flex: "2",
                  padding: "10px",
                  border: "1px solid #000",
                  borderRadius: "5px",
                }}
              />
              <button
                onClick={() => removeScheduleItem(index)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#ff4d4d",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
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
              width: "100%",
              padding: "10px",
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <FaPlus /> Thêm Lịch Trình
          </button>
        </div>

        <button
          onClick={handleSaveEvent}
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Lưu Sự Kiện
        </button>
      </div>
    </div>
  );
};

export default AddEvent;

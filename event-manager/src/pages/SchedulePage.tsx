import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface Event {
  id: number;
  name: string;
  organizer: string;
  startDate: string;
  endDate: string;
  status: "upcoming" | "completed" | "cancelled";
}

const SchedulePage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "upcoming" | "completed" | "cancelled"
  >("all");

  const events: Event[] = [
    {
      id: 1,
      name: "Hội thảo Công nghệ AI",
      organizer: "Khoa Công nghệ thông tin",
      startDate: "2024-12-01",
      endDate: "2024-12-01",
      status: "upcoming",
    },
    {
      id: 2,
      name: "Cuộc thi Lập trình 2024",
      organizer: "Trường Đại học XYZ",
      startDate: "2024-11-20",
      endDate: "2024-11-22",
      status: "completed",
    },
    {
      id: 3,
      name: "Hội nghị Blockchain",
      organizer: "Công ty ABC",
      startDate: "2024-10-15",
      endDate: "2024-10-16",
      status: "cancelled",
    },
    {
      id: 4,
      name: "Sự kiện Networking",
      organizer: "Tập đoàn DEF",
      startDate: "2024-12-10",
      endDate: "2024-12-11",
      status: "upcoming",
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || event.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return { borderLeft: "4px solid #007bff" };
      case "completed":
        return { borderLeft: "4px solid #28a745" };
      case "cancelled":
        return { borderLeft: "4px solid #dc3545" };
      default:
        return {};
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        padding: "20px",
        paddingTop: "80px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        Lịch trình tham gia sự kiện
      </h1>

      {/* Thanh tìm kiếm và bộ lọc */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <FaSearch
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#333",
              fontSize: "16px",
            }}
          />
          <input
            type="text"
            placeholder="Tìm kiếm sự kiện..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "10px 40px 10px 30px", // Tăng khoảng cách để chứa icon
              width: "300px",
              border: "1px solid #333",
              borderRadius: "5px",
              height: "40px", // Đồng bộ chiều cao
            }}
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as any)}
          style={{
            marginLeft: "15px",
            padding: "10px",
            border: "1px solid #333",
            borderRadius: "5px",
            width: "200px",
            height: "40px", // Đồng bộ chiều cao
          }}
        >
          <option value="all">Tất cả</option>
          <option value="upcoming">Chưa diễn ra</option>
          <option value="completed">Đã diễn ra</option>
          <option value="cancelled">Đã hủy</option>
        </select>
      </div>

      {/* Danh sách sự kiện */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 cột cố định
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              height: "250px",
              ...getStatusColor(event.status),
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h5
              style={{
                color: "#333",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {event.name}
            </h5>
            <p style={{ marginBottom: "8px", color: "#555" }}>
              <strong>Đơn vị tổ chức:</strong> {event.organizer}
            </p>
            <p style={{ marginBottom: "8px", color: "#555" }}>
              <strong>Ngày bắt đầu:</strong> {event.startDate}
            </p>
            <p style={{ marginBottom: "8px", color: "#555" }}>
              <strong>Ngày kết thúc:</strong> {event.endDate}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "10px",
                marginTop: "15px",
              }}
            >
              <button
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#f1f1f1",
                  color: "#333",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#e6e6e6";
                  e.currentTarget.style.boxShadow =
                    "0 2px 4px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#f1f1f1";
                  e.currentTarget.style.boxShadow = "none";
                }}
                onClick={() => alert("Xem chi tiết")}
              >
                Chi tiết
              </button>
              {event.status === "completed" && (
                <button
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#f1f1f1",
                    color: "#333",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "background-color 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#e6e6e6";
                    e.currentTarget.style.boxShadow =
                      "0 2px 4px rgba(0, 0, 0, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#f1f1f1";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  onClick={() => alert("Đánh giá sự kiện")}
                >
                  Đánh giá
                </button>
              )}
              <button
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#f1f1f1",
                  color: "#333",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#e6e6e6";
                  e.currentTarget.style.boxShadow =
                    "0 2px 4px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#f1f1f1";
                  e.currentTarget.style.boxShadow = "none";
                }}
                onClick={() => alert("Xem vé")}
              >
                Xem vé
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;

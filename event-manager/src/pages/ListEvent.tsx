import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

interface EventData {
  id: number;
  name: string;
  type: string;
  time: string;
  location: string;
  status: string;
  participants: string;
}

const ListEvent: React.FC = () => {
  const navigate = useNavigate();

  // Mock dữ liệu sự kiện
  const [events] = useState<EventData[]>([
    {
      id: 1,
      name: "Hội thảo Công nghệ AI",
      type: "Workshop",
      time: "2024-12-01T17:00",
      location: "Hội trường A",
      status: "Đang mở",
      participants: "120/200",
    },
    {
      id: 2,
      name: "Cuộc thi Lập trình 2024",
      type: "Cuộc thi",
      time: "2024-12-05T12:00",
      location: "Phòng họp B",
      status: "Đã đóng",
      participants: "150/150",
    },
    {
      id: 3,
      name: "Hội nghị Blockchain",
      type: "Hội nghị",
      time: "2024-10-15T15:30",
      location: "Trực tuyến",
      status: "Bị hủy",
      participants: "90/100",
    },
    {
      id: 4,
      name: "Khóa học lập trình React",
      type: "Hội thảo",
      time: "2024-12-20T10:00",
      location: "Trực tuyến",
      status: "Đang mở",
      participants: "50/50",
    },
  ]);

  // State bộ lọc
  const [search, setSearch] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [filterLocation, setFilterLocation] = useState<string>("");
  const [filterStartDate, setFilterStartDate] = useState<string>("");
  const [filterEndDate, setFilterEndDate] = useState<string>("");

  // Hàm tính toán thống kê
  const statistics = useMemo(() => {
    const now = new Date();
    const upcomingEvents = events.filter(
      (event) => new Date(event.time) > now && event.status !== "Bị hủy"
    );
    const pastEvents = events.filter(
      (event) => new Date(event.time) <= now && event.status !== "Bị hủy"
    );
    const canceledEvents = events.filter((event) => event.status === "Bị hủy");

    return {
      upcoming: upcomingEvents.length,
      past: pastEvents.length,
      canceled: canceledEvents.length,
    };
  }, [events]);

  // Hàm reset các bộ lọc
  const resetFilters = () => {
    setSearch("");
    setFilterType("");
    setFilterStatus("");
    setFilterLocation("");
    setFilterStartDate("");
    setFilterEndDate("");
  };

  // Xử lý tìm kiếm và lọc
  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesType = filterType ? event.type === filterType : true;
    const matchesStatus = filterStatus ? event.status === filterStatus : true;
    const matchesLocation = filterLocation
      ? event.location === filterLocation
      : true;
    const matchesTime =
      (!filterStartDate || new Date(event.time) >= new Date(filterStartDate)) &&
      (!filterEndDate || new Date(event.time) <= new Date(filterEndDate));
    return (
      matchesSearch &&
      matchesType &&
      matchesStatus &&
      matchesLocation &&
      matchesTime
    );
  });

  // Hàm render trạng thái với màu sắc
  const renderStatusTag = (status: string) => {
    const statusStyles: { [key: string]: React.CSSProperties } = {
      "Đang mở": {
        backgroundColor: "#28a745",
        color: "white",
        padding: "5px 10px",
        borderRadius: "10px",
      },
      "Đã đóng": {
        backgroundColor: "#ffc107",
        color: "black",
        padding: "5px 10px",
        borderRadius: "10px",
      },
      "Bị hủy": {
        backgroundColor: "#dc3545",
        color: "white",
        padding: "5px 10px",
        borderRadius: "10px",
      },
    };
    return <span style={statusStyles[status] || {}}>{status}</span>;
  };

  return (
    <div
      className="container my-5"
      style={{
        paddingTop: "80px", // Đẩy nội dung xuống dưới header
      }}
    >
      {/* Thống kê */}
      <div className="row mb-4 text-center">
        {[
          {
            label: "Sắp diễn ra",
            count: statistics.upcoming,
            color: "#d1f0d7",
            textColor: "#28a745",
            icon: "📅",
          },
          {
            label: "Đã diễn ra",
            count: statistics.past,
            color: "#d7e9fb",
            textColor: "#007bff",
            icon: "✅",
          },
          {
            label: "Bị hủy",
            count: statistics.canceled,
            color: "#f8d7da",
            textColor: "#dc3545",
            icon: "❌",
          },
        ].map((stat, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div
              className="shadow-sm"
              style={{
                backgroundColor: stat.color,
                borderRadius: "15px",
                padding: "20px",
                border: "1px solid #e0e0e0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  fontSize: "36px",
                  marginBottom: "10px",
                  color: stat.textColor,
                }}
              >
                {stat.icon}
              </div>
              {/* Nội dung */}
              <h5
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: stat.textColor,
                  margin: "0",
                }}
              >
                {stat.label}
              </h5>
              <h3
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: stat.textColor,
                  margin: "10px 0 0",
                }}
              >
                {stat.count}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Bộ lọc */}
      <div
        className="search-container"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          margin: "20px auto",
        }}
      >
        {/* Thanh tìm kiếm */}
        <div
          className="row mb-4"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Ô tìm kiếm */}
          <div style={{ flex: "2", position: "relative" }}>
            <input
              type="text"
              className="form-control"
              placeholder="🔍 Nhập tên sự kiện..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px 20px",
                fontSize: "16px",
              }}
            />
          </div>

          {/* Bộ lọc loại sự kiện */}
          <div style={{ flex: "1" }}>
            <select
              className="form-select"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                fontSize: "16px",
              }}
            >
              <option value="">Loại sự kiện</option>
              <option value="Workshop">Hội thảo</option>
              <option value="Cuộc thi">Cuộc thi</option>
              <option value="Hội nghị">Hội nghị</option>
            </select>
          </div>

          {/* Bộ lọc trạng thái */}
          <div style={{ flex: "1" }}>
            <select
              className="form-select"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                fontSize: "16px",
              }}
            >
              <option value="">Trạng thái</option>
              <option value="Đang mở">Đang mở</option>
              <option value="Đã đóng">Đã đóng</option>
              <option value="Bị hủy">Bị hủy</option>
            </select>
          </div>

          {/* Bộ lọc địa điểm */}
          <div style={{ flex: "1" }}>
            <select
              className="form-select"
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                fontSize: "16px",
              }}
            >
              <option value="">Địa điểm</option>
              <option value="Hội trường A">Hội trường A</option>
              <option value="Phòng họp B">Phòng họp B</option>
              <option value="Trực tuyến">Trực tuyến</option>
            </select>
          </div>

          {/* Bộ lọc ngày */}
          <div style={{ flex: "1", display: "flex", gap: "10px" }}>
            <input
              type="date"
              className="form-control"
              value={filterStartDate}
              onChange={(e) => setFilterStartDate(e.target.value)}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                fontSize: "16px",
                flex: "1",
              }}
            />
            <input
              type="date"
              className="form-control"
              value={filterEndDate}
              onChange={(e) => setFilterEndDate(e.target.value)}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                fontSize: "16px",
                flex: "1",
              }}
            />
          </div>
        </div>

        {/* Nút Reset */}
        <div style={{ textAlign: "right" }}>
          <button
            className="btn"
            onClick={resetFilters}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "15px 30px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Danh sách sự kiện */}
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div
                key={event.id}
                className="card shadow-sm"
                style={{
                  width: "300px",
                  borderRadius: "15px",
                  border: "1px solid #e0e0e0",
                  overflow: "hidden",
                }}
              >
                {/* Header */}
                <div
                  style={{
                    backgroundColor: "#000000",
                    padding: "15px",
                    borderRadius: "15px",
                    width: "100%",
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <h5
                    style={{
                      color: "#ffffff",
                      fontSize: "18px",
                      fontWeight: "bold",
                      margin: "0",
                    }}
                  >
                    {event.name}
                  </h5>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#ffffff",
                      margin: "5px 0 0",
                    }}
                  >
                    {event.type}
                  </p>
                </div>

                {/* Body */}
                <div style={{ padding: "15px" }}>
                  <p style={{ fontSize: "14px", color: "#666" }}>
                    <strong>Thời gian:</strong>{" "}
                    {new Date(event.time).toLocaleString()}
                  </p>
                  <p style={{ fontSize: "14px", color: "#666" }}>
                    <strong>Địa điểm:</strong> {event.location}
                  </p>
                  <p style={{ fontSize: "14px", color: "#666" }}>
                    <strong>Trạng thái:</strong> {renderStatusTag(event.status)}
                  </p>
                  <p style={{ fontSize: "14px", color: "#666" }}>
                    <strong>Người tham gia:</strong> {event.participants}
                  </p>
                </div>

                {/* Footer */}
                <div
                  style={{
                    padding: "15px",
                    borderTop: "1px solid #e0e0e0",
                    textAlign: "center",
                  }}
                >
                  <button
                    className="btn btn-sm"
                    style={{
                      backgroundColor: "#fff", // Nền trắng
                      color: "#000", // Chữ màu đen
                      border: "1px solid #000", // Viền đen
                      borderRadius: "15px", // Bo góc nhẹ
                      padding: "8px 12px", // Padding
                      fontWeight: "bold", // Chữ đậm
                      transition: "all 0.3s ease", // Hiệu ứng hover
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#000"; // Nền đen khi hover
                      e.currentTarget.style.color = "#fff"; // Chữ trắng khi hover
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#fff"; // Quay lại nền trắng
                      e.currentTarget.style.color = "#000"; // Quay lại chữ đen
                    }}
                    onClick={() => navigate(`/events/event/${event.id}`)}
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>Không có sự kiện phù hợp.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListEvent;

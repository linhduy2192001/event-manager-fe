import React, { useState } from "react";

interface Event {
  id: number;
  name: string;
  organizer: string;
  startDate: string;
  endDate: string;
  status: "upcoming" | "completed" | "cancelled"; // Trạng thái: chưa diễn ra, đã diễn ra, bị hủy
}

const SchedulePage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "upcoming" | "completed" | "cancelled">("all");

  // Danh sách sự kiện giả lập
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
  ];

  // Lọc sự kiện theo tìm kiếm và trạng thái
  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === "all" || event.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Đổi màu theo trạng thái
  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-warning text-dark"; // Chưa diễn ra
      case "completed":
        return "bg-success text-white"; // Đã diễn ra
      case "cancelled":
        return "bg-danger text-white"; // Đã hủy
      default:
        return "";
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ color: "#2c3e50", fontWeight: "bold" }}>
        Lịch trình tham gia sự kiện
      </h1>

      {/* Bộ lọc và tìm kiếm */}
      <div className="d-flex justify-content-between mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Tìm kiếm sự kiện..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ maxWidth: "300px" }}
        />
        <select
          className="form-select"
          style={{ maxWidth: "200px" }}
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as any)}
        >
          <option value="all">Tất cả</option>
          <option value="upcoming">Chưa diễn ra</option>
          <option value="completed">Đã diễn ra</option>
          <option value="cancelled">Đã hủy</option>
        </select>
      </div>

      {/* Danh sách sự kiện */}
      <div className="row">
        {filteredEvents.map((event) => (
          <div className="col-md-4 mb-4" key={event.id}>
            <div className={`card shadow-sm ${getStatusColor(event.status)}`} style={{ borderRadius: "10px" }}>
              <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <p className="card-text">
                  <strong>Đơn vị tổ chức:</strong> {event.organizer}
                </p>
                <p className="card-text">
                  <strong>Ngày bắt đầu:</strong> {event.startDate}
                </p>
                <p className="card-text">
                  <strong>Ngày kết thúc:</strong> {event.endDate}
                </p>
                <div className="d-flex justify-content-between mt-3">
                  <button className="btn btn-primary btn-sm" onClick={() => alert("Xem chi tiết")}>
                    Chi tiết
                  </button>
                  {event.status === "completed" && (
                    <button className="btn btn-success btn-sm" onClick={() => alert("Đánh giá sự kiện")}>
                      Đánh giá
                    </button>
                  )}
                  <button className="btn btn-warning btn-sm" onClick={() => alert("Xem vé")}>
                    Xem vé
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;

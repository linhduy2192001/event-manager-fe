import React, { useState } from "react";
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
      time: "01/12/2024 - 17:00",
      location: "Hội trường A",
      status: "Đang mở",
      participants: "120/200",
    },
    {
      id: 2,
      name: "Cuộc thi Lập trình 2024",
      type: "Cuộc thi",
      time: "05/12/2024 - 12:00",
      location: "Phòng họp B",
      status: "Đã đóng",
      participants: "150/150",
    },
    {
      id: 3,
      name: "Hội nghị Blockchain",
      type: "Hội nghị",
      time: "10/12/2024 - 15:30",
      location: "Trực tuyến",
      status: "Bị hủy",
      participants: "90/100",
    },
  ]);

  // State bộ lọc
  const [search, setSearch] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [filterLocation, setFilterLocation] = useState<string>("");
  const [filterStartDate, setFilterStartDate] = useState<string>("");
  const [filterEndDate, setFilterEndDate] = useState<string>("");

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
    const matchesSearch = event.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType ? event.type === filterType : true;
    const matchesStatus = filterStatus ? event.status === filterStatus : true;
    const matchesLocation = filterLocation ? event.location === filterLocation : true;
    // Giả lập logic kiểm tra thời gian
    const matchesTime =
      (!filterStartDate || new Date(event.time.split(" - ")[0]) >= new Date(filterStartDate)) &&
      (!filterEndDate || new Date(event.time.split(" - ")[0]) <= new Date(filterEndDate));
    return matchesSearch && matchesType && matchesStatus && matchesLocation && matchesTime;
  });

  // Hàm render trạng thái với màu sắc
  const renderStatusTag = (status: string) => {
    const statusStyles: { [key: string]: React.CSSProperties } = {
      "Đang mở": { backgroundColor: "#28a745", color: "white", padding: "5px 10px", borderRadius: "10px" },
      "Đã đóng": { backgroundColor: "#ffc107", color: "black", padding: "5px 10px", borderRadius: "10px" },
      "Bị hủy": { backgroundColor: "#dc3545", color: "white", padding: "5px 10px", borderRadius: "10px" },
    };
    return <span style={statusStyles[status] || {}}>{status}</span>;
  };

  return (
    <div className="container my-5">
      {/* Bộ lọc */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nhập tên sự kiện..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-2 mb-3">
          <select
            className="form-select"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">Loại sự kiện</option>
            <option value="Workshop">Hội thảo</option>
            <option value="Cuộc thi">Cuộc thi</option>
            <option value="Hội nghị">Hội nghị</option>
          </select>
        </div>
        <div className="col-md-2 mb-3">
          <select
            className="form-select"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">Trạng thái</option>
            <option value="Đang mở">Đang mở</option>
            <option value="Đã đóng">Đã đóng</option>
            <option value="Bị hủy">Bị hủy</option>
          </select>
        </div>
        <div className="col-md-2 mb-3">
          <select
            className="form-select"
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
          >
            <option value="">Địa điểm</option>
            <option value="Hội trường A">Hội trường A</option>
            <option value="Phòng họp B">Phòng họp B</option>
            <option value="Trực tuyến">Trực tuyến</option>
          </select>
        </div>
        <div className="col-md-2 mb-3 d-flex gap-2">
          <input
            type="date"
            className="form-control"
            value={filterStartDate}
            onChange={(e) => setFilterStartDate(e.target.value)}
          />
          <input
            type="date"
            className="form-control"
            value={filterEndDate}
            onChange={(e) => setFilterEndDate(e.target.value)}
          />
        </div>
        <div className="col-md-12 text-end">
          <button className="btn btn-secondary" onClick={resetFilters}>
            Reset
          </button>
        </div>
      </div>

      {/* Danh sách sự kiện */}
      <table className="table table-striped table-bordered">
        <thead className="table-primary">
          <tr>
            <th>Tên sự kiện</th>
            <th>Loại sự kiện</th>
            <th>Thời gian</th>
            <th>Địa điểm</th>
            <th>Trạng thái</th>
            <th>Người tham gia</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.type}</td>
                <td>{event.time}</td>
                <td>{event.location}</td>
                <td>{renderStatusTag(event.status)}</td>
                <td>{event.participants}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => navigate(`/events/${event.id}`)}
                  >
                    Xem chi tiết
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center">
                Không có sự kiện phù hợp.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListEvent;

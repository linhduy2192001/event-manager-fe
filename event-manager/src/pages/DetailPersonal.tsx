import React, { useState, useEffect } from "react";

interface UserData {
  googleId: string;
  fullName: string;
  email: string;
  avatar: string;
  role: string;
  firstLoginTime: string;
  accountStatus: string;
  studentId?: string;
  class?: string;
  course?: string;
  faculty?: string;
}

const DetailPersonalPage: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Mock dữ liệu giả lập
    const mockUser: UserData = {
      googleId: "123456789",
      fullName: "John Doe",
      email: "johndoe@gmail.com",
      avatar: "https://via.placeholder.com/150",
      role: "Student",
      firstLoginTime: "2024-11-21 10:00 AM",
      accountStatus: "Active",
      studentId: "SV123456",
      class: "K14A",
      course: "CNTT",
      faculty: "Công Nghệ Thông Tin",
    };

    setTimeout(() => {
      setUserData(mockUser);
    }, 500);
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const renderField = (
    title: string,
    content: string | undefined,
    icon: string,
    customStyles: React.CSSProperties
  ) => (
    <div
      className="field-box mb-4"
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid transparent",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        ...customStyles,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 8px 15px rgba(0, 0, 0, 0.2)";
        (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 4px 6px rgba(0, 0, 0, 0.1)";
        (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
      }}
    >
      {/* Phần tiêu đề */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(90deg, #3b82f6, #2563eb)",
          color: "#fff",
          fontWeight: "bold",
          padding: "10px 15px",
          fontSize: "14px",
          textTransform: "uppercase",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "18px" }}>{icon}</span>
          {title}
        </div>
      </div>
      {/* Phần nội dung */}
      <div
        style={{
          textAlign: "center",
          padding: "15px",
          fontSize: "16px",
          fontWeight: "500",
          color: "#333",
          backgroundColor: "#f9f9f9",
        }}
      >
        {content || "N/A"}
      </div>
    </div>
  );

  return (
    <div className="container my-5">
      {/* Avatar */}
      <div className="text-center mb-4">
        <img
          src={userData.avatar || "https://via.placeholder.com/150"}
          alt="Avatar"
          className="rounded-circle shadow-sm"
          style={{
            width: "120px",
            height: "120px",
            objectFit: "cover",
            border: "5px solid white",
          }}
        />
      </div>

      {/* Các trường dữ liệu */}
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {renderField("Google ID", userData.googleId, "🔑", {
          width: "400px",
          height: "100px",
        })}
        {renderField("Họ và Tên", userData.fullName, "👤", {
          width: "500px",
          height: "120px",
        })}
        {renderField("Email", userData.email, "📧", {
          width: "350px",
          height: "100px",
        })}
        {renderField("Vai trò", userData.role, "👔", {
          width: "300px",
          height: "100px",
        })}
        {renderField(
          "Thời gian đăng nhập lần đầu",
          userData.firstLoginTime,
          "⏰",
          {
            width: "500px",
            height: "120px",
          }
        )}
        {renderField("Trạng thái tài khoản", userData.accountStatus, "⚙️", {
          width: "350px",
          height: "100px",
        })}
        {userData.role === "Student" && (
          <>
            {renderField("Mã số sinh viên", userData.studentId, "🎓", {
              width: "400px",
              height: "100px",
            })}
            {renderField("Lớp", userData.class, "🏫", {
              width: "300px",
              height: "100px",
            })}
            {renderField("Khóa học", userData.course, "📚", {
              width: "350px",
              height: "100px",
            })}
            {renderField("Khoa/Ngành học", userData.faculty, "📖", {
              width: "400px",
              height: "100px",
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default DetailPersonalPage;

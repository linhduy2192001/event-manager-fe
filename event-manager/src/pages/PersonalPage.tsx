import React, { useState } from "react";

const PersonalPage: React.FC = () => {
  const [role, setRole] = useState<string>(""); // Vai trò người dùng

  const [formData, setFormData] = useState<any>({
    googleId: "123456789", // Demo Google ID
    fullName: "John Doe", // Demo Họ và Tên
    email: "johndoe@gmail.com", // Demo Email
    avatar: "https://via.placeholder.com/100", // Demo Avatar
    role: "",
    firstLoginTime: new Date().toLocaleString(),
    accountStatus: "Pending", // Trạng thái tài khoản mặc định
    studentId: "",
    class: "",
    course: "",
    faculty: "",
    teacherId: "",
    title: "",
    department: "",
    specialty: "",
    organization: "",
    roleInOrganization: "",
    permissions: "",
  });

  // Cập nhật thông tin form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Xóa nội dung vừa nhập
  const handleClear = () => {
    setFormData((prev: any) => ({
      ...prev,
      studentId: "",
      class: "",
      course: "",
      faculty: "",
      teacherId: "",
      title: "",
      department: "",
      specialty: "",
      organization: "",
      roleInOrganization: "",
      permissions: "",
    }));
  };

  // Render các trường riêng theo vai trò
  const renderRoleSpecificFields = () => {
    if (role === "Student") {
      return (
        <>
          <div className="mb-3">
            <label className="form-label">Mã số sinh viên:</label>
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Lớp:</label>
            <input
              type="text"
              name="class"
              value={formData.class}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Khóa học:</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Khoa/Ngành học:</label>
            <input
              type="text"
              name="faculty"
              value={formData.faculty}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </>
      );
    }
    if (role === "Teacher") {
      return (
        <>
          <div className="mb-3">
            <label className="form-label">Mã giảng viên:</label>
            <input
              type="text"
              name="teacherId"
              value={formData.teacherId}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Chức danh:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Khoa/Phòng ban:</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Lĩnh vực chuyên môn:</label>
            <input
              type="text"
              name="specialty"
              value={formData.specialty}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </>
      );
    }
    if (role === "Organizer") {
      return (
        <>
          <div className="mb-3">
            <label className="form-label">Tên tổ chức:</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Vai trò trong tổ chức:</label>
            <input
              type="text"
              name="roleInOrganization"
              value={formData.roleInOrganization}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phân quyền:</label>
            <input
              type="text"
              name="permissions"
              value={formData.permissions}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="container">
      {!role ? (
        <div className="text-center mt-5">
          <h3 className="mb-4">Choose Your Role</h3>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            <button
              className="btn btn-outline-dark"
              onClick={() => setRole("Student")}
              style={{ width: "354px", height: "132px", fontSize: "18px" }}
            >
              Student
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => setRole("Teacher")}
              style={{ width: "354px", height: "132px", fontSize: "18px" }}
            >
              Teacher
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => setRole("Organizer")}
              style={{ width: "354px", height: "132px", fontSize: "18px" }}
            >
              Organizer
            </button>
          </div>
        </div>
      ) : (
        <form
          style={{ maxWidth: "800px", margin: "0 auto" }}
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submitted:", formData);
          }}
        >
          {/* Trường chung */}
          <div className="mb-3">
            <label className="form-label">Google ID:</label>
            <input
              type="text"
              value={formData.googleId}
              readOnly
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Họ và tên:</label>
            <input
              type="text"
              value={formData.fullName}
              readOnly
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              value={formData.email}
              readOnly
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Ảnh đại diện:</label>
            <img
              src={formData.avatar}
              alt="Avatar"
              className="d-block mb-3"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Vai trò:</label>
            <input
              type="text"
              value={role}
              readOnly
              className="form-control"
            />
          </div>
          {/* Trường riêng */}
          {renderRoleSpecificFields()}

          {/* Nút điều khiển */}
          <div className="d-flex justify-content-between mt-4 gap-3">
            <button
              type="button"
              className="btn btn-warning flex-grow-1"
              onClick={() => setRole("")}
            >
              Back
            </button>
            <button
              type="button"
              className="btn btn-danger flex-grow-1"
              onClick={handleClear}
            >
              Clear
            </button>
            <button type="submit" className="btn btn-success flex-grow-1">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PersonalPage;

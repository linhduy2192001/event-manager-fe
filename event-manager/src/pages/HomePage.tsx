import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.css"; // Import CSS
const HomePage: React.FC = () => {
  const cards = [
    { title: "Personal", icon: "👤", link: "/personal" },
    { title: "Schedule", icon: "📅", link: "/schedule" },
    { title: "History", icon: "📖", link: "/history" },
    { title: "Event", icon: "🎤", link: "/event" },
    { title: "Notifications", icon: "🔔", link: "/notifications" },
    { title: "Feedback", icon: "⭐", link: "/feedback" },
  ];

  return (
    <div className="container my-5">
      <div className="row text-center">
        {cards.map((card, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div
              className="card shadow-sm"
              style={{
                borderRadius: "15px",
                cursor: "pointer",
                transition: "transform 0.2s ease",
                height: "300px", // Chiều cao của card
                width: "200px", // Chiều rộng của card
                margin: "0 auto", // Căn giữa card trong cột
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F5F5F5",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div
                style={{
                  fontSize: "70px", // Logo lớn hơn
                  marginBottom: "20px",
                }}
              >
                {card.icon}
              </div>
              <h5
                className="card-title"
                style={{
                  fontSize: "24px", // Tăng kích thước title
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                {card.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

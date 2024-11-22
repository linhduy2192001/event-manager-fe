import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.css";

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
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div className="card-body d-flex flex-column align-items-center">
                <div
                  style={{
                    fontSize: "50px",
                    marginBottom: "20px",
                  }}
                >
                  {card.icon}
                </div>
                <h5 className="card-title">{card.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

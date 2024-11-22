import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.css";
import { Carousel } from "react-bootstrap";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const cards = [
    { title: "Personal", icon: "👤", link: "/detailPersonal" },
    { title: "Schedule", icon: "📅", link: "/schedule" },
    { title: "History", icon: "📖", link: "/history" },
    { title: "Event", icon: "🎤", link: "/ListEvent" },
    { title: "Notifications", icon: "🔔", link: "/notifications" },
    { title: "Feedback", icon: "⭐", link: "/feedback" },
  ];

  const ongoingEvents = [
    { title: "Music Festival", date: "22 Nov 2024", image: "/event1.jpg" },
    { title: "Tech Conference", date: "25 Nov 2024", image: "/event2.jpg" },
    { title: "Art Expo", date: "26 Nov 2024", image: "/event3.jpg" },
    { title: "Startup Fair", date: "28 Nov 2024", image: "/event4.jpg" },
  ];

  const sliderImages = ["/slider1.jpg", "/slider2.jpg", "/slider3.jpg"];

  return (
    <div
      className="container my-5"
      style={{
        paddingTop: "80px",
      }}
    >
      {/* Phần giới thiệu */}
      <section className="mb-5 text-center">
        <h1 className="mb-3" style={{ fontSize: "36px", fontWeight: "bold" }}>
          Welcome to Event Management
        </h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          Manage your events, schedules, and history all in one place. Stay
          updated and make the most of your time.
        </p>
      </section>

      {/* Slider hình ảnh */}
      <section className="mb-5">
        <Carousel>
          {sliderImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="d-block w-100"
                style={{
                  height: "400px",
                  objectFit: "cover",
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Các thẻ chức năng (Explore) */}
      <section className="mb-5">
        <h2 className="text-center mb-4" style={{ fontSize: "28px" }}>
          Explore
        </h2>
        <div
          className="row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="card shadow"
              style={{
                borderRadius: "15px",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                height: "240px",
                width: "200px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffffff",
                border: "1px solid #e0e0e0",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 10px 20px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 10px rgba(0, 0, 0, 0.1)";
              }}
              onClick={() => navigate(card.link)}
            >
              <div
                style={{
                  fontSize: "40px",
                  marginBottom: "15px",
                  color: "#007bff",
                }}
              >
                {card.icon}
              </div>
              <h5
                className="card-title"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#333",
                  textAlign: "center",
                }}
              >
                {card.title}
              </h5>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h2 className="text-center mb-4" style={{ fontSize: "28px" }}>
          Ongoing Events
        </h2>
        <div
          className="row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {ongoingEvents.slice(0, 4).map((event, index) => (
            <div
              key={index}
              className="card shadow-sm"
              style={{
                borderRadius: "15px",
                width: "300px",
                height: "380px",
                overflow: "hidden",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  overflow: "hidden",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div
                className="card-body text-center"
                style={{
                  marginTop: "15px",
                }}
              >
                <h5 className="card-title" style={{ fontSize: "20px" }}>
                  {event.title}
                </h5>
                <p
                  className="card-text"
                  style={{ fontSize: "16px", color: "#666" }}
                >
                  {event.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;

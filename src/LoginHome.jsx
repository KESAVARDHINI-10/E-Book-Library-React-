import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginHome.css";
const LoginHome = () => {
const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="login-home">
      <header className="hero">
        <div className="hero-overlay">
          <h1>Welcome to the NovelNest📖</h1>
          <p>Discover a world of books at your fingertips, anytime, anywhere.</p>
          <button onClick={handleLogin} className="login-btn">Login</button>
        </div>
      </header>
      <section className="about">
        <h2>About Us</h2>
        <div className="about-content">
        <img src="/images/about.webp" alt="Library" className="about-img" />
          <div className="about-text">
            <p>
              Our digital library is home to thousands of books spanning various genres.
              Whether you're a fan of fiction, non-fiction, comics, or horror, we have something for you.
            </p>
            <p>
              Read on the go, anytime and anywhere, with instant access to our vast collection.
              No more waiting—just open, read, and enjoy.
            </p>
          </div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              We believe in the power of stories and knowledge. That’s why we strive to make reading
              accessible and enjoyable for everyone.
            </p>
            <p>
              Start your journey today by exploring the thousands of e-books in our collection.
            </p>
          </div>
          <img src="/images/about2.webp" alt="Reading" className="about-img" />
        </div>
      </section>
      <section className="features">
        <h2>Why Choose Our Library?</h2>
        <div className="features-container">
          <div className="feature-card">
            <img src="/images/features1.webp" alt="Unlimited Access" />
            <h3>Unlimited Access</h3>
            <p>Read thousands of books anytime with no restrictions.</p>
          </div>
          <div className="feature-card">
            <img src="/images/features2.webp" alt="Multi-Device" />
            <h3>Read on Any Device</h3>
            <p>Enjoy reading on your laptop, tablet, or smartphone.</p>
          </div>
          <div className="feature-card">
            <img src="/images/features3.webp" alt="Diverse Categories" />
            <h3>Diverse Categories</h3>
            <p>Find books in fiction, horror, romance, non-fiction, and more.</p>
          </div>
          <div className="feature-card">
            <img src="/images/features4.webp" alt="Instant Downloads" />
            <h3>Instant Downloads</h3>
            <p>Download books in PDF format and read offline.</p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2025 E-Book Library. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};
export default LoginHome;


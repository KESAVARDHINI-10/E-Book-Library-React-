import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./HomePage.css"; 
import storybooks from "./storybooks.jpg";
import fictionbooks from "./fictionbooks.png";
import nonfictionbooks from "./nonfictionbooks.jpg";
import romanticfiction from "./romanticfiction.webp";
import horrorbooks from "./horrorbooks.jpeg";
import comics from "./comics.png";

const HomePage = () => {
  const navigate = useNavigate(); 
  const categories = [
    { name: "Fiction", img: fictionbooks,description: "Explore imaginative worlds and creative storytelling." },
    { name: "Non-Fiction", img: nonfictionbooks,description: "Learn from real-life experiences and factual accounts." },
    { name: "Story Books", img: storybooks,description: "Enjoy captivating stories for all ages." },
    { name: "Horror", img: horrorbooks,description: "Experience spine-chilling tales filled with suspense, mystery, and supernatural elements." },
    { name: "Romantic Fiction", img: romanticfiction,description: "Indulge in love stories full of passion and emotion." },
    { name: "Comics", img: comics, description: "Enjoy fun and engaging stories in graphic format." },
  ];

  return (
    <div>
      <header className="hero">
        <h1>Discover Your Next Favorite Book</h1>
        <h2 style={{ color: "white" }}>
  <i>
    <b>Lose yourself in a book, find yourself in its pages.</b>
  </i>
</h2>
     
      </header>

      <section className="categories">
  <h2>Explore Different Book Categories</h2>
  <div className="category-container">
    {categories.map((category) => (
      <div 
        key={category.name} 
        className="category-card" 
        onClick={() => navigate(`/books/${category.name.toLowerCase().replace(/\s+/g, "-")}`)}
        style={{ cursor: "pointer" }}
      >
        <img src={category.img} alt={category.name} />
        <h3>{category.name}</h3>
        <p>{category.description}</p> 
      </div>
    ))}
  </div>
</section>

      <footer className="footer">
        <p>&copy; 2025 E-Book Library. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

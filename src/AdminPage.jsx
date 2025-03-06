import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminPage.css";

const AdminPage = ({ books, setBooks }) => {
  const navigate = useNavigate();
  const [newBook, setNewBook] = useState({ title: "", description: "", img: "" });
  const [editingIndex, setEditingIndex] = useState(null); // Track which book is being edited

  // Add a new book
  const addBook = () => {
    if (newBook.title && newBook.description && newBook.img) {
      setBooks([...books, newBook]);
      setNewBook({ title: "", description: "", img: "" });
    } else {
      alert("Please fill all fields!");
    }
  };

  // Delete a book
  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  // Edit a book
  const startEditing = (index) => {
    setEditingIndex(index);
    setNewBook(books[index]);
  };

  // Save edited book
  const saveEdit = () => {
    const updatedBooks = [...books];
    updatedBooks[editingIndex] = newBook;
    setBooks(updatedBooks);
    setEditingIndex(null);
    setNewBook({ title: "", description: "", img: "" });
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel - Manage Books</h2>

      {/* Form to Add or Edit Books */}
      <div className="book-form">
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newBook.description}
          onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newBook.img}
          onChange={(e) => setNewBook({ ...newBook, img: e.target.value })}
        />
        {editingIndex === null ? (
          <button onClick={addBook}>Add Book</button>
        ) : (
          <button onClick={saveEdit}>Save Edit</button>
        )}
      </div>

      {/* Book List */}
      <h3>Book List</h3>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <img src={book.img} alt={book.title} width="50" />
            {book.title} - {book.description}
            <button onClick={() => startEditing(index)}>Edit</button>
            <button onClick={() => deleteBook(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Navigation Buttons */}
      <button onClick={() => navigate("/home")}>Go to Home</button>
    </div>
  );
};

export default AdminPage;

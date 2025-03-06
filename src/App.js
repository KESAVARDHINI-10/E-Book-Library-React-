import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import LoginHome from "./LoginHome";
import BookList from "./BookList";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginHome />} />
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/home" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <HomePage />
          </ProtectedRoute>
        } />
        <Route path="/books/:category" element={<BookList />} />
      </Routes>
    </Router>
  );
}
export default App;

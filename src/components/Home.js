import React from "react";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div className="home-page-container">
      <div className="info">
        <div className="text">
          <h1>Welcome to our free library!</h1>
          <h4>Get started with adding a book</h4>
        </div>

        <NavLink to="/add-book">
          <button>Add Book 📚</button>
        </NavLink>
      </div>
    </div>
  );
}

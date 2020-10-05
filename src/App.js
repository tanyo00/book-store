import React from "react";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import Show from "./components/Show";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/all.css";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/add-book" component={Add} />
        <Route path="/show-books" component={Show} />
      </div>
    </Router>
  );
}

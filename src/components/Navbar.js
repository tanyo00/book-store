import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MyNavLink = styled(NavLink)`
  color: gray;
  text-decoration: none;
  font-weight: bold;
  padding: 5px;
  &:hover,
  &:active,
  &:focus {
    border-bottom: 1px solid black;
    color: #002244;
  }
`;

export default function Navbar() {
  return (
    <div className="navbar-container">
      <h1>BookStore</h1>
      <div className="links">
        <MyNavLink to="/">Home</MyNavLink>
        <MyNavLink to="/add-book">Add Book</MyNavLink>
        <MyNavLink to="/show-books">Show Books</MyNavLink>
      </div>
    </div>
  );
}

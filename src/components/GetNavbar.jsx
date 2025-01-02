import React from "react";
import { NavLink } from "react-router-dom";
import { FaBook, FaBookReader, FaBookmark } from "react-icons/fa";
import "../styles/GetNavbar.css";

const GetNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          <FaBook /> BookTracker
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <FaBook /> Kitaplar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/readed"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <FaBookReader /> Okuduklarım
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/toread"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <FaBookmark /> Okuma Listem
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default GetNavbar;

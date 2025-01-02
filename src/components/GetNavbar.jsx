import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBook,
  FaBookReader,
  FaBookmark,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "../styles/GetNavbar.css";

const GetNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-top">
          <NavLink to="/" className="navbar-brand">
            <FaBook /> BookTracker
          </NavLink>
          <button className="menu-button" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={() => setIsOpen(false)}
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
              onClick={() => setIsOpen(false)}
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
              onClick={() => setIsOpen(false)}
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

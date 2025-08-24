import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; 
import logo from "../assets/images/ignite.png";
import "./Navbar.css";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left */}
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-text">IGNITE FUELS</span>
      </div>

      {/* Right */}
      <div className="nav-right">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/booking" onClick={() => setMenuOpen(false)}>Booking</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

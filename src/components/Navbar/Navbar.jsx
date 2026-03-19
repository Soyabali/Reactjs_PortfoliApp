import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", id: "01" },
    { name: "Privacy Policy", path: "/privacy-policy", id: "07" }
  ];

  const scrollItems = [
    { name: "Expertise", id: "expertise", index: "02" },
    { name: "Work", id: "work", index: "03" },
    { name: "Experience", id: "experience", index: "04" },
    { name: "Projects", id: "projects", index: "05" },
    { name: "Contact", id: "contact", index: "06" }
  ];

  const handleScrollClick = (id) => {
    setIsMenuOpen(false);
    const target = document.querySelector(`#${id}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-accent">Soyab</span> Ali
        </Link>

        {/* Menu Toggle Button */}
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item, idx) => (
            <li key={idx} className="nav-item">
              <Link 
                to={item.path}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="nav-text">{item.name}</span>
              </Link>
            </li>
          ))}
          
          {location.pathname === "/" && scrollItems.map((item, idx) => (
            <li key={idx} className="nav-item">
              <a 
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollClick(item.id);
                }}
                className="nav-link"
              >
                <span className="nav-text">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        {location.pathname === "/" && (
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScrollClick("contact");
            }}
            className="navbar-cta"
          >
            Get In Touch
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
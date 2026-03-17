import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero", id: "01" },
    { name: "Expertise", href: "#expertise", id: "02" },
    { name: "Work", href: "#work", id: "03" },
    { name: "Experience", href: "#experience", id: "04" },
    { name: "Projects", href: "#projects", id: "05" },
    { name: "Contact", href: "#contact", id: "06" }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-accent">Soyab</span> Ali
        </div>

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
              <a 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-link"
              >
                <span className="nav-text">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a 
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="navbar-cta"
        >
          Get In Touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
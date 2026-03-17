import { FaArrowUp, FaEnvelope, FaGithub, FaHeart, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#expertise" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const skills = [
    "Flutter",
    "React",
    "Node.js",
    "Android",
    "Firebase",
    "Kotlin"
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: "#", label: "LinkedIn", color: "#0A66C2" },
    { icon: <FaGithub />, url: "https://github.com/Soyabali", label: "GitHub", color: "#ffffff" },
    { icon: <FaTwitter />, url: "#", label: "Twitter", color: "#1DA1F2" },
    { icon: <FaEnvelope />, url: "mailto:soyabali64@gmail.com", label: "Email", color: "#EA4335" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-container">
          {/* About Section */}
          <div className="footer-column footer-about">
            <h3 className="footer-title">
              <span className="title-accent">Soyab</span> Ali
            </h3>
            <p className="footer-description">
              Mobile app developer passionate about building high-quality applications using Flutter, React Native, and native Android technologies.
            </p>
            <div className="footer-contact-quick">
              <a href="mailto:soyabali64@gmail.com" className="contact-item">
                <FaEnvelope /> soyabali64@gmail.com
              </a>
              <a href="tel:+919871950881" className="contact-item">
                <FaPhone /> +91 9871950881
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="footer-column">
            <h4 className="footer-subtitle">Technologies</h4>
            <div className="skills-grid">
              {skills.map((skill, idx) => (
                <span key={idx} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-column">
            <h4 className="footer-subtitle">Connect</h4>
            <div className="social-icons">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className="social-icon"
                  title={social.label}
                  style={{ "--icon-color": social.color }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-info">
            <p className="copyright">
              © {currentYear} Soyab Ali. All rights reserved. | Designed & Built with <FaHeart className="heart-icon" /> by Soyab Ali
            </p>
          </div>
          <button className="scroll-top-btn" onClick={scrollToTop}>
            <FaArrowUp /> Back to Top
          </button>
        </div>
      </div>

      {/* Animated Background */}
      <div className="footer-bg-animation"></div>
    </footer>
  );
};

export default Footer;
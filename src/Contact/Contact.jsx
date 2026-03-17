import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaTimes, FaTwitter } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    body: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewContent, setPreviewContent] = useState({
    type: "",
    content: ""
  });

  const contactInfo = [
    {
      id: 1,
      icon: <FaEnvelope />,
      label: "Email",
      value: "soyabali64@gmail.com",
      link: "mailto:soyabali64@gmail.com",
      type: "email"
    },
    {
      id: 2,
      icon: <FaPhone />,
      label: "Mobile",
      value: "+91 9871950881",
      link: "tel:+919871950881",
      type: "phone"
    }
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "#",
      color: "#0A66C2"
    },
    {
      id: 2,
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/Soyabali",
      color: "#ffffff"
    },
    {
      id: 3,
      icon: <FaTwitter />,
      label: "Twitter",
      url: "#",
      color: "#1DA1F2"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.subject.trim() || !formData.body.trim()) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate sending email
      const mailtoLink = `mailto:soyabali64@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.body)}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus("success");
      setFormData({ subject: "", body: "" });
      
      setTimeout(() => {
        setIsFormOpen(false);
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setFormData({ subject: "", body: "" });
    setSubmitStatus(null);
  };

  const handleCopyClick = (type, content) => {
    if (content.trim()) {
      setPreviewContent({
        type: type,
        content: content
      });
      setIsPreviewOpen(true);
    }
  };

  const handleCopySubmit = () => {
    navigator.clipboard.writeText(previewContent.content).then(() => {
      setIsPreviewOpen(false);
      setPreviewContent({ type: "", content: "" });
    }).catch(() => {
      console.error("Failed to copy");
    });
  };

  const handleCopyCancel = () => {
    setIsPreviewOpen(false);
    setPreviewContent({ type: "", content: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title"><span>07.</span> Get In Touch</h2>
        <p className="section-subtitle">Let's Connect & Create Something Amazing</p>

        <div className="contact-content">
          <div className="contact-card">
            <h3 className="contact-greeting">Hi, I'm Soyab Ali</h3>
            <p className="contact-message">
              I'm passionate about building high-quality mobile applications. 
              Feel free to reach out for collaborations, inquiries, or just a friendly hello!
            </p>

            <div className="contact-info-list">
              {contactInfo.map((info) => (
                <a
                  key={info.id}
                  href={info.link}
                  className="contact-info-item"
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <span className="info-label">{info.label}</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                  <span className="arrow-icon">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-side">
            <div className="social-section">
              <h4 className="social-title">Connect With Me</h4>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    className="social-link"
                    title={social.label}
                    style={{ "--social-color": social.color }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="cta-section">
              <button 
                className="cta-button"
                onClick={() => setIsFormOpen(true)}
              >
                Send Me a Message
              </button>
              <p className="response-time">💬 I'll respond within 24 hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {isFormOpen && (
        <div className="modal-overlay" onClick={closeForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Send Me a Message</h3>
              <button 
                className="close-button"
                onClick={closeForm}
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="message-form">
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="body">Message</label>
                <textarea
                  id="body"
                  name="body"
                  value={formData.body}
                  onChange={handleInputChange}
                  placeholder="Your message here..."
                  rows="6"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {submitStatus === "success" && (
                <div className="status-message success">
                  ✓ Message sent successfully! Opening your email client...
                </div>
              )}

              {submitStatus === "error" && (
                <div className="status-message error">
                  ✗ Please fill in all fields
                </div>
              )}

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
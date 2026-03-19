import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <section className="privacy-policy">
      <div className="privacy-policy-container">
        <h1 className="privacy-policy-title">Privacy Policy</h1>
        
        <div className="privacy-policy-content">
          <div className="policy-section">
            <p className="last-updated">
              This policy was updated on 23 February 2026.
            </p>
          </div>

          <div className="policy-section">
            <h2>About This Privacy Policy</h2>
            <p>
              I am committed to protecting your personal data in compliance with the Information Technology Act, 2000, Digital Personal Data Protection Act, 2023, and applicable global privacy standards. This privacy policy outlines how I collect, use, and protect your information.
            </p>
          </div>

          <div className="policy-section">
            <h2>Information Collected</h2>
            <p>We may collect the following types of information:</p>
            <ul className="info-list">
              <li>Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>IP Address</li>
              <li>Other Technical Information</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>Use of Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="use-list">
              <li><strong>Service Delivery:</strong> To provide and manage our services.</li>
              <li><strong>Website Improvement:</strong> To improve website functionality and user experience.</li>
              <li><strong>Security:</strong> To ensure system security and prevent unauthorized access.</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulatory obligations.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>Cookies</h2>
            <p>
              We use cookies to improve user experience. Cookies are small data files stored on your device that help us remember your preferences and enhance your browsing experience.
            </p>
          </div>

          <div className="policy-section">
            <h2>Data Breach Notification</h2>
            <p>
              In case of data breach, I will notify authorities and users as required by law. I take the security of your personal information seriously and implement appropriate measures to protect it.
            </p>
          </div>

          <div className="policy-section">
            <h2>Security Measures</h2>
            <p>
              I maintain appropriate security controls and processes to protect your information. My security infrastructure is designed to prevent unauthorized access, disclosure, or alteration of personal data.
            </p>
          </div>

          <div className="policy-section">
            <h2>Contact Information</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact me at:
            </p>
            <div className="contact-info">
              <p>
                <strong>Name:</strong> Soyab Ali
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:soyabali64@gmail.com">soyabali64@gmail.com</a>
              </p>
              <p>
                <strong>Mobile:</strong> <a href="tel:+919871950881">+91 9871950881</a>
              </p>
              <p>
                <strong>Address:</strong> Village Bharatpur Badhli, District Hapur, Post Angle via Kishore, Pin 250104, Uttar Pradesh, India
              </p>
            </div>
          </div>

          <div className="policy-section">
            <h2>Policy Updates</h2>
            <p>
              I may update this Privacy Policy from time to time. I will notify you of any changes by updating the date at the top of this policy. Your continued use of my services constitutes your acceptance of the updated Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

import { FaCode, FaDatabase, FaGitAlt, FaLaptopCode, FaMobileAlt, FaPalette } from "react-icons/fa";
import "./Expertise.css";

function Expertise() {
  return (
    <section id="expertise" className="expertise-section">
      <div className="expertise-container">

        <h2 className="section-title">
          <span>04.</span> Expertise
        </h2>

        <div className="card-wrapper">

          {/* Card 1 */}
          <div className="expertise-card">
            <FaCode className="icon" />
            <h3>Software Development</h3>
            <ul>
              <li>OOP & Functional Programming</li>
              <li>Dart, JavaScript, TypeScript</li>
              <li>Clean Architecture</li>
              <li>REST API Integration</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="expertise-card">
            <FaLaptopCode className="icon" />
            <h3>Frontend Development</h3>
            <ul>
              <li>ReactJS, NextJS</li>
              <li>HTML, CSS, Tailwind</li>
              <li>Responsive Design</li>
              <li>Performance Optimization</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="expertise-card">
            <FaMobileAlt className="icon" />
            <h3>Mobile Development</h3>
            <ul>
              <li>Flutter (Android & iOS)</li>
              <li>Firebase Integration</li>
              <li>Bloc & Riverpod</li>
              <li>App Deployment</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="expertise-card">
            <FaDatabase className="icon" />
            <h3>Backend Development</h3>
            <ul>
              <li>Node.js & Express</li>
              <li>Database Design (SQL/NoSQL)</li>
              <li>Authentication & Security</li>
              <li>API Development</li>
            </ul>
          </div>

          {/* Card 5 */}
          <div className="expertise-card">
            <FaPalette className="icon" />
            <h3>UI/UX Design</h3>
            <ul>
              <li>Figma & Design Tools</li>
              <li>User Experience Design</li>
              <li>Color Theory & Typography</li>
              <li>Wireframing & Prototyping</li>
            </ul>
          </div>

          {/* Card 6 */}
          <div className="expertise-card">
            <FaGitAlt className="icon" />
            <h3>DevOps & Tools</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Docker & Containerization</li>
              <li>CI/CD Pipelines</li>
              <li>AWS Deployment</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Expertise;
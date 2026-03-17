import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Synergy Telematics Pvt Ltd",
      position: "Flutter App Developer",
      duration: "2 Years",
      period: "2024 - Present",
      description: "Developed and maintained cross-platform mobile applications using Flutter framework. Collaborated with product teams to deliver high-performance applications with seamless user experiences.",
      responsibilities: [
        "Built responsive Flutter applications for iOS and Android",
        "Optimized app performance and reduced load times by 40%",
        "Implemented Firebase integration for real-time data synchronization",
        "Conducted code reviews and mentored junior developers"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "REST API", "State Management"]
    },
    {
      id: 2,
      company: "Cyfuter Pvt Ltd",
      position: "Flutter & Native App Developer",
      duration: "2 Years",
      period: "2022 - 2024",
      description: "Developed cross-platform and native mobile applications delivering robust solutions for complex business requirements.",
      responsibilities: [
        "Developed Flutter applications with custom UI components",
        "Built native Android applications using Kotlin and Java",
        "Implemented payment gateway integration (Stripe, PayPal)",
        "Managed app releases and versioning on Play Store and App Store"
      ],
      technologies: ["Flutter", "Kotlin", "Java", "Android Native", "SQLite", "REST API"]
    },
    {
      id: 3,
      company: "Intigate Private Ltd",
      position: "Android Native App Developer",
      duration: "1+ Years",
      period: "2021 - 2022",
      description: "Specialized in native Android development, building feature-rich applications with optimized performance and user engagement.",
      responsibilities: [
        "Developed Android applications using Java and Android SDK",
        "Implemented Material Design principles for intuitive UI/UX",
        "Integrated third-party APIs and libraries",
        "Debugged and optimized app performance for various devices"
      ],
      technologies: ["Java", "Kotlin", "Android SDK", "Material Design", "SQLite"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title"><span>03.</span> Experience</h2>
        <p className="section-subtitle">My Professional Journey</p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <div className="company-info">
                  <h3 className="company-name">{exp.company}</h3>
                  <p className="position">{exp.position}</p>
                </div>
                <span className="duration-badge">{exp.duration}</span>
              </div>

              <p className="period">{exp.period}</p>

              <p className="description">{exp.description}</p>

              <div className="responsibilities">
                <h4>Key Achievements:</h4>
                <ul>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="tech-stack">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {index < experiences.length - 1 && <div className="timeline-line"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
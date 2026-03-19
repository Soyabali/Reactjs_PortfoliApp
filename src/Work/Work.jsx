import "./Work.css";

const Work = () => {
  const workExperience = [
    // this is a local datat
    {
      id: 1,
      year: "2023 - Present",
      title: "Senior Mobile Developer",
      company: "Tech Startup Inc.",
      description: "Leading mobile app development team, architecting scalable Flutter solutions for 500K+ users",
      tech: ["Flutter", "Firebase", "Dart", "REST API"],
      highlights: ["Led team of 3 developers", "Increased app ratings from 3.8 to 4.7 stars", "Reduced app crash rate by 60%"]
    },
    {
      id: 2,
      year: "2020 - 2023",
      title: "Mobile Developer",
      company: "Digital Solutions Ltd.",
      description: "Developed 5+ production-grade mobile apps using Flutter & Native Android for enterprise clients",
      tech: ["Flutter", "Android Native", "Kotlin", "Java", "Firebase"],
      highlights: ["Published 5 apps on Google Play & App Store", "100K+ downloads across apps", "Implemented real-time sync features"]
    },
    {
      id: 3,
      year: "2018 - 2020",
      title: "Junior Mobile Developer",
      company: "Mobile First Agency",
      description: "Built native Android apps and contributed to Flutter migration project",
      tech: ["Android Native", "Java", "XML", "Firebase Realtime DB"],
      highlights: ["Completed 8 client projects", "Learned Flutter framework", "Mentored 1 junior developer"]
    }
  ];

  return (
    <section id="work" className="work-section">
      <div className="work-container">
        <h2 className="section-title">
          <span>03.</span> Work Experience
        </h2>
        <p className="section-subtitle">6+ Years of Mobile App Development Expertise</p>

        <div className="work-timeline">
          {workExperience.map((work) => (
            <div key={work.id} className="work-item">
              <div className="work-marker"></div>
              <div className="work-content">
                <div className="work-header">
                  <span className="work-year">{work.year}</span>
                  <h3 className="work-title">{work.title}</h3>
                  <p className="work-company">{work.company}</p>
                </div>
                <p className="work-description">{work.description}</p>
                
                <div className="tech-stack">
                  {work.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <ul className="highlights">
                  {work.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
import { projectsData } from "../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title"><span>05.</span> Projects</h2>
        <p className="section-subtitle">My Featured Work</p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.category}</p>
              <p className="tech">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
import { useState } from "react";
import "./ProjectsGrid.css";

const projectData = [
  {
    id: 1,
    title: "Noida Citizen App",
    category: "Mobile",
    tech: "Flutter • Firebase • REST API",
    image: "https://via.placeholder.com/400x250",
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Web",
    tech: "ReactJS • CSS • Responsive",
    image: "https://via.placeholder.com/400x250",
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    category: "Dashboard",
    tech: "React • ChartJS • API",
    image: "https://via.placeholder.com/400x250",
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "E-Commerce App",
    category: "Mobile",
    tech: "Flutter • Stripe • Firebase",
    image: "https://via.placeholder.com/400x250",
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "Landing Page",
    category: "Web",
    tech: "HTML • CSS • Animation",
    image: "https://via.placeholder.com/400x250",
    github: "#",
    live: "#",
  },
  {
    id: 6,
    title: "Analytics Panel",
    category: "Dashboard",
    tech: "React • API • Charts",
    image: "https://via.placeholder.com/400x250",
    github: "#",
    live: "#",
  },
];

function ProjectsGrid() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((project) => project.category === filter);

  return (
    <section className="projects-grid-section">
      <div className="container">

        <h2 className="section-title">
          <span>06.</span> Projects Gallery
        </h2>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {["All", "Web", "Mobile", "Dashboard"].map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={filter === btn ? "active" : ""}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <img src={project.image} alt={project.title} />

              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="category">{project.category}</p>
                <p className="tech">{project.tech}</p>

                <div className="links">
                  <a href={project.github}>GitHub</a>
                  <a href={project.live}>Live</a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProjectsGrid;
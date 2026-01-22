import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Starbucks Website Clone",
      description: "Developed a Starbucks landing page clone using HTML, CSS, and Bootstrap.",
      tech: "HTML, CSS, Bootstrap",
      link: "https://github.com/saloniwarang20/starbucks-clone"
    },
    {
      title: "Memory Card Game",
      description: "Developed core game logic for flipping, matching, and tracking pairs with smooth animations.",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/saloniwarang20/memory-card-game"
    },
    {
      title: "Eventra – Event Management Platform ",
      description: "Developed a full stack event management system with real time chat, task assignment, user roles, and calendar scheduling",
      tech: "MERN Stack, Tailwind",
      link: "https://github.com/saloniwarang20/Eventra"
    }
  ];

  return (
    <section className="section">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="card project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech-stack">
              <strong>Tech Stack:</strong> {project.tech}
            </p>
            <a href={project.link}>View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

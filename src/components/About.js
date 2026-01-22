import React from "react";

const About = () => {
  return (
    <section className="section">
      <h1>About Me</h1>
      <div className="about-content">
        <p>
          I am a passionate Computer Science student with a keen interest in full-stack web development,
          building scalable applications, and creating seamless user experiences. I love working with modern
          technologies and continuously learning new frameworks and best practices.
        </p>
        <div className="about-highlights">
          <div className="highlight-card">
            <h4>🚀 Innovation</h4>
            <p>Always exploring cutting-edge technologies</p>
          </div>
          <div className="highlight-card">
            <h4>💻 Development</h4>
            <p>Building interactive web applications</p>
          </div>
          <div className="highlight-card">
            <h4>🎨 Design</h4>
            <p>Creating beautiful and intuitive interfaces</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

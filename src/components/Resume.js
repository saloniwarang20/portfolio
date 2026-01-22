import React from "react";

const Resume = () => {
  return (
    <section className="section">
      <h1>Resume</h1>
      <div className="resume-container">
        <div className="resume-section">
          <h3>Education</h3>
          <div className="resume-item">
            <h4>Bachelor of Science in Computer Science</h4>
            <p className="resume-detail">B.K. Birla College, Kalyan • Graduation: 2026</p>
            <p>CGPA: 9.18</p>
          </div>
        </div>

        <div className="resume-section">
          <h3>Certifications</h3>
          <div className="resume-item">
            <p>✓ Web Development Essentials - ITVdeant, Kalyan(2025)</p>
            <p>✓ JavaScript Essentials - ITVdeant, Kalyan(2025)</p>
          </div>
        </div>

        <a href="/SaloniWarang_Resume.pdf" download className="download-btn">
          📥 Download Full Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;

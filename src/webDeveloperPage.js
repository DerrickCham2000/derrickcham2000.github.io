import React from 'react';
import './webDeveloperPage.css'; // Import the CSS file for styling

function WebDeveloperPage() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to My Web Developer Portfolio</h1>
      </header>
      <section className="section">
        <h2>About Me</h2>
        <p>
          Hi, I'm [Your Name], a recently graduated web developer passionate about building modern and user-friendly web applications. I have experience in HTML, CSS, JavaScript, and various frameworks like React and Angular.
        </p>
      </section>
      <section className="section">
        <h2>Skills</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>ReactJS</li>
          <li>Angular</li>
          <li>Bootstrap</li>
          <li>Git</li>
          <li>RESTful APIs</li>
          <li>Responsive Web Design</li>
        </ul>
      </section>
      <section className="section">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of the project</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of the project</p>
        </div>
        <div className="project">
          <h3>Project 3</h3>
          <p>Description of the project</p>
        </div>
      </section>
      <section className="section">
        <h2>Contact Me</h2>
        <p>
          Email: [Your Email]<br />
          Phone: [Your Phone Number]<br />
          LinkedIn: [Your LinkedIn Profile Link]<br />
          GitHub: [Your GitHub Profile Link]<br />
        </p>
      </section>
    </div>
  );
}

export default WebDeveloperPage;

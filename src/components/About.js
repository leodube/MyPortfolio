import React from "react";

const About = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-8">
        <h1 className="mt-3 mb-1">About Leo Dubé</h1>
        <p>
          A paragraph or two about me. Raised in Thunder Bay. Work Experience.
          Hobbies.
        </p>
        <h4>Links</h4>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/leo-dube/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/leodube" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:leo.s.dube@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;

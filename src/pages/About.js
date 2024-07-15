import React from "react";

const About = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-11 col-md-8 mb-3">
        <h1 className="mt-3 mb-4">About Leo Dubé</h1>
        <p>
          🙋‍♂️ I'm a computer engineering graduate from Queen's University who is
          currently based in Victoria, British Columbia. I have 5+ years of
          professional development experience. I am currently looking for fun
          web development or software engineering opportunities in North
          America.
        </p>
        <p>🌲 Fun fact about me: I have planted over a 450,000 trees.</p>
        <p className="p text-muted my-4">
          📍 When I'm not coding, I like to go exploring.
        </p>
        <h4 className="h4 mt-1">Links</h4>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/leodube/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/leodube" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:contact@leodube.ca">Email</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;

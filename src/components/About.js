import React from "react";

const About = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <h1 className="mt-3 mb-4">About Leo Dubé</h1>
        <p>
          I'm a computer engineering graduate from Queen's University. Originally from Thunder Bay, I'm currently living in Kingston. My work experience include 16 months in an IT position at Resolute Forest Products. I am now looking for a fun and interesting developer career in North America.
        </p>
        <p>
          This past summer I disappeared into the bushes of northwestern Ontario and planted over 74,000 trees.
        </p>
        <p className="p text-muted my-5">
          When I'm not coding I like to go exploring.
        </p>
        <h4 className="h4 mt-1">Links</h4>
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

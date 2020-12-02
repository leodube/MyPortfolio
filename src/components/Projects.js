import React from "react";
import otisImg from "/public/images/otis.png";
import statstickImg from "/public/images/statstick.png";
import statstickMLImg from "/public/images/statstickML.png";
import websiteImg from "/public/images/website.png";

const Projects = () => {
  return (
    <>
      <h1 className="text-left mt-3 mb-5">Projects</h1>
      <div className="row justify-content-start">
        <div className="col-lg-6 d-flex">
          <div className="card shadow-sm mb-3">
            <img
              className="card-img-top border-bottom"
              src={websiteImg}
              alt="Card image cap"
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">This website!</h5>
                <a
                  href="https://github.com/leodube/portfolio"
                  target="_blank"
                  class="btn btn-primary"
                >
                  View Code
                </a>
              </div>
              <p className="card-text mt-3">
                This responsive single-page application was built using React and Bootstrap.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex">
          <div className="card shadow-sm mb-3">
            <img className="card-img-top" src={otisImg} alt="Card image cap" />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">OTIS Web Application</h5>
                <a href="#" class="btn btn-secondary ml-auto disabled">
                  Private Code
                </a>
              </div>
              <h6 className="card-subtitle mb-2 text-muted">
                For Resolute Forest Products
              </h6>
              <p className="card-text">
                An intranet-based document management system for pulp and paper mill operators. It was built using ASP.NET.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex">
          <div className="card shadow-sm mb-3">
            <img
              className="card-img-top border-bottom"
              src={statstickImg}
              alt="Card image cap"
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">StatStick iOS Application</h5>
                <a
                  href="https://github.com/leodube/statstick-app"
                  target="_blank"
                  class="btn btn-primary"
                >
                  View Code
                </a>
              </div>
              <h6 className="card-subtitle mb-2 text-muted">
                Fourth Year Capstone Project
              </h6>
              <p className="card-text">An iPad application that displays hockey stick action data from an API endpoint. It was built using Swift.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex">
          <div className="card shadow-sm mb-3">
            <img
              className="card-img-top border-bottom"
              src={statstickMLImg}
              alt="Card image cap"
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">StatStick Algorithm</h5>
                <a
                  href="https://github.com/leodube/statstick-ml"
                  target="_blank"
                  class="btn btn-primary"
                >
                  View Code
                </a>
              </div>
              <h6 className="card-subtitle mb-2 text-muted">
                Fourth Year Capstone Project
              </h6>
              <p className="card-text">A machine learning algorithm that takes raw sensor data and predicts hockey stick actions using dynamic time warping and fuzzy clustering. It was built using Python.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

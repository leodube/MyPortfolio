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
              <h5 className="card-title">This website!</h5>
              <p className="card-text mt-3">
                This responsive single-page application was built using React
                and Bootstrap.
              </p>
            </div>
            <div className="d-flex mt-auto justify-content-center mb-3">
              <a
                href="https://github.com/leodube/portfolio"
                target="_blank"
                class="btn btn-primary"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex">
          <div className="card shadow-sm mb-3">
            <img className="card-img-top" src={otisImg} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">OTIS Web Application</h5>
              <h6 className="card-subtitle mb-2 text-muted">At Resolute FP</h6>
              <p className="card-text">
                An intranet-based document management system for pulp and paper
                mill operators. Built using ASP.NET.
              </p>
            </div>
            <div className="d-flex mt-auto justify-content-center mb-3">
              <a href="#" class="btn btn-secondary disabled">
                Private Code
              </a>
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
              <h5 className="card-title">StatStick iOS Application</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                4th Year Capstone Project
              </h6>
              <p className="card-text">
                An iPad application that displays hockey stick action data from
                an API endpoint. Built using Swift.
              </p>
            </div>
            <div className="d-flex mt-auto justify-content-center mb-3">
              <a
                href="https://github.com/leodube/statstick-app"
                target="_blank"
                class="btn btn-primary"
              >
                View Code
              </a>
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
              <h5 className="card-title">StatStick Algorithm</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                4th Year Capstone Project
              </h6>
              <p className="card-text">
                A machine learning algorithm that takes raw sensor data and
                predicts hockey stick actions using dynamic time warping and
                fuzzy clustering. Built using Python.
              </p>
            </div>
            <div className="d-flex mt-auto justify-content-center mb-3">
              <a
                href="https://github.com/leodube/statstick-ml"
                target="_blank"
                class="btn btn-primary"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

import React from "react";
import profilePic from "/public/me.jpeg";

const Home = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-8">
        <img
          id="profile-pic"
          src={profilePic}
          alt="Profile photo"
          width="250"
          height="250"
          className="img-fluid img-thumbnail rounded-circle mx-auto d-block"
        />
        <h1 className="text-center mt-3 mb-1">Leo Dubé</h1>
        <h4 className="text-center text-muted font-weight-light">
          Computer Engineer and Aspiring Adventurer
        </h4>
        <p className="text-center text-muted mt-4">Something else here</p>
      </div>
    </div>
  );
};

export default Home;

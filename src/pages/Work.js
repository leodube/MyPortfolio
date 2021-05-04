import React from "react";
import { Card } from "../components";

import otisImg from "../images/otis.png";
import tcdImg from "../images/thecleandivorce.png";
import fdfImg from "../images/funnyduckfarms.png";

const Work = () => {
  return (
    <>
      <h1 className="text-left mt-3 mb-5">Work</h1>
      <div className="row justify-content-start">
        <div className="col-lg-6 d-flex">
          <Card
            title="Funny Duck Farms"
            subtitle="As Web Developer at Invest Ottawa"
            image={fdfImg}
            description="Built using Local Line Sites."
            btnText="View Website"
            btnLink="https://www.funnyduckfarms.com/"
          />
        </div>
        <div className="col-lg-6 d-flex">
          <Card
            title="The Clean Divorce"
            subtitle="As Web Developer at Invest Ottawa"
            image={tcdImg}
            description="Built using Wix."
            btnText="View Website"
            btnLink="https://www.thecleandivorce.com/"
          />
        </div>
        <div className="col-lg-6 d-flex">
          <Card
            title="OTIS Web Application"
            subtitle="As Software Developer at Resolute FP"
            image={otisImg}
            description="An intranet-based document management system for pulp and paper mill operators. Built using ASP.NET."
            btnText="Private Code"
            btnLink="#"
            btnDeactivate
          />
        </div>
      </div>
    </>
  );
};

export default Work;

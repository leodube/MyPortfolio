import React from "react";

const CardOneButton = (props) => {
  return (
    <div className="card shadow-sm mb-3">
      <img
        className="card-img-top border-bottom"
        src={props.image}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        {props.subtitle ? (
          <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
        ) : (
          <></>
        )}
        <p className="card-text">{props.description}</p>
      </div>
      <div className="row d-flex mt-auto justify-content-center mb-3">
        <div className="col-5 col-sm-4">
          {props.btnDeactivate ? (
            <a href="#" className="btn btn-secondary btn-block disabled">
              {props.btnText}
            </a>
          ) : (
            <a
              href={props.btnLink}
              target="_blank"
              className="btn btn-primary btn-block"
            >
              {props.btnText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardOneButton;

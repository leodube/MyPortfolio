import React from "react";

const CardTwoButtons = (props) => {
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
      <div className="row d-flex mt-auto mb-3 justify-content-center">
        <div className="col-5 col-sm-4">
          <a
            href={props.leftBtnLink}
            target="_blank"
            class="btn btn-primary btn-block"
          >
            {props.leftBtnText}
          </a>
        </div>
        <div className="col-5 col-sm-4">
          <a
            href={props.rightBtnLink}
            target="_blank"
            class="btn btn-primary btn-block"
          >
            {props.rightBtnText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardTwoButtons;

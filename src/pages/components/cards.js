import React from "react";

const Cards = (props) => {
  return (
    <>
      <div className={"row mx-auto mb-2 " + props.col}>
        <img src={props.img} className="col-12 p-0" />
        <p className="fw-bold text-uppercase m-2 me-0 px-0 col-12">
          {props.name}
        </p>
        <p className="ms-2 px-0 col-12 me-0">{props.children}</p>
      </div>
    </>
  );
};

export default Cards;

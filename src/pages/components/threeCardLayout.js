import React from "react";

const ThreeCardLayout = (props) => {
  return (
    <>
      <div className="row col-11 mx-auto">
        <div className="row col-12 col-md-5 col-lg-5 mx-auto py-md-5">
          <img src={props.pic1} className="col-12 my-1 p-0" />

          <img src={props.pic2} className="col-12 my-1 p-0" />
        </div>
        <div className="col-12 col-md-7 mx-auto row">
          <img src={props.pic3} className="col-12 my-3 my-md-5 mx-auto" />
        </div>
      </div>
    </>
  );
};

export default ThreeCardLayout;

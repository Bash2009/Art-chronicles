import React from "react";
import { Link } from "react-router-dom";

const Category = (props) => {
  return (
    <>
      <div className="col-12 col-md-6 mb-5">
        <Link to={props.link} className="text-dark text-decoration-none row h-100">
          <img src={props.logo} className="col-9 col-md-5 mx-auto mb-3" />
          <p className="text-center fs-4 fw-bold mx-auto my-0 my-md-2">{props.title}</p>
          <p className="text-center col-10 mx-auto my-0 my-md-2">{props.children}</p>
        </Link>
      </div>
    </>
  );
};

export default Category;

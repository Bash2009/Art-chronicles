import React from "react";

const MainHead = (props) => {
  const styles = {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)) ,url(" +
      props.img +
      ")",
    backgroundSize: "140dvw",
    backgroundPosition: 'center'
  };

  const title = props.title.split(" ");

  return (
    <>
      <div style={styles} className="py-3 py-lg-5 text-center text-white">
        <p className={props.smclasses}>
          {props.smhead}
        </p>
        <p className="fs-1 fw-bold">
          <span className="text-dark">{title[0]}</span> {title[1]}
        </p>

        <p className="col-10 col-md-6 mx-auto">{props.children}</p>

        <button className="btn bg-dark text-white px-4 rounded-0">
          {props.btn}
        </button>
      </div>
    </>
  );
};

export default MainHead;

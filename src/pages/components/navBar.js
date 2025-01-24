import React from "react";
import { Link } from "react-router";

const NavBar = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md px-3">
        <Link to="/Art-chronicles" className="navbar-brand fw-bold">
          Art Chronicles
        </Link>
        <button
          className="btn d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#" + props.id}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id={props.id}>
          <div className="navbar-nav ms-auto">
            <Link to="/Art-chronicles" className="nav-link">
              About
            </Link>

            <div className="d-none d-md-block dropdown">
              <Link
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-target="#nav-dropdown"
              >
                Gallery
              </Link>

              <ul className="dropdown-menu" id="nav-dropdown">
                <li>
                  <Link to="/modernArt" className="dropdown-item">
                    Modern Arts
                  </Link>
                </li>
                <li>
                  <Link to="/renaissanceArt" className="dropdown-item">
                    Renaissance Arts
                  </Link>
                </li>
              </ul>
            </div>

            <Link to="/modernArt" className="nav-link d-block d-md-none">
              Modern Art
            </Link>

            <Link to="/renaissanceArt" className="nav-link d-block d-md-none">
              Renaissance Art
            </Link>

            <a href="#contactUs" className="nav-link">
              Contacts
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;

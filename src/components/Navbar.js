import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar({ title, aboutText, mode, toggleMode }) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {title}
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                {/*<Link className="nav-link" to="/about">
                  {aboutText}
                </Link>*/}
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${
                mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable DarkMode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Title Text here",
  aboutText: "About Text here",
};

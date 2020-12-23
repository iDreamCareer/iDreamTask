import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import "../Styles/NavBar.css";

function NavBar() {
  useEffect(() => {});

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand text-dark" to="/">
          Ck Task
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse my-2 my-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ">
            <li className="nav-item "></li>
            <li className="nav-item ">
              <Link className="nav-link" to="/showdevices">
                Show_Devices
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="#">
                Link2
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="#">
                Link3
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="#">
                Link4
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

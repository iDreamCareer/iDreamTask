import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import "../Styles/NavBar.css";

function NavBar() {
  useEffect(() => {});

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link class="navbar-brand text-dark" to="/">
          Ck Task
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse my-2 my-lg-0"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ">
            <li class="nav-item "></li>
            <li class="nav-item ">
              <Link class="nav-link" to="/showdevices">
                Show_Devices
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link" to="#">
                Link2
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link" to="#">
                Link3
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link" to="#">
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

import React from 'react';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md">
        <img src="images/logo-transparent-png.png" id="logo" alt="Logo" />
        <h5 id="brandname">Tours and Travels</h5>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Packages
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  United-States
                </a>
                <a className="dropdown-item" href="#">
                  India
                </a>
                <a className="dropdown-item" href="#">
                  France
                </a>
                <a className="dropdown-item" href="#">
                  Germany
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
          </ul>
        </div>

        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-warning my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>

        <div className="icons">
          <a href="#loginmodal" data-toggle="modal">
            <img
              src="images/userthumnaill-removebg-preview.png"
              alt="User Icon"
            />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

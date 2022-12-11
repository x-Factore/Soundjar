import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ user, logout }) {
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout();
    window.location.reload(false);
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact 
                </Link>
              </li>
            </ul>
            <Link className="navbar-brand  fw-bolder fs-4 mx-auto" to ="/home">Soundjar</Link>
            {!user ? (
              <>
                <Link
                  className="btn btn-outline-primary ms-auto px-4 rounded-pill"
                  to="/login"
                >
                  <i className="fa fa-sign-in ms-2 "></i> Login
                </Link>
                <Link
                  className="btn btn-outline-primary ms-2 px-4 rounded-pill"
                  to="/register"
                >
                  <i className="fa fa-user-plus me-2"></i>Register
                </Link>
              </>
            ) : (
              <Link
                className="btn btn-outline-primary ms-2 px-4 rounded-pill"
                onClick={logoutHandler}
              >
                <i className="fa fa-sign-out"></i>
                Logout
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

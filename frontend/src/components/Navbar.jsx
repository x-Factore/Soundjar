import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ user, logout }) {
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout();
    window.location.reload(false);
    navigate("/");
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/service">
                  Services
                </Link>
              </li>
            </ul>
            <a class="navbar-brand fw-bolder fs-4 mx-auto">Soundjar</a>
            {!user ? (
              <>
                <Link
                  className="btn btn-outline-primary ms-auto px-4 rounded-pill"
                  to="/"
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
                to="/register"
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

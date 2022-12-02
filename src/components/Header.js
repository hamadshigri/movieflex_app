import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            MOVIE FLEX
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {/* <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/">
                Trending
              </Link>
              <Link className="nav-link" to="/">
                Pricing
              </Link> */}
          </div>
          <div className="btn-main">
            <div className="btn-group">
              <Link className="nav-link" to="/signin">
                <button type="button" className="btn btn-log">
                  Sign In
                </button>
              </Link>
              <Link className="nav-link" to="/signup">
                <button type="button" className="btn btn-log">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* </div> */}
      </nav>
    </div>
  );
};

export default Header;

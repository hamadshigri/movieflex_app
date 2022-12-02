import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className="container main-signin">
        <form>
          <div className="row mb-3">
            <label
              for="inputEmail3"
              className="col-sm-2 col-form-label text-label"
            >
              Email
            </label>
            <div>
              <input type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="row mb-3">
            <label
              for="inputPassword3"
              className="col-sm-2 col-form-label text-label"
            >
              Password
            </label>
            <div>
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="signup-link">
              Don't have an account? <Link to="/signup">SignUp</Link>
            </div>
          </div>
          <button type="submit" className="btn btn-primary signin-btn">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default SignIn;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div className="container main-signin">
        <form>
          <div className="row mb-3">
            <label
              for="inputEmail3"
              className="col-sm-2 col-form-label text-label"
            >
              First Name
            </label>
            <div>
              <input
                type="text"
                name="firstname"
                className="form-control"
                id="firstname"
                value={user.firstname}
                onChange={handleInputs}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              for="inputEmail3"
              className="col-sm-2 col-form-label text-label"
            >
              Last Name
            </label>
            <div>
              <input
                type="text"
                name="lastname"
                className="form-control"
                id="lastname"
                value={user.lastname}
                onChange={handleInputs}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              for="inputEmail3"
              className="col-sm-2 col-form-label text-label"
            >
              Email
            </label>
            <div>
              <input
                type="email"
                name="email"
                className="form-control"
                id="inputEmail3"
                value={user.email}
                onChange={handleInputs}
              />
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
                name="password"
                className="form-control"
                id="inputPassword3"
                value={user.password}
                onChange={handleInputs}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="signup-link">
              Already have an account? <Link to="/signin"> SignIn </Link>
            </div>
          </div>
          <button type="submit" className="btn btn-primary signup-btn">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;

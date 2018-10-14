import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const SignUp = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card mx-xl-5">
            <div className="card-body" id="card">
              <form>
                <p className="h4 text-center py-4">SIGN UP</p>
                <label htmlFor="" className="grey-text font-weight-light">
                  Username
                </label>
                <input
                  id=""
                  className="form-control"
                  value={props.username}
                  onChange={props.handleChange}
                  name="username"
                  type="email"
                  placeholder="example@email.com"
                />
                <br />
                <label htmlFor="" className="grey-text font-weight-light">
                  Password
                </label>
                <input
                  id=""
                  className="form-control"
                  name="password"
                  type="password"
                  value={props.password}
                  onChange={props.handleChange}
                />
                <div className="text-center py-4 mt-3">
                  <button
                    name="/auth/signin"
                    onClick={props.handleSubmit}
                    className="btn btn-primary"
                    type="submit"
                  >
                    Sign Up
                  </button>
                  <br />
                  <span>Have an account?</span>
                  <Link to="/"> SignIn</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

//import { Outlet, Link } from "react-router-dom";

import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  state = {
    name: "",
    phone: "",
    email: "",
    password: "",
  };
  handleName = (e) => {
    this.setState({ name: e.target.value });
  };
  handlePhone = (e) => {
    this.setState({ phone: e.target.value });
  };
  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  handleSignup = (e) => {
    console.log(this.state.name);
    console.log(this.state.phone);
    console.log(this.state.email);
    console.log(this.state.password);
  };

  render() {
    return (
      <>
        <body className="bg-gradient-primary">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-12 col-md-9">
                <div className="card o-hidden border-0 shadow-lg my-5">
                  <div className="card-body p-0">
                    <div className="row">
                      <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                      <div className="col-lg-6">
                        <div className="p-5">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Sign Up</h1>
                          </div>
                          <form className="user">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control form-control-user"
                                value={this.state.name}
                                id="exampleInputName"
                                placeholder="Name"
                                onChange={this.handleName}
                              />
                            </div>
                            <div class="form-group">
                              <input
                                type="text"
                                className="form-control form-control-user"
                                value={this.state.phone}
                                id="exampleInputPhone"
                                placeholder="Phone No."
                                onChange={this.handlePhone}
                              />
                            </div>
                            <div class="form-group">
                              <input
                                type="email"
                                className="form-control form-control-user"
                                value={this.state.email}
                                id="exampleInputEmail"
                                aria-describedby="emailHelp"
                                placeholder="Email"
                                onChange={this.handleEmail}
                              />
                            </div>
                            <div class="form-group">
                              <input
                                type="password"
                                className="form-control form-control-user"
                                value={this.state.password}
                                id="exampleInputPassword"
                                placeholder="Password"
                                onChange={this.handlePassword}
                              />
                            </div>
                            <div class="form-group">
                              <div class="custom-control custom-checkbox small">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck"
                                />
                              </div>
                            </div>
                            <button
                              href="index.html"
                              className="btn btn-primary btn-user btn-block"
                              value="Signup"
                              type="button"
                              onClick={this.handleSignup}
                            >
                              Signup
                            </button>

                            <hr />
                            <a
                              href="index.html"
                              className="btn btn-google btn-user btn-block"
                            >
                              <i className="fab fa-google fa-fw"></i> Login with
                              Google
                            </a>
                          </form>
                          <hr />
                          <div class="text-center">
                            <Link to={{ pathname: "/login" }}>Login</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script src="../vendor/jquery/jquery.min.js"></script>
          <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

          <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

          <script src="../js/sb-admin-2.min.js"></script>
        </body>
      </>
    );
  }
}

export default Signup;

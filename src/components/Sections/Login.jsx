import { React, useContext, useState } from "react";
import "./styles.css";
import { Link } from 'react-router-dom';
import AuthContext from "../../context/AuthContext";

export default function Login()  {
    const { loginUser } = useContext(AuthContext);
    const handleSubmit = (e) => {
      e.preventDefault();
      const username = e.target.uname.value;
      const password = e.target.password.value;

      username.length > 2 && loginUser(username, password);

      console.log(username);
      console.log(password);
    };
    return (
      <html
        lang="en"
        className="light-style layout-wide customizer-hide"
        dir="ltr"
        data-theme="theme-default"
        data-assets-path="../assets/"
        data-template="vertical-menu-template-free"
      >
        <body>
          <div className="container-xxl">
            <div className="authentication-wrapper authentication-basic container-p-y">
              <div className="authentication-inner">
                <div className="card">
                  <div className="card-body">
                    <div className="app-brand justify-content-center">
                      <a href="index.html" className="app-brand-link gap-2">
                        <span className="app-brand-logo demo">
                          {/* Your SVG logo code goes here */}
                        </span>
                        <span className="app-brand-text demo text-body fw-bold">
                          FinVise
                        </span>
                      </a>
                    </div>
                    {/* /Logo */}
                    <h4 className="mb-2">Welcome to FinVise! 👋</h4>
                    <p className="mb-4">
                      Please sign-in to your account and start your Financial
                      Journey.
                    </p>
                    <form
                      id="formAuthentication"
                      className="mb-3"
                      action="index.html"
                      onSubmit={handleSubmit}
                    >
                      <div className="mb-3">
                        <label htmlFor="uname" className="form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="uname"
                          name="uname"
                          placeholder="Enter your username"
                          autoFocus
                        />
                      </div>
                      <div className="mb-3 form-password-toggle">
                        <div className="d-flex justify-content-between">
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <Link to="/forgetpass">
                            <small>Forgot Password?</small>
                          </Link>
                        </div>
                        <div className="input-group input-group-merge">
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            name="password"
                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            aria-describedby="password"
                          />
                          <span className="input-group-text cursor-pointer">
                            <i className="bx bx-hide"></i>
                          </span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="remember-me"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="remember-me"
                          >
                            {" "}
                            Remember Me{" "}
                          </label>
                        </div>
                      </div>
                      <div className="mb-3">
                        <button
                          className="btn btn-primary d-grid w-100"
                          type="submit"
                          onSubmit={handleSubmit}
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                    <p className="text-center">
                      <span>New on our platform?</span>
                        <Link to="/signup">
                          <span>Create an account</span>
                          </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
}



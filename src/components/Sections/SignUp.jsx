import { React, useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";

import "./styles.css";

export default function SignUp()  {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { registerUser } = useContext(AuthContext);

  console.log(email);
  console.log(username);
  console.log(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(username, first_name, last_name, password, email, phone);
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
                        {/* SVG Logo */}
                      </span>
                      <span className="app-brand-text demo text-body fw-bold">
                        FinVise
                      </span>
                    </a>
                  </div>
                  {/* /Logo */}
                  <h4 className="mb-2">Adventure starts here 🚀</h4>
                  <p className="mb-4">
                    Make your Financial Decisions mindfully.
                  </p>

                  <form
                    id="formAuthentication"
                    className="mb-3"
                    action="index.html"
                    onSubmit={handleSubmit}
                  >
                    <div className="mb-3">
                      <label htmlFor="fname" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fname"
                        name="fname"
                        placeholder="Enter your First Name"
                        onChange={(e) => setfirst_name(e.target.value)}
                        autoFocus
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="lname" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lname"
                        name="lname"
                        placeholder="Enter your Last Name"
                        onChange={(e) => setlast_name(e.target.value)}
                        autoFocus
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phoneno" className="form-label">
                        Phone No.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        onChange={e => setphone(e.target.value)}
                        placeholder="Enter your Phone Number"
                        autoFocus
                      />
                    </div>
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
                        onChange={e => setUsername(e.target.value)} 
                        autoFocus
                      />
                    </div>

                    <div className="mb-3 form-password-toggle">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          name="password"
                          onChange={e => setPassword(e.target.value) }
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
                          id="terms-conditions"
                          name="terms"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="terms-conditions"
                        >
                          I agree to
                          <a href="javascript:void(0);">
                            privacy policy & terms
                          </a>
                        </label>
                      </div>
                    </div>
                    <button className="btn btn-primary d-grid w-100">
                      Sign up
                    </button>
                  </form>

                  <p className="text-center">
                    <span>Already have an account?</span>
                    <a href="auth-login-basic.html">
                      <span>Sign in instead</span>
                    </a>
                  </p>
                </div>
              </div>
              {/* Register Card */}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}


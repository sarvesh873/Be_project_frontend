import React, { useContext, useState } from 'react';
import AuthContext from "../../context/AuthContext"; // Assuming AuthContext is exported from the file where AuthProvider is defined

export default function ForgotPass() {
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    await resetPassword(email);
    setEmailSent(true);
  };

  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner py-4">
          {/* Forgot Password */}
          <div className="card">
            <div className="card-body">
              {/* Logo */}
              <div className="app-brand justify-content-center">
                <a href="index.html" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo">
                    {/* logo */}
                  </span>
                  <span className="app-brand-text demo text-body fw-bold">FinVise</span>
                </a>
              </div>
              {/* /Logo */}
              <h4 className="mb-2">Forgot Password? 🔒</h4>
              <div>
                {emailSent ? (
                  <p>Email with password reset instructions has been sent.</p>
                ) : (
                  <>
                    <p className="mb-4">Enter your email and we'll send you instructions to reset your password</p>
                    <form onSubmit={handleResetPassword} className="mb-3">
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          autoFocus
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary d-grid w-100">Send Reset Link</button>
                    </form>
                  </>
                )}
                
                <div className="text-center">
                      <a href="auth-login-basic.html" className="d-flex align-items-center justify-content-center">
                        <i className="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
                        Back to login
                      </a>
                    </div>
              </div>
            </div>
          </div>
          {/* /Forgot Password */}
        </div>
      </div>
    </div>
  );
}

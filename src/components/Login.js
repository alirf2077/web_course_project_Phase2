import React from 'react';
// import '../styles/login.css'; // Import the corresponding CSS

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="text-center">Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          {/* <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label htmlFor="rememberMe" className="form-check-label">Remember Me</label>
          </div> */}
          <button type="submit" className="btn btn-custom w-100">Login</button>
          <div className="text-center mt-3">
            <a href="#" className="text-decoration-none forgot-password-link">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

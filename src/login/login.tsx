import React from 'react';
import './login.css';

const LoginPage = () => {
  return (
    <div className="login-container">
        <div>
      <h1>Login</h1></div>
      <form>
        <label className="login-label" htmlFor="username">Username</label>
        <input className="login-input" type="text" id="username" name="username" required />

        <label className="login-label" htmlFor="password">Password</label>
        <input className="login-input" type="password" id="password" name="password" required />

        <div className="remember-me">
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>

        <div className="login-btns">
          <button className="login-submit-btn" type="submit">Submit</button>
          <button className="login-cancel-btn" type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

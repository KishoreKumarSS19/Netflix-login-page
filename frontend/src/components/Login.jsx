import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter a valid email or phone number and password.');
      return;
    }

    try {
      console.log("Sending login request to backend with:", { email, password });
      const response = await axios.post('http://localhost:5000/login', {
        email: email.trim(),
        password: password.trim()
      });
      console.log("Backend response:", response.status, response.data);

      if (response.status === 200) {
        setError('');
        // Redirect to dashboard on successful login
        navigate('/dashboard');
      }
    } catch (err) {
      console.error("Login failed with error:", err);
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('An error occurred during login. Please try again.');
      }
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-header">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
          alt="Netflix" 
          className="netflix-logo" 
        />
      </div>
      <div className="login-container">
        <div className="login-box">
          <h2>Sign In</h2>
          {error && <div className="error-message">{error}</div>}
          <form className="login-form" onSubmit={handleLogin}>
            <div className="input-group">
              <input 
                type="text" 
                className="input-field" 
                placeholder="Email or phone number" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input 
                type="password" 
                className="input-field" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <button type="submit" className="login-btn">
              Sign In
            </button>
            
            <div className="form-help">
              <div className="remember-me">
                <input type="checkbox" id="remember" defaultChecked />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="need-help">Need help?</a>
            </div>
          </form>
          
          <div className="login-footer">
            <p className="signup-text">
              New to Netflix? <a href="#" className="signup-link">Sign up now</a>.
            </p>
            <p className="recaptcha-text">
              This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
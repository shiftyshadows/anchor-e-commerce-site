import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../utils/api'; // Utility for Axios instance
import '../styles/SignIn.css'; // Import the CSS file

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent form reload

    try {
      // Make the API call to sign in
      const response = await API.post(
        '/api/auth/signin',
        { email, password },
        { withCredentials: true }
      );

      // On successful response, handle token and redirection
      const { token, redirectUrl, message } = response.data;

      // Optionally store the token in localStorage (if needed)
      if (token) {
        localStorage.setItem('token', token);
      }

      // Redirect based on user role
      if (redirectUrl) {
        navigate(redirectUrl); // Navigate to the appropriate dashboard
      } else {
        alert(message || 'Login successful! Redirecting...');
        navigate('/dashboard'); // Default redirection
      }
    } catch (error) {
      // Handle API errors
      if (error.response) {
        // Server responded with an error
        setError(error.response.data.message || 'Invalid email or password.');
      } else {
        // Network or other errors
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h1 className="signin-title">Sign In</h1>
        {error && <p className="signin-error">{error}</p>}
        <form onSubmit={handleSignIn} className="signin-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signin-button">Sign In</button>
        </form>
        <div className="signin-links">
          <Link to="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </Link>
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

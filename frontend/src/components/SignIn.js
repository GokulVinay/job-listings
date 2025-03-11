import { Link } from "react-router-dom";
import "../styles/SignIn.css"; 

const SignIn = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Already have an account?</h2>
        <p className="auth-subtitle">Your Dream job finder</p>
        <input type="email" placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <button className="auth-button">Sign In</button>
        <p className="auth-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
      <div className="bg-image">
        <h1>Your Dream Job Finder</h1>
      </div>
    </div>
  );
};

export default SignIn;

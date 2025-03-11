import { Link } from "react-router-dom";
import "../styles/SignUp.css";

const SignUp = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Create an account</h2>
        <p className="auth-subtitle">Your Dream job finder</p>
        <input type="text" placeholder="Name" className="auth-input" />
        <input type="email" placeholder="Email" className="auth-input" />
        <input type="text" placeholder="Mobile" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <div>
        <input type="checkbox" />
        <label className="text">By creating an account, I agree to our terms of use and privacy policy</label>
        </div>
        <button className="auth-button">Create Account</button>
        <p className="auth-link">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
      <div className="bg-image">
        <h1>Your Dream Job Finder</h1>
      </div>
    </div>
  );
};

export default SignUp;

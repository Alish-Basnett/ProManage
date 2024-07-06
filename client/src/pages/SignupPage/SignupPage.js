import React, { useState, useEffect } from "react";
import "./SignupPage.css";
import promanageLogo from "../../assets/images/no_bg_black_logo.png";
import { postData } from "../../services/api"; // Import postData function

const SignupPage = ({ onClose, openLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.title = "Pro Manage - Sign Up"; // Set your desired title here
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await postData(
        "https://promanageserver-t5rl.onrender.com/api/users/register",
        {
          email,
          password,
        }
      );
      console.log("Signup response:", response);
      // Assuming successful signup, you can close the popup or redirect
      onClose();
    } catch (error) {
      console.error("Signup error:", error);
      setErrorMessage(error.response?.data || "Error signing up");
    }
  };

  return (
    <div className="popup-inner">
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
      <div className="signup-logo-wrapper">
        <img src={promanageLogo} alt="" width={170} />
      </div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <input
            type="email"
            id="email"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn signup-btn">
          Sign Up
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      <p>
        Already have an account?{" "}
        <span className="link" onClick={openLogin}>
          Login
        </span>
      </p>
    </div>
  );
};

export default SignupPage;

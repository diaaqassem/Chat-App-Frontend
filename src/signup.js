import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // if (password !== confirmPassword) {
    //   alert("Passwords do not match!");
    //   return;
    // }

    try {
      const response = await fetch(
        "https://asfour.diaaqassem.com:3000/api/auth/signup?lang=ar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, confirmPassword }),
        }
      );

      if (response.ok) {
        // alert("Sign up successful! Please log in.");
        alert("تم انشاء اكونت ,اعد تسجيل الدخول .");
        navigate("/login"); 
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Sign up failed. Please try again.");
      }
    } catch (error) {
      console.error("Sign up error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="signup-section">
      <div className="signup-page">
        <form onSubmit={handleSignUp} className="signup-form">
          {/* <h1>Sign Up</h1> */}
          <DotLottieReact
            src="https://lottie.host/3c1178f5-e240-49ce-adf5-58cc32d9acf7/jKdwWkPy3G.lottie"
            loop
            autoplay
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field-signup"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field-signup"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input-field-signup"
          />
          <button type="submit" className="btn signup-btn">
            Sign Up
          </button>
          <p className="login-prompt">
            Already have an account?{" "}
            <a
              onClick={() => navigate("/login")}
              style={{ cursor: "pointer", color: "#007bff" }}
              href=" "
            >
              Log in here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

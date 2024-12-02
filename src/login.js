import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://asfour.diaaqassem.com:3000/api/auth/logIn?lang=ar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const userId = data._id || data.userId;
        // alert(`Login successful! Your User ID is: ${userId}`);
        alert(`تم تسجيل الدخول , ودا رقمك اللي هتتعامل به : ${userId} مش مهم تحفظ الرقم المهم وجودك`);
        sessionStorage.setItem("idUser", userId);
        onLogin(data);
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Invalid email or password!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-section">
      <div className="login-page">
        <form onSubmit={handleLogin} className="login-form">
          <DotLottieReact
            src="https://lottie.host/a1f8d7af-1847-4d9a-8af7-24cb39d9fbdf/JgD08LcVoK.json"
            loop
            autoplay
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field-login"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field-login"
          />
          <button type="submit" className="btn login-btn">
            Login
          </button>
          <p className="signup-prompt">
            Don't have an account?
            <a
              onClick={() => navigate("/signup")}
              style={{ cursor: "pointer", color: "#007bff" }}
              href=" "
            >
              Sign up here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

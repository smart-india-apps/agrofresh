import React, { useState } from "react";
import { useHistory } from "react-router";
import { auth } from "../firebase";
import "../css/Login.css";
import LoginImage from "../assets/LoginImage.png";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__left">
        <h1>
          Agro<span>Fresh</span>
        </h1>
        <img src={LoginImage} alt="Image" />
      </div>
      <div className="login__right">
        <h1>
          <span>Log</span>In
        </h1>
        <h2>Email</h2>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h2>Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Login;

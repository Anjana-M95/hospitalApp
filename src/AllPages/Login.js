import { useState } from "react";
import { useAuth } from "./auth";
import { useHistory } from "react-router-dom";
import "./Login.css";
import React from "react";

export const Login = () => {
  const [user, setUser] = useState("");

  const auth = useAuth();
  const history = useHistory();

  const ChangeName = (event) => {
    setUser(event.target.value);
  };
  const handlePassword = (event) => {
    setUser(event.target.value);
  };
  const handleLogin = () => {
    auth.login(user);
    if (user === "123") {
      history.push("/");
    } else history.push("/login");
    sessionStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <div className="logbox">
      <h1>LOGIN</h1>
      <div className="Login">
        <label>Email</label>
        <br></br>
        <input id="box1" type="text" onChange={ChangeName} />
        <br></br>
        <label> Password</label>
        <br></br>
        <input id="box" type="text" onChange={handlePassword} />
        <br></br>
        <button className="button" onClick={handleLogin}>
          LogIn
        </button>
      </div>
    </div>
  );
};
export default Login;

import { useEffect, useState } from "react";
import { useAuth } from "./auth";
import { useHistory } from "react-router-dom";
import "./Login.css";
import React from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";

export const Login = () => {
  const [userEml, setUserEml] = useState("");
  const [userPswd, setUserPswd] = useState("");
  const history = useHistory();
  const auth = useAuth();

  const ChangeEmail = (event) => {
    setUserEml(event.target.value);
  };
  const handlePassword = (event) => {
    setUserPswd(event.target.value);
  };
  const handleLogin = () => {
    axios
      .post("http://127.0.0.1:3001/auth/login", {
        email: userEml,
        password: userPswd,
      })
      .then((response) => {
        console.log(response, "response");

        if (response.data.success === true) {
          auth.login(response.data.token);
          localStorage.setItem("user", response.data.token);
          console.log(response.data.token, "tokenfe");
          setUserEml("");
          setUserPswd("");
          history.push("/");
        } else {
          alert(response.data.msg);
          setUserEml("");
          setUserPswd("");
        }
        // else history.push("/login");
      });
  };
  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      history.push("/");
    }
  });

  return (
    <div className="logbox">
      <h1>LOGIN</h1>
      <div className="Login">
        <label>Email</label>
        <br></br>
        <input id="box1" type="text" onChange={ChangeEmail} value={userEml} />
        <br></br>
        <label> Password</label>
        <br></br>
        <input
          id="box"
          type="password"
          onChange={handlePassword}
          value={userPswd}
        />
        <br></br>
        <button className="button" onClick={handleLogin}>
          LogIn
        </button>
      </div>
    </div>
  );
};
export default Login;

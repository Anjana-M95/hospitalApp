import { useState } from "react";
import React from "react";
import "./signUp.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [userEml, setUserEml] = useState("");
  const [userPswd, setUserPswd] = useState("");

  const ChangeName = (event) => {
    setUserName(event.target.value);
  };

  const changeEmail = (event) => {
    setUserEml(event.target.value);
  };
  const handlePassword = (event) => {
    setUserPswd(event.target.value);
  };

  const handleSignup = async () => {
    await axios
      .post("http://localhost:3001/auth/SignUp", {
        name: userName,
        email: userEml,
        password: userPswd,
      })
      .then((response) => {
        console.log("TEST: ", response);

        if (response.data.success) {
          console.log(response);
          toast.success("user created succesfully", {
            position: toast.POSITION.TOP_CENTER,
          });
          setUserName("");
          setUserPswd("");
          setUserEml("");
        } else {
          toast.error(response.data.msg);
        }
      })
      .catch((err) => {
        console.log(err, "gfdg");
        toast.error(err.response.data.msg);
      });
  };

  return (
    <div className="Signupbox">
      <ToastContainer autoClose={false} />
      <h1>SIGNUP</h1>
      <div className="Signup">
        <label>Name</label>
        <br></br>
        <input id="box1" type="text" onChange={ChangeName} value={userName} />
        <br></br>
        <label> Email</label>
        <br></br>
        <input id="box" type="text" onChange={changeEmail} value={userEml} />
        <br></br>
        <label> Password</label>
        <br></br>
        <input
          id="box"
          type="text"
          onChange={handlePassword}
          value={userPswd}
        />
        <br></br>
        <button className="button1" onClick={handleSignup}>
          Sign Up
        </button>
      </div>
      <div className="log">
        Already have an account?
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};
export default SignUp;

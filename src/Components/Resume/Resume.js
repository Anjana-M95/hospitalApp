import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Resume.css";

function Resume() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [resume, setResume] = useState();

  const handleResume = (event) => {
    const resume = event.target.files[0];
    setResume(resume);
  };
  const handleSubmit = (event) => {
    const dataForm = new FormData();
    dataForm.append("fullName", fullName);
    dataForm.append("email", email);
    dataForm.append("phone", phone);
    dataForm.append("Address", Address);
    dataForm.append("resume", resume);
    console.log(dataForm, "dataForm");
    axios
      .post("http://127.0.0.1:3001/auth/resume", dataForm, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        if (response.data.success) {
          console.log(response, "resp");
          toast("Applied Succesfully");
          setFullName("");
          setEmail("");
          setPhone("");
          setAddress("");
          setResume("");
        }
      })
      .catch((err) => {
        console.log(err, "err");
        toast(err.response.data.msg);
      });
    event.preventDefault();
  };

  return (
    <div className="Resume">
      <ToastContainer />
      <h2>Apply for a Position</h2>
      <p>Please complete the form below to apply for a position with us.</p>
      <form className="apply">
        <label>Full Name</label>
        <br></br>
        <input
          type="text"
          name="fullname"
          value={fullName}
          onChange={(event) => {
            setFullName(event.target.value);
          }}
        />
        <br></br>
        <label>Email</label>
        <br></br>
        <input
          type="text"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br></br>
        <label>Phone</label>
        <br></br>
        <input
          type="text"
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
        <br></br>
        <label>Address</label>
        <br></br>
        <textarea
          type="text"
          value={Address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
        <br></br>

        <label>Upload your resume here</label>
        <br></br>
        <div className="resumebutton">
          <input
            name="upload-image"
            type="file"
            className="resumebutton"
            id="standard-helperText"
            label="File"
            onChange={handleResume}
          />
        </div>
        {/* <Button className="btn-choose" variant="outlined" component="span">
          Choose File
        </Button> */}

        <Button className="button" type="submit" onClick={handleSubmit}>
          SUBMIT
        </Button>
      </form>
    </div>
  );
}

export default Resume;

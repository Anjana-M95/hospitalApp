import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Explore.css";
function Explore() {
  // const [eTitle, setETitle] = useState("");
  // const [eContent, setEContent] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();
  useEffect(() => {
    console.log("useeffect");
    console.log(localStorage.getItem("user"));
    axios
      .get("http://127.0.0.1:3001/auth/details", {
        headers: { authorization: localStorage.getItem("user") },
      })

      .then((response) => {
        if (response.data.auth === false) {
          history.push("/login");
        } else {
          console.log(response, "response");
          setContent(response.data.value[0]);
        }
        // setEContent(response.data[0].value);
        // setETitle(response.data[0].value);
      });
  }, []);
  console.log(content, "cont");

  return (
    content &&
    content.map((item) => (
      <div className="Explore">
        <span className="timing">{item.title}</span>
        <p className="description">{item.content}</p>
        <button className="Video">Video Consultation</button>
        <button className="time">Timing of Visitors</button>
      </div>
    ))
  );
}
export default Explore;

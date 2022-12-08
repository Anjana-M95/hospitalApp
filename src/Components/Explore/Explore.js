import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./explore.css";
function Explore() {
  // const [eTitle, setETitle] = useState("");
  // const [eContent, setEContent] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();
  useEffect(() => {
    console.log("useeffect");
    console.log(localStorage.getItem("user"));
    axios
      .get("http://127.0.0.1:3001/auth/exploreService", {
        headers: { authorization: localStorage.getItem("user") },
        params: { flag: "explore" },
      })

      .then((response) => {
        if (response.data.success === false) {
          history.push("/login");
        } else {
          console.log(response, "response");
          setContent(response.data.value);
        }
      });
  }, []);
  console.log(content, "cont");

  return (
    content &&
    content.map((item) => (
      <div className="Explore">
        <span className="timing">{item.title}</span>
        <p className="description">{item.content}</p>
        <button type="button" className="Video">
          Video Consultation
        </button>
        <button type="button" className="time">
          Timing of Visitors
        </button>
      </div>
    ))
  );
}
export default Explore;

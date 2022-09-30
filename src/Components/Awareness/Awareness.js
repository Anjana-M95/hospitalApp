import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AwarenessAPI from "../../API/AwarenessAPI";
import "./Awareness.css";

function Awareness() {
  const health = useSelector((state) => state.awarenessList.value.data);
  const dispatch = useDispatch();
  useEffect(() => dispatch(AwarenessAPI()), []);
  return (
    <div className="Awareness">
      <h1>HEALTH MATTERS</h1>
      <img
        className="matter"
        src="https://shcs.ucdavis.edu/sites/g/files/dgvnsk7846/files/inline-images/Wheel_0.png"
        alt="Health matter"
      />
      <p>
        Caring for your mind, body, and soul usually affected by your culture
        and your life experiences,self-defined and dynamic, not only the absence
        of illness or stress. You can still strive for wellness even if you are
        experiencing these challenges in your life.
      </p>
      <h3>Health Awareness Programs</h3>
      <ul className="consult">
        {health &&
          health.map((item) => (
            <li>
              <h3>{item.cure}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Awareness;

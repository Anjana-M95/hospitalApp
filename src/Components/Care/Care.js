import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CareAPI from "../../API/CareAPI";
import "./Care.css";

function Care() {
  const carer = useSelector((state) => state.careList.value.data);

  const dispatch = useDispatch();
  useEffect(() => dispatch(CareAPI()), []);

  return carer
    ? carer.map((item) => {
        return (
          <div key={item.id}>
            <div className="Care">
              <h2 className="heading">{item.head}</h2>
              <p className="paragrph">{item.para}</p>
            </div>
            <div>
              <ul className="list">
                <li>{item.point}</li>
              </ul>
            </div>
          </div>
        );
      })
    : "";
}

export default Care;

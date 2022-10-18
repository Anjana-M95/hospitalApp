import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ServicesAPI from "../../API/ServicesAPI";
import "./Services.css";

function Services() {
  const history = useHistory();
  const cards = useSelector((state) => state.serviceList.value);

  console.log("cards", cards);
  const dispatch = useDispatch();
  useEffect(() => dispatch(ServicesAPI()), []);

  return cards
    ? cards.map((item) => {
        return (
          <div key={item.id} className="Services">
            <div className="serve">
              <img className="hservice" src={item.image} alt="Nil" />
            </div>
            <h2
              className="header"
              onClick={() => {
                history.push(item.link);
              }}
            >
              {item.title}
            </h2>
          </div>
        );
      })
    : "";
}

export default Services;

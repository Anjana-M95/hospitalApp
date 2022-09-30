import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CareerAPI from "../../API/CareerAPI";

function Career() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(CareerAPI()), []);
  const job = useSelector((state) => state.careerList.value.data);

  return (
    <div className="Career">
      <h1>CAREERS</h1>
      <h2>Join our team</h2>
      <img
        src="https://img.freepik.com/premium-vector/healthcare-medical-team-shape-heart-hospital-staff-health-professionals-group-uniform-your-concepts-vector-illustration_81894-1993.jpg?w=740"
        alt="career"
      />
      {job &&
        job.map((item) => {
          return (
            <>
              <h3 key={item.id}>{item.choice}</h3>
              <p key={item}>{item.open}</p>
            </>
          );
        })}
    </div>
  );
}

export default Career;

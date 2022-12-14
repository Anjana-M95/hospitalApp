import React, { useEffect } from "react";
import FacilityAPI from "../../API/FacilityAPI";
import { useDispatch, useSelector } from "react-redux";

function Facility() {
  const serve = useSelector((state) => state.facilityList.value.data);

  const dispatch = useDispatch();
  useEffect(() => dispatch(FacilityAPI()), []);
  return (
    <div className="Facility">
      <img
        src="https://www.wallpapertip.com/wmimgs/64-643104_linkedin-cover-photo-healthcare.jpg"
        alt="Facilities"
      />
      <ul>{serve && serve.map((item) => <li>{item.service}</li>)}</ul>
    </div>
  );
}

export default Facility;

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CoursesAPI from "../../API/CoursesAPI";

function Courses(props) {
  const detail = useSelector((state) => state.courseList.value.data);
  const dispatch = useDispatch();
  useEffect(() => dispatch(CoursesAPI()), []);

  return (
    <div className="Courses">
      {detail
        ? detail.map((item) => {
            if (props.value === 0) {
              return <p key={item.id}>{item.division}</p>;
            }
            if (props.value === item.a) {
              return <p key={item.id}>{item.division}</p>;
            }
            return <p key={item.id}></p>;
          })
        : ""}
    </div>
  );
}

export default Courses;

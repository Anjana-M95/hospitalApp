import { courseopt } from "../Redux/Courses/CoursesAction";
import axios from "axios";
function CoursesAPI() {
  return function(dispatch) {
    axios.get("http://localhost:3000/branches").then((data) => {
      dispatch(courseopt(data));
    }).catch(()=>{
      console.log("error");
     })
  };
}
export default CoursesAPI;

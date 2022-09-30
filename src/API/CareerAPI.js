import { jointeam } from "../Redux/Career/CareerAction";
import axios from "axios";

function CareerAPI() {
  return function(dispatch) {
    axios.get("http://localhost:3000/medcareer").then((data) => {
      dispatch(jointeam(data));
    }).catch(()=>{
      console.log("error");
     })
  };
}
export default CareerAPI;

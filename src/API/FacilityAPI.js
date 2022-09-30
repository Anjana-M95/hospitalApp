import axios from "axios";
import { facilities } from "../Redux/Facility/FacilityAction";

function FacilityAPI() {
  return function(dispatch) {
    axios.get("http://localhost:3000/facility").then((data) => {
      dispatch(facilities(data));
    }).catch(()=>{
      console.log("error");
     })
  };
}
export default FacilityAPI;

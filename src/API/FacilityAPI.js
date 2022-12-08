import axios from "axios";
import { facilities } from "../Redux/Facility/FacilityAction";

function FacilityAPI() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/auth/details")
      .then((data) => {
        console.log(data, "data");
        dispatch(facilities(data.data.value));
      })
      .catch(() => {
        console.log("error");
      });
  };
}
export default FacilityAPI;

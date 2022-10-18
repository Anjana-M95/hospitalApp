import axios from "axios";
import { servicecards } from "../Redux/Services/ServicesAction";

function ServicesAPI() {
  console.log("API");
  return function (dispatch) {
    axios
      .get("http://127.0.0.1:3001/auth/cards", {
        headers: { authorization: localStorage.getItem("user") },
      })
      .then((response) => {
        console.log("APIresponse", response);
        dispatch(servicecards(response.data.value[0]));
      })
      .catch(() => {
        console.log("error");
      });
  };
}
export default ServicesAPI;

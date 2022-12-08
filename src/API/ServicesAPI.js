import axios from "axios";
import { servicecards } from "../Redux/Services/ServicesAction";

function ServicesAPI() {
  return function (dispatch) {
    axios
      .get("http://127.0.0.1:3001/auth/cards", {
        headers: { authorization: localStorage.getItem("user") },
        params: { flag: "cards" },
      })
      .then((data) => {
        console.log("APIdata", data);
        dispatch(servicecards(data.data.value[0]));
      })
      .catch(() => {
        console.log("error");
      });
  };
}
export default ServicesAPI;

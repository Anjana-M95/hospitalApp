import axios from "axios";
import { getcare } from "../Redux/Care/CareAction";

function CareAPI() {
  return function (dispatch) {
    axios
      .get("http://localhost:3000/list")
      .then((data) => {
        dispatch(getcare(data));
      })
      .catch(() => {
        console.log("error");
      });
  };
}
export default CareAPI;

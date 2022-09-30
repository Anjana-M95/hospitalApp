import axios from "axios";
import { healthaware } from "../Redux/Awareness/AwarenessAction";
function AwarenessAPI() {
  return function(dispatch) {
    axios.get("http://localhost:3000/aware").then((data) => {
      dispatch(healthaware(data));
    }).catch(()=>{
      console.log("error");
     })
  };
}
export default AwarenessAPI;

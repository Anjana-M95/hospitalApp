import axios from "axios";
import { servicecards } from "../Redux/Services/ServicesAction";

function ServicesAPI() {
  return function(dispatch) {
    axios.get("http://localhost:3000/card").then((data) => {
      dispatch(servicecards(data));
    }).catch(()=>{
      console.log("error");
     })
  };
}
export default ServicesAPI;

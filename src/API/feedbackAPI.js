import axios from "axios";
import { feedback } from "../Redux/feedback/feedbackAction";

function feedbackAPI(doctorId) {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/auth/doctorFeedback", {
        params: { doctorId },
      })
      .then((data) => {
        console.log(data, "feedbackData");
        if (data.data.success) {
          dispatch(feedback(data.data.value));
        }
      });
  };
}
export default feedbackAPI;

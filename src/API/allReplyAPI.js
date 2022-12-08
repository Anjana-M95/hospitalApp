import axios from "axios";
import { replyFB } from "../Redux/feedback/feedbackAction";

export function allReplyAPI(fb_id, dr_id) {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/auth/AllReply", {
        params: { fb_id, dr_id },
      })
      .then((data) => {
        console.log(data, "feedbackData");
        if (data.data.success) {
          dispatch(replyFB(data.data.value));
        }
      });
  };
}

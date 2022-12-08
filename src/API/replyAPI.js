import axios from "axios";
import feedbackAPI from "./feedbackAPI";
export function replyAPI(id, name, reply, doctorid) {
  return function (dispatch) {
    axios
      .post(
        "http://127.0.0.1:3001/auth/reply",
        {
          name: name,
          reply: reply,
          id,
        },
        { params: { _limit: 10 } }
      )
      .then((data) => {
        console.log("Replyresponse ", data);
        dispatch(feedbackAPI(doctorid));
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };
}

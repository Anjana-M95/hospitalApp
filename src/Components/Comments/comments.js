import { Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allReplyAPI } from "../../API/allReplyAPI";
import "./comments.css";

function Comments(props) {
  const [comments, setComments] = useState("");
  const { fb_id, dr_id } = props;
  const dispatch = useDispatch();
  const feedbacksReply = useSelector(
    (state) => state.feedbackList.feedbackReply
  );
  console.log("fb_id", fb_id, "dr_id", dr_id);
  useEffect(() => {
    dispatch(allReplyAPI(fb_id, dr_id));
    feedbacksReply.map((value) => {
      console.log("value_id", value.id, "fb_id", fb_id, "reply");
      if (fb_id === value.id) {
        setComments(value.reply);
      }
    });
  }, []);
  console.log(
    "=================================================================="
  );
  console.log(comments, "comments");
  console.log(feedbacksReply, "feedbacksReply");
  return (
    <div className="comments">
      {comments &&
        comments.map((value) => {
          return (
            <div className="reply">
              {" "}
              <Typography variant="h6" color="text.secondary" ALIGN="center">
                {value.name}
              </Typography>
              <Typography variant="body2" color="text.primary" ALIGN="center">
                {value.reply}
              </Typography>
            </div>
          );
        })}
    </div>
  );
}

export default Comments;
